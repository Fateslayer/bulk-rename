<template>
	<input type="radio" :checked="isChecked" :value="value" @change="$emit('change', value)">
</template>

<script>
export default {
	model: {
		prop: 'modelValue',
		event: 'change'
	},
	props: {
		value: {
			type: String,
			default: ''
		},
		modelValue: {
			type: String,
			default: ''
		}
	},
	computed: {
		isChecked() {
			return this.modelValue === this.value;
		}
	}
};
</script>

<style scoped>
input {
	appearance: none;
	width: 25px;
	height: 25px;
	border: 2px solid var(--color-input-secondary);
	border-radius: 50%;
	cursor: pointer;
	box-sizing: border-box;
	outline: none;
	transition: all 0.3s;
}

input:hover {
	border-color: var(--color-input-primary);
}

input:checked {
	padding: 4px;
	background-clip: content-box;
	border-color: var(--color-input-primary);
	background-color: var(--color-input-primary);
}
</style>
