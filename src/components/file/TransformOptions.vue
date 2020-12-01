<template>
	<div class="options">
		<app-input-field>
			<app-radio v-model="method"/>
			<span>None</span>
		</app-input-field>
		<app-input-field>
			<app-radio v-model="method" value="lowercase"/>
			<span>Lowercase</span>
		</app-input-field>
		<app-input-field>
			<app-radio v-model="method" value="uppercase"/>
			<span>Uppercase</span>
		</app-input-field>
		<app-input-field>
			<app-radio v-model="method" value="titlecase"/>
			<span>Titlecase</span>
		</app-input-field>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import Operation from '@/library/operation';
import Radio from '@/components/input/Radio';
import InputField from '@/components/shared/InputField';

export default {
	data() {
		return {
			method: ''
		};
	},
	components: {
		'app-radio': Radio,
		'app-input-field': InputField
	},
	methods: {
		...mapActions({
			updateOperations: 'operations/updateOperations',
			applyOperations: 'files/applyOperations'
		}),
		lowercase: text => text.toLowerCase(),
		uppercase: text => text.toUpperCase(),
		titlecase: text =>
			text
				.split(' ')
				.map(word => word[0].toUpperCase() + word.substring(1))
				.join(' ')
	},
	watch: {
		method(value) {
			const operation = new Operation('transform');
			if (value != '') {
				operation.callback = this[value];
			}
			this.updateOperations(operation);
			this.applyOperations();
		}
	}
};
</script>