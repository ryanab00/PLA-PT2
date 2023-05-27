export interface IState {
		Id: number
		State: string
		Code: string
}

export interface IMajor {
		Id: number
		Name: string
		Code: string
		Desc: string
}

export interface IStudent {
		Id?: string
		StudentId: string
		FirstName: string
		LastName: string
		StateId: number
		MajorId: number
		StateCode: string
		MajorCode: string
		GPA?: number
		Status: string
		Selected?: boolean
}
