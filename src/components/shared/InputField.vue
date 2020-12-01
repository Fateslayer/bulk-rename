<template>
	<div class="input-field">
		<slot/>
	</div>
</template>

<style scoped>
.input-field {
	display: flex;
	align-items: center;
}
.input-field > *:first-child {
	margin-right: 10px;
}
.input-field span {
	font-size: 15px;
	color: var(--color-text-primary);
}
.input-field:not(:last-child) {
	margin-right: 20px;
}
</style>
