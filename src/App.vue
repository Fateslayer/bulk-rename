<template>
	<div class="container">
		<transition name="fade" mode="out-in">
			<router-view/>
		</transition>
	</div>
</template>

<style>
* {
	margin: 0;
	padding: 0;
}

:root {
	--color-white: #ffffff;
	--color-background-primary: #43425d;
	--color-background-secondary: #f0f0f7;
	--color-text-primary: #43425d;
	--color-text-secondary: #4d4f5c;
	--color-text-accent: #bcbccb;
	--color-border-primary: #f1f1f3;
	--color-border-dark: #bcbccb;
	--color-input-primary: #3b86ff;
	--color-input-secondary: #c3daff;
}

body {
	font-family: 'Source Sans Pro', sans-serif;
	background-color: var(--color-background-secondary);
	padding: 20px;
	min-height: 100vh;
	box-sizing: border-box;
}

.container {
	max-width: 70vw;
	margin: auto;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
