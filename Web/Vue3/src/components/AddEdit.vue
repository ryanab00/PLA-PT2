<script setup lang=ts>
import { useStore } from '@/stores/Store';

const st = useStore()
</script>
<template>
	<div class="p-1 columns">
		<span class="column is-2">
		</span>
		<span class="column is-6">First Name</span>
		<span class="column is-6">Last Name</span>
		<span class="column is-6">GPA</span>
		<span class="column is-3">
			<button class="ml-2" @click="st.AddRecord" :disabled="!st.CanSubmit">Submit</button>
			<button class="ml-1" @click="st.ClearAddPrompt">Clear</button>
			<button class="ml-1" @click="st.CloseAddPrompt">Close</button>
		</span>
	</div>

	<div class="p-1 columns">
		<span class="column is-2">
		</span>
		<span class="column is-6">
			<input v-model="st.NewRecordInfo.FirstName" :class="{ 'is-danger': !st.RecordValidation.FirstName }"
				placeholder="First Name" />
		</span>
		<span class="column is-6">
			<input v-model="st.NewRecordInfo.LastName" :class="{ 'is-danger': !st.RecordValidation.LastName }"
				placeholder="Last Name" />
		</span>
		<span class="column is-6">
			<input v-model="st.NewRecordInfo.GPA" :class="{ 'is-danger': !st.RecordValidation.GPA }"
				placeholder="Format: #.##" />
		</span>
		<span class="column is-3">
		</span>
	</div>

	<div class="p-1 columns">
		<span class="column is-2">
		</span>
		<span class="column is-6">Student ID</span>
		<span class="column is-6">State</span>
		<span class="column is-6">Major</span>
		<span class="column is-4">
		</span>
	</div>

	<div class="p-1 columns">
		<span class="column is-2">
		</span>
		<span class="column is-6">
			<input v-model="st.NewRecordInfo.StudentId" :class="{ 'is-danger': !st.RecordValidation.StudentId }"
				placeholder="Student ID" />
		</span>
		<span class="column is-6">
			<select v-model="st.NewRecordInfo.StateId" :class="{ 'is-danger': !st.RecordValidation.StateId }">
				<option v-for="(s, index) in st.StatesDropdown" :key="index" :value="s.Id">
					{{ s.Code + " - " + s.State }}
				</option>
			</select>
		</span>
		<span class="column is-6">
			<select v-model="st.NewRecordInfo.MajorId" :class="{ 'is-danger': !st.RecordValidation.MajorId }">
				<option v-for="(s, index) in st.MajorsDropdown" :key="index" :value="s.Id">
					{{ s.Code + " - " + s.Name }}
				</option>
			</select>
		</span>
		<span class="column is-4">
		</span>
	</div>
</template>

<style lang="scss">
.is-danger {
	border-color: red;
}
</style>
