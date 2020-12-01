<template>
	<div class="options">
		<app-text-input v-model="data.text" placeholder="Text"/>
		<app-input-field>
			<app-radio value="prefix" v-model="data.mode"/>
			<span>Prefix</span>
		</app-input-field>
		<app-input-field>
			<app-radio value="suffix" v-model="data.mode"/>
			<span>Suffix</span>
		</app-input-field>
		<app-input-field>
			<app-radio value="position" v-model="data.mode"/>
			<span>At Position</span>
		</app-input-field>
		<app-number-input v-if="data.mode === 'position'" v-model="data.position"/>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import Operation from '@/library/operation';
import Radio from '@/components/input/Radio';
import TextInput from '@/components/input/TextInput';
import InputField from '@/components/shared/InputField';
import NumberInput from '@/components/input/NumberInput';

export default {
	data() {
		return {
			data: {
				text: '',
				mode: 'prefix',
				position: 0
			}
		};
	},
	components: {
		'app-radio': Radio,
		'app-text-input': TextInput,
		'app-input-field': InputField,
		'app-number-input': NumberInput
	},
	methods: {
		...mapActions({
			updateOperations: 'operations/updateOperations',
			applyOperations: 'files/applyOperations'
		}),
		insert(value, { text, mode, position }) {
			if (mode == 'prefix') {
				value = text + value;
			} else if (mode == 'suffix') {
				value = value + text;
			} else if (mode == 'position') {
				value = [
					value.slice(0, position) + text + value.slice(position)
				].join('');
			}
			return value;
		}
	},
	watch: {
		data: {
			deep: true,
			handler: function(value) {
				const operation = new Operation('insert');
				if (value.text != '') {
					operation.callback = this.insert;
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
</style>
