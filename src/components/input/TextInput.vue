<template>
	<input
		type="text"
		:placeholder="placeholder"
		:value="value"
		@input="$emit('input', $event.target.value)"
	>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: ''
		},
		placeholder: {
			type: String,
			default: ''
		}
	}
};
</script>

<style scoped>
input {
	width: 150px;
	border: 1px solid var(--color-border-dark);
	border-radius: 6px;
	padding: 4px 6px;
	font-size: 13px;
	color: var(--color-text-secondary);
	outline: none;
	box-sizing: border-box;
	transition: all 0.3s;
}

input::placeholder {
	color: var(--color-border-dark);
}

input:hover,
input:focus {
	border-color: var(--color-input-primary);
	color: var(--color-text-primary);
}
</style>
