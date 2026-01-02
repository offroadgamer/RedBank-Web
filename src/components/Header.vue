<script>
	
</script>

<template>
	<div class="navbar-container">
		<div class="logo-container">
			<img src="@/assets/redbank_logo.jpg" alt="website logo">
		</div>
		<div class="title-container">
			<h2>RedBank</h2>
		</div>
		<div class="menu-container">
			<div class="burger-menu-bar"></div>
			<div class="burger-menu-bar"></div>
			<div class="burger-menu-bar"></div>						
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
		align-items: center;
	}

	.logo-container {
		width: 5%;
		display: flex;
		justify-content: right;
		padding: 5px;
	}

	.title-container {
		width: 85%;
	}
	
	.menu-container {
		width: 10%;
		display: flex;
		flex-direction: column;
	}

	.burger-menu-bar {
		height: 7px;
		width: 50px;
		background-color: black;
		margin: 4px;
	}

</style>