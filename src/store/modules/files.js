import File from '@/library/file';

export const files = {
	namespaced: true,
	state: {
		files: []
	},
	getters: {
		files(state) {
			return state.files;
		}
	},
	mutations: {
		setFiles(state, names) {
			let id = 0;
			state.files = names.map(name => new File(id++, name));
		},
		updateSelected(state, selected) {
			state.files = state.files.map(file => {
				file.selected = selected.indexOf(file.id) != -1;
				return file;
			});
		},
		applyOperations(state, operations) {
			let callback;
			state.files = state.files.map(file => {
				file.output = file.input;
				if (file.selected) {
					for (const operation in operations) {
						callback = operations[operation].callback;
						if (callback) {
							file.output = callback(
								file.output,
								operations[operation].data
							).trim();
						}
					}
				}
				return file;
			});
		}
	},
	actions: {
		setFiles(context, names) {
			context.commit('setFiles', names);
		},
		updateSelected(context, selected) {
			context.commit('updateSelected', selected);
		},
		applyOperations(context) {
			const operations = context.rootState.operations.operations;
			context.commit('applyOperations', operations);
		}
	}
};
