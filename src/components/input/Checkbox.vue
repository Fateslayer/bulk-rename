<template>
	<input type="checkbox" :value="value" :checked="isChecked" @change="updateInput">
</template>

<script>
export default {
	model: {
		prop: 'modelValue',
		event: 'change'
	},
	props: ['modelValue', 'value'],
	computed: {
		isChecked() {
			if (this.modelValue instanceof Array) {
				return this.modelValue.includes(this.value);
			} else {
				return this.modelValue == this.value;
			}
		}
	},
	methods: {
		updateInput() {
			let newModel = '';
			if (this.modelValue instanceof Array) {
				newModel = [...this.modelValue];
				if (this.isChecked) {
					newModel.splice(newModel.indexOf(this.value), 1);
				} else {
					newModel.push(this.value);
				}
			} else {
				newModel = this.isChecked ? '' : this.value;
			}
			this.$emit('change', newModel);
		}
	}
};
</script>

<style scoped>
input {
	appearance: none;
	display: flex;
	align-content: center;
	justify-content: center;
	width: 25px;
	height: 25px;
	border: 2px solid var(--color-input-secondary);
	border-radius: 6px;
	background-color: transparent;
	cursor: pointer;
	box-sizing: border-box;
	outline: none;
	transition: all 0.3s;
}

.light {
	border: 2px solid var(--color-border-dark);
}

input:hover {
	border-color: var(--color-input-primary);
}

.light:hover {
	border-color: var(--color-white);
}

input:checked {
	border-color: var(--color-input-primary);
}

.light:checked {
	border-color: var(--color-white);
}

input:checked::after {
	content: '\2714';
	font-size: 15px;
	color: var(--color-input-primary);
	display: flex;
	align-self: center;
	justify-self: center;
}

.light:checked::after {
	color: var(--color-white);
}
</style>
