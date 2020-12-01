<template>
	<div class="options">
		<app-input-field>
			<span>First</span>
			<app-number-input v-model="data.first"/>
		</app-input-field>
		<app-input-field>
			<span>Last</span>
			<app-number-input v-model="data.last"/>
		</app-input-field>
		<app-input-field>
			<span>From</span>
			<app-number-input v-model="data.from"/>
		</app-input-field>
		<app-input-field>
			<span>To</span>
			<app-number-input v-model="data.to"/>
		</app-input-field>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import Operation from '@/library/operation';
import InputField from '@/components/shared/InputField';
import NumberInput from '@/components/input/NumberInput';

export default {
	data() {
		return {
			data: {
				first: 0,
				last: 0,
				from: 0,
				to: 0
			}
		};
	},
	components: {
		'app-input-field': InputField,
		'app-number-input': NumberInput
	},
	methods: {
		...mapActions({
			updateOperations: 'operations/updateOperations',
			applyOperations: 'files/applyOperations'
		}),
		remove(value, { first, last, from, to }) {
			if (first > 0) {
				value = value.slice(first);
			}
			if (last > 0) {
				value = value.slice(0, -last);
			}
			if (from > 0 && to > 0) {
				value = value.slice(0, from) + value.slice(-to);
			}
			return value;
		}
	},
	watch: {
		data: {
			deep: true,
			handler: function(value) {
				const operation = new Operation('remove');
				if (
					value.first != 0 ||
					value.last != 0 ||
					value.from != 0 ||
					value.to != 0
				) {
					operation.callback = this.remove;
					operation.data = value;
				}
				this.updateOperations(operation);
				this.applyOperations();
			}
		}
	}
};
</script>
