export const operations = {
	namespaced: true,
	state: {
		operations: []
	},
	getters: {
		operations(state) {
			return state.operations;
		}
	},
	mutations: {
		removeOperation(state, operation) {
			state.operations = state.operations.filter(
				o => o.type != operation.type
			);
		},
		updateOperation(state, operation) {
			const index = state.operations.findIndex(
				o => o.type === operation.type
			);
			if (index != -1) {
				state.operations[index] = operation;
			} else {
				state.operations.push(operation);
			}
		}
	},
	actions: {
		updateOperations(context, operation) {
			if (operation.callback) {
				context.commit('updateOperation', operation);
			} else {
				context.commit('removeOperation', operation);
			}
		}
	}
};
