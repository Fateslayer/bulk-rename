<template>
	<div class="number-input">
		<span class="value">{{ value }}</span>
		<span class="options">
			<button class="option-btn" @click="increment">&and;</button>
			<button class="option-btn" @click="decrement">&or;</button>
		</span>
	</div>
</template>

<script>
export default {
	model: {
		prop: 'modelValue',
		event: 'change'
	},
	props: {
		modelValue: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			value: this.modelValue
		};
	},
	methods: {
		increment() {
			this.value++;
			this.$emit('change', this.value);
		},
		decrement() {
			if (this.value > 0) {
				this.value--;
				this.$emit('change', this.value);
			}
		}
	}
};
</script>

<style scoped>
.number-input {
	display: flex;
	align-items: center;
}

.value {
	font-size: 18px;
	color: var(--color-input-primary);
	margin-right: 10px;
}

.options {
	display: inline-flex;
	flex-direction: column;
}

.option-btn {
	font-weight: bold;
	border: none;
	color: var(--color-border-dark);
	background-color: transparent;
	line-height: 8px;
	cursor: pointer;
	outline: none;
	user-select: none;
	box-sizing: border-box;
}

.option-btn:hover {
	color: var(--color-input-primary);
}

.option-btn:first-child {
	margin-bottom: 4px;
}
</style>
