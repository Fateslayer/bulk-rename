<template>
	<div class="options">
		<app-text-input v-model="data.find" placeholder="Find"/>
		<app-text-input v-model="data.replace" placeholder="Replace With"/>
		<app-input-field>
			<app-checkbox v-model="data.mode" value="sensitive"/>
			<span>Case Sensitive</span>
		</app-input-field>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import Operation from '@/library/operation';
import Checkbox from '@/components/input/Checkbox';
import TextInput from '@/components/input/TextInput';
import InputField from '@/components/shared/InputField';

export default {
	data() {
		return {
			data: {
				find: '',
				replace: '',
				mode: ''
			}
		};
	},
	components: {
		'app-checkbox': Checkbox,
		'app-text-input': TextInput,
		'app-input-field': InputField
	},
	methods: {
		...mapActions({
			updateOperations: 'operations/updateOperations',
			applyOperations: 'files/applyOperations'
		}),
		replace(value, { find, replace, mode }) {
			const options = mode == 'sensitive' ? 'g' : 'ig';
			const regex = new RegExp(find, options);
			return value.replace(regex, replace);
		}
	},
	watch: {
		data: {
			deep: true,
			handler: function(value) {
				const operation = new Operation('replace');
				if (value.find != '') {
					operation.callback = this.replace;
					operation.data = value;
				}
				this.updateOperations(operation);
				this.applyOperations();
			}
		}
	}
};
</script>

<style scoped>
input {
	margin-right: 20px;
}

input::placeholder {
	color: var(--color-border-dark);
}
</style>
