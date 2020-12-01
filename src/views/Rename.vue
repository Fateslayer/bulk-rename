<template>
	<div>
		<app-header/>
		<app-panel title="Files">
			<app-table @change="updateSelected"/>
		</app-panel>
		<transition name="fade" mode="out-in">
			<app-panel title="Operations" v-if="selected.length">
				<app-operations/>
			</app-panel>
		</transition>
		<transition name="fade" mode="out-in">
			<app-panel title="Generate" v-if="selected.length && operations.length">
				<app-generate/>
			</app-panel>
		</transition>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '@/components/shared/Header';
import Panel from '@/components/shared/Panel';
import Table from '@/components/file/Table';
import Operations from '@/components/file/Operations';
import Generate from '@/components/file/Generate';

export default {
	components: {
		'app-header': Header,
		'app-panel': Panel,
		'app-table': Table,
		'app-operations': Operations,
		'app-generate': Generate
	},
	data() {
		return {
			selected: []
		};
	},
	computed: {
		...mapGetters({
			files: 'files/files',
			operations: 'operations/operations'
		})
	},
	methods: {
		redirectIfNoFiles() {
			if (this.files.length == 0) {
				this.$router.replace({ name: 'home' });
			}
		},
		updateSelected(value) {
			this.selected = value;
		}
	},
	created() {
		this.redirectIfNoFiles();
	}
};
</script>
