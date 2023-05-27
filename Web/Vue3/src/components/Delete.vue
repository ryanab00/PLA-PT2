<script setup lang="ts">
import { useStore } from '@/stores/Store';

const st = useStore()
</script>

<template>
	<div class="p-1 columns">
		<input v-model="st.DelSearchFilter" placeholder="Search for Deleted Records" class="column is-10" />
		<span class="column is-11">
		</span>
		<span class="column is-3">
		</span>
	</div>
	<div class="columns br unselectable p-1">
		<span class="column is-4">Student ID</span>
		<span class="column is-9">Name</span>
		<span class="column is-2">State</span>
		<span class="column is-2">Major</span>
		<span class="column is-2">GPA</span>
		<span class="column is-2">Status</span>
		<span class="column is-3">Action</span>
	</div>

	<!-- <pre>{{ st.SortedData }}</pre> -->
	<div class="columns br unselectable cell p-1" v-for="(d, index) in st.DelSortedData" :key="index">
		<span class="column is-4">{{ d.StudentId }}</span>
		<span class="column is-9">{{ d.FirstName + " " + d.LastName }}</span>
		<span class="column is-2">{{ d.StateCode }}</span>
		<span class="column is-2">{{ d.MajorCode }}</span>
		<span class="column is-2">{{ d.GPA }}</span>
		<span class="column is-2">{{ d.Status }}</span>
		<span class="column is-3">
			<button @click="st.RestoreRecord(index)">Restore</button>
			<button class="ml-2" @click="st.PurgeRecord(index)">Purge</button>
		</span>
	</div>
</template>
