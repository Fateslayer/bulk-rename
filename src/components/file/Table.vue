<template>
	<div class="table-container">
		<table>
			<thead>
				<tr>
					<th>
						<app-checkbox
							class="light"
							value="checkAll"
							v-model="checkAll"
							@change.native="selectAll($event)"
						/>
					</th>
					<th>Original Name</th>
					<th>New Name</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="file in files" :key="file.id">
					<td>
						<app-checkbox :value="file.id" v-model="selected"/>
					</td>
					<td>{{ file.input }}</td>
					<td>{{ file.output }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Checkbox from '@/components/input/Checkbox';

export default {
	data() {
		return {
			selected: [],
			checkAll: ''
		};
	},
	components: {
		'app-checkbox': Checkbox
	},
	computed: {
		...mapGetters({
			files: 'files/files'
		})
	},
	methods: {
		...mapActions({
			updateSelected: 'files/updateSelected',
			applyOperations: 'files/applyOperations'
		}),
		selectAll(event) {
			if (event.target.checked) {
				this.selected = this.files.map(file => file.id);
			} else {
				this.selected = [];
			}
		},
		updateCheckAll() {
			if (this.selected.length == this.files.length) {
				this.checkAll = 'checkAll';
			} else {
				this.checkAll = '';
			}
		}
	},
	watch: {
		selected(value) {
			this.updateSelected(value);
			this.applyOperations();
			this.updateCheckAll();
			this.$emit('change', value);
		}
	}
};
</script>

<style scoped>
.table-container {
	max-height: 365px;
	overflow-y: auto;
}

table {
	width: 100%;
	border-collapse: collapse;
	table-layout: fixed;
	text-align: left;
	box-shadow: rgba(0, 0, 0, 0.04) 0 2px 6px;
}

thead {
	background-color: var(--color-background-primary);
}

thead th {
	padding: 10px;
	font-size: 13px;
	color: var(--color-white);
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 1.5px;
}

tbody tr:not(:last-child) {
	border-bottom: 1px solid var(--color-border-primary);
}

tbody td {
	padding: 10px;
	font-size: 15px;
	color: var(--color-text-secondary);
}

thead tr th:first-child {
	width: 15px;
}
</style>
