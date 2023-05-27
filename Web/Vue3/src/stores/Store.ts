import { ref, watch, reactive } from 'vue'
import { defineStore } from 'pinia'
import { includes, cloneDeep, isEqual } from 'lodash'
import type { IMajor, IState, IStudent } from '@/Interfaces/Interfaces'
import { PostAsync } from '@/Tools/Tools'
import SwitchColors from './theme'

export const useStore = defineStore('Store', () => {
	const Data = ref<IStudent[]>([])
	const SortedData = ref<IStudent[]>([])
	const DelData = ref<IStudent[]>([])
	const DelSortedData = ref<IStudent[]>([])

	const StatesDropdown = ref<IState[]>([])
	const MajorsDropdown = ref<IMajor[]>([])

	const ComponentName = ref('Home')
	const DelSearchFilter = ref('')
	const DelSortData = () => {
		const _filter = (i: IStudent) => {
			const FullName = i.FirstName + ' ' + i.LastName
			const SearchValue = SearchFilter.value.toLowerCase()

			const studentIdCheck = includes(i.StudentId?.toLowerCase(), SearchValue)
			const NameCheck = includes(FullName?.toLowerCase(), SearchValue)

			return studentIdCheck || NameCheck
		}
		const data = DelData.value.filter(_filter)
		DelSortedData.value = data
	}
	const SearchFilter = ref('')
	const SortData = () => {
		const _filter = (i: IStudent) => {
			const FullName = i.FirstName + ' ' + i.LastName
			const SearchValue = DelSearchFilter.value.toLowerCase()

			const studentIdCheck = includes(i.StudentId?.toLowerCase(), SearchValue)
			const NameCheck = includes(FullName?.toLowerCase(), SearchValue)

			return studentIdCheck || NameCheck
		}
		const data = Data.value.filter(_filter)
		SortedData.value = data
	}

	const RecordInit: IStudent = reactive({
		Id: undefined,
		StudentId: '',
		FirstName: '',
		LastName: '',
		StateId: -1,
		StateCode: '',
		MajorId: -1,
		MajorCode: '',
		GPA: undefined,
		Status: 'A'
	})
	const RecordValidation = reactive<Record<string, boolean>>({
		StudentId: true,
		FirstName: true,
		LastName: true,
		StateId: true,
		MajorId: true,
		GPA: true,
		Submit: false
	})

	const NewRecordInfo: IStudent = reactive({ ...RecordInit })
	const NewRecordTemp: IStudent = reactive({ ...RecordInit })

	const CanSubmit = ref(false)
	const AddPromptIsShown = ref(false)

	const GPARegex = /^\d{1}.\d{2}$/
	// const CheckFields = (o: IStudent, n: IStudent) => {
	//   // console.log(o)
	//   // console.log(n)

	//   RecordValidation.StudentId = (NewRecordInfo.StudentId.trim() !== '')
	//   RecordValidation.FirstName = (NewRecordInfo.FirstName.trim() !== '')
	//   RecordValidation.LastName = (NewRecordInfo.LastName.trim() !== '')
	//   RecordValidation.StateId = (NewRecordInfo.StateId > 0)
	//   RecordValidation.MajorId = (NewRecordInfo.MajorId > 0)
	//   RecordValidation.GPA = (NewRecordInfo.GPA !== -1 && GPARegex.test(String(NewRecordInfo.GPA).trim()))

	//   RecordValidation.Submit = true
	//   for (const key in RecordValidation) {
	//     if (!RecordValidation[key]) {
	//       RecordValidation.Submit = false
	//       break
	//     }
	//   }
	// }
	const CheckFields = (o: IStudent, n: IStudent) => {
		let flag = true
		RecordValidation.StudentId = NewRecordInfo.StudentId.trim() !== ''
		flag &&= RecordValidation.StudentId
		RecordValidation.FirstName = NewRecordInfo.FirstName.trim() !== ''
		flag &&= RecordValidation.FirstName
		RecordValidation.LastName = NewRecordInfo.LastName.trim() != ''
		flag &&= RecordValidation.LastName
		RecordValidation.StateId = NewRecordInfo.StateId > 0
		flag &&= RecordValidation.StateId
		RecordValidation.MajorId = NewRecordInfo.MajorId > 0
		flag &&= RecordValidation.MajorId
		RecordValidation.GPA =
			(NewRecordInfo.GPA ?? 0) >= 0 && GPARegex.test(String(NewRecordInfo.GPA).trim())
		flag &&= RecordValidation.GPA

		RecordValidation.Submit = flag
	}
	const IsModified = ref(false)
	const IsRecordModified = () => {
		const flag = isEqual(NewRecordInfo, NewRecordTemp)
		if (flag) {
			IsModified.value = false
			return
		}
		IsModified.value = true
	}
	const ClearAddPrompt = () => {
		Object.assign(NewRecordInfo, RecordInit)
	}
	function DisplayAddPrompt() {
		Display('AddEdit')
		Object.assign(NewRecordInfo, RecordInit)
		AddPromptIsShown.value = !AddPromptIsShown.value
	}
	function DisplayEditPrompt(i: number) {
		Display('AddEdit')
		Object.assign(NewRecordInfo, cloneDeep(SortedData.value[i]))
		Object.assign(NewRecordTemp, SortedData.value[i])
		AddPromptIsShown.value = true
	}
	function CloseAddPrompt() {
		Display('Home')
		AddPromptIsShown.value = false
		Object.assign(NewRecordInfo, RecordInit)
	}

	//#region POST Functions
	async function GetAllStates() {
		StatesDropdown.value = await PostAsync('GetStates')
	}

	async function GetAllMajors() {
		MajorsDropdown.value = await PostAsync('GetMajors')
	}

	async function GetAllRecords(): Promise<void> {
		Data.value = []
		DelData.value = []
		let resp = await PostAsync<IStudent[]>('StudentGetAll')
		resp.forEach((e) => {
			if (e.Status == 'A') {
				Data.value.push(e)
				console.log('Added to Data')
			} else {
				DelData.value.push(e)
				console.log('Added to Deleted Data')
			}
		})
		SortData()
		DelSortData()
	}
	async function CheckStudentId(): Promise<boolean> {
		// Sends true if ID exists in DB
		return await PostAsync('CheckStudentId', NewRecordInfo.StudentId)
	}
	async function AddRecord(): Promise<void> {
		// Add record to DB
		// NewRecordInfo.Id = undefined

		const resp = await CheckStudentId()
		if (resp) {
			RecordValidation.Submit = false
			RecordValidation.StudentId = false
		} else {
			await PostAsync('StudentAdd', NewRecordInfo)
			Object.assign(NewRecordInfo, RecordInit)
			GetAllRecords()
			AddPromptIsShown.value = false
		}
	}

	async function EditRecord(): Promise<void> {
		// Edit existing record
		// let i = Data.value.findIndex(e => e.Id == NewRecordInfo.Id)
		await PostAsync('StudentUpdate', NewRecordInfo)
		GetAllRecords()
	}
	async function DeleteRecord(i: number): Promise<void> {
		// Adds record to trash
		let index = Data.value.findIndex((e) => e.Id == SortedData.value[i].Id)
		SortedData.value[i].Status = 'D'
		DelData.value.push(SortedData.value[i])
		Data.value.splice(index, 1)
		await PostAsync('StudentUpdate', SortedData.value[i])
		SortData()
		DelSortData()
	}
	async function RestoreRecord(i: number): Promise<void> {
		// Adds record to trash
		let index = DelData.value.findIndex((e) => e.Id == DelSortedData.value[i].Id)
		DelData.value[i].Status = 'A'
		Data.value.push(DelSortedData.value[i])
		DelData.value.splice(index, 1)
		await PostAsync('StudentUpdate', DelSortedData.value[i])
		SortData()
		DelSortData()
	}
	async function PurgeRecord(i: number): Promise<void> {
		// Hard Delete Record
		// let index = DelData.value.findIndex(e => e.Id == DelSortedData.value[i].Id)
		await PostAsync('StudentDelete', DelSortedData.value[i])
		// DelData.value.slice(index)
		await GetAllRecords()
	}
	//#endregion

	//#region NavBar
	function Display(st: string) {
		ComponentName.value = st
	}
	//#endregion

	//#region Watchers
	watch(
		DelSearchFilter,
		() => {
			DelSortData()
			SearchFilter.value = DelSearchFilter.value
		}
	)
	watch(SearchFilter, () => {
		SortData()
		DelSearchFilter.value = SearchFilter.value
	})
	watch(
		NewRecordInfo,
		(o, n) => {
			IsRecordModified()
			CheckFields(o, n)
			CanSubmit.value = IsModified.value && RecordValidation.Submit
		},
		{ deep: true }
	)
	//#endregion
	GetAllRecords()
	GetAllMajors()
	GetAllStates()
	return {
		AddPromptIsShown,
		CanSubmit,
		ComponentName,
		Data,
		DelSearchFilter,
		DelSortedData,
		MajorsDropdown,
		NewRecordInfo,
		RecordValidation,
		SearchFilter,
		SortedData,
		StatesDropdown,
		AddRecord,
		ClearAddPrompt,
		CloseAddPrompt,
		DeleteRecord,
		Display,
		DisplayAddPrompt,
		DisplayEditPrompt,
		EditRecord,
		GetAllRecords,
		PurgeRecord,
		RestoreRecord,
		SwitchColors
	}
})
