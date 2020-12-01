<template>
	<div class="generate-container">
		<app-button @click="download('python')" class="btn-dark">Python Script</app-button>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Button from '@/components/input/Button';

export default {
	components: {
		'app-button': Button
	},
	computed: {
		...mapGetters({
			files: 'files/files'
		})
	},
	data() {
		return {
			map: {
				python: {
					callback: this.generatePythonScript,
					extension: '.py'
				}
			}
		};
	},
	methods: {
		generatePythonScript() {
			let script = 'import os\nfrom os import path\nfiles = {\n';
			for (let i = 0; i < this.files.length; i++) {
				const file = this.files[i];
				script += `\t"${file.input}${file.extension}": "${file.output}${
					file.extension
				}",\n`;
			}
			script +=
				"}\ncount = 0\nfor inputName, outputName in files.items():\n\tif path.exists(inputName):\n\t\tos.rename(inputName, outputName)\n\t\tcount += 1\nprint('Renamed ' + str(count) + ' Files Successfully.')\ninput('Press Enter Key To Exit...)')";
			return script;
		},
		download(type) {
			const element = document.createElement('a');
			const { callback, extension } = this.map[type];
			const mime = 'data:text/plain;charset=utf-8;base64,';
			const script = callback();
			element.setAttribute('href', mime + btoa(script));
			element.setAttribute('download', `rename-files${extension}`);
			element.style.display = 'none';
			document.body.appendChild(element);
			element.click();
			document.body.removeChild(element);
		}
	}
};
</script>

<style scoped>
.generate-container {
	text-align: center;
}

.generate-container button {
	margin: 0 10px;
}
</style>
