import Vue from 'vue';
import Vuex from 'vuex';
import { files } from '@/store/modules/files';
import { operations } from '@/store/modules/operations';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		files,
		operations
	}
});
