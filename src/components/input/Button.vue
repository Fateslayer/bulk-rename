<template>
	<button @click="$emit('click')" class="btn">
		<slot></slot>
	</button>
</template>

<style scoped>
.btn {
	font-size: 15px;
	color: var(--color-text-primary);
	background-color: transparent;
	border: 1px solid var(--color-text-secondary);
	border-radius: 4px;
	min-width: fit-content;
	width: 150px;
	height: 35px;
	outline: none;
	box-sizing: border-box;
	cursor: pointer;
	overflow: hidden;
}

.btn:hover {
	border: 2px solid var(--color-text-primary);
}

.btn-dark {
	border: none;
	color: var(--color-white);
	background-color: var(--color-text-secondary);
}

.btn-dark:hover {
	background-color: var(--color-text-primary);
}
</style>