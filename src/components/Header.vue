<script setup>
	import LoginButton from './LoginButton.vue';
	import { useUiStore } from '@/stores/UIStore';

	const ui = useUiStore()

	function showLoginMenu() {
		ui.showLoginMenu();
	}
</script>

<template>
	<div class="navbar-container">
		<div class="navbar-content">
			<div class="logo-container">
				<img src="@/assets/redbank_logo.jpg" alt="website logo">
			</div>
			<div class="title-container">
				<h2>RedBank</h2>
			</div>
			<div class="menu-container">
				<button class="btn-underline" @click="showLoginMenu()"><h5>Sign up</h5></button>
				<div class="gap-medium"></div>
				<LoginButton></LoginButton>
			</div>
		</div>
	</div>
</template>

<style>
	template {
		margin: 0px;
	}

	img {
		height: 5rem;
	}

	.navbar-container {
		width: 100%;
		height: 8rem;
		box-shadow: 0px 20px 20px #aaaaaa;
		display: flex;
		justify-content: center;
	}

	.navbar-content {
		display: flex;
		align-items: center;
		height: 100%;
		width: 80vw;

	}

	.logo-container {
		width: 10%;
		display: flex;
		justify-content: right;
		padding: 5px;
	}

	.title-container {
		width: 60%;
	}
	
	.menu-container {
		width: 30%;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.burger-menu-bar {
		height: 7px;
		width: 50px;
		background-color: black;
		margin: 4px;
	}

</style>
