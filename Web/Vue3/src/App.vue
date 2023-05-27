<script setup lang="ts">
import { useStore } from '@/stores/Store';
import About from '@/views/About.vue';
import Delete from '@/components/Delete.vue';
import Home from '@/components/Home.vue';
import AddEdit from '@/components/AddEdit.vue';
import type { Component } from 'vue';
import '@/assets/style.scss'

const st = useStore()
const components: Record<string, Component> = {
	About,
	Delete,
	Home,
	AddEdit,
};
</script>

<template>
	<header class="br">
		<button @click="st.SwitchColors"> Switch Theme </button>
		<nav class="columns is-23 p-2" @click="st.AddPromptIsShown = false">
			<span class="column is-2"></span>
			<h1 @click="st.Display('Home')" class="column is-3" :class="{ 'is-active': st.ComponentName == 'Home' }">
				Home
			</h1>
			<h1 @click="st.Display('Delete')" class="column is-3" :class="{ 'is-active': st.ComponentName == 'Delete' }">
				Trash Can
			</h1>
			<span class="column is-14"></span>
			<h1 @click="st.Display('About')" class="column is-1" :class="{ 'is-active': st.ComponentName == 'About' }">
				About
			</h1>
			<span class="column is-2"></span>
		</nav>
	</header>
	<main class="br p-1">
		<component :is="components[st.ComponentName]" />
	</main>
	<footer class="br p-1"><sub>PLA2023</sub></footer>
</template>