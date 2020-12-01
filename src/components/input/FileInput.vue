<template>
	<div class="container">
		<div
			class="box"
			ref="dropZone"
			@drop.prevent="dropFiles"
			@dragenter.prevent="highlight"
			@dragleave.prevent="removeHighlight"
			@dragover="prevent"
		>
			<img class="image" src="@/assets/images/cloud.png" alt="File Upload Icon">
			<p class="text">Drag and drop files here
				<br>or
			</p>
			<app-button @click="$refs.inputFiles.click()" class="btn-dark">Select Files</app-button>
			<input
				class="input"
				type="file"
				ref="inputFiles"
				@change="loadFiles($event.target.files)"
				multiple
			>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import Button from '@/components/input/Button';

export default {
	components: {
		'app-button': Button
	},
	methods: {
		...mapActions({
			setFiles: 'files/setFiles'
		}),
		dropFiles(event) {
			const files = [];
			if (event.dataTransfer.items) {
				for (let i = 0; i < event.dataTransfer.items.length; i++) {
					if (event.dataTransfer.items[i].kind === 'file') {
						const file = event.dataTransfer.items[i].getAsFile();
						files.push(file);
					}
				}
			} else {
				for (let i = 0; i < event.dataTransfer.files.length; i++) {
					const file = event.dataTransfer.files[i];
					files.push(file);
				}
			}
			this.loadFiles(files);
		},
		highlight() {
			this.$refs.dropZone.classList.add('highlight');
		},
		removeHighlight() {
			this.$refs.dropZone.classList.remove('highlight');
		},
		loadFiles(files) {
			const names = [];
			for (let i = 0; i < files.length; i++) {
				names.push(files[i].name);
			}
			this.setFiles(names);
			this.$router.push({ name: 'rename' });
		},
		prevent(event) {
			event.preventDefault();
		}
	}
};
</script>

<style scoped>
.container {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: fit-content;
	height: calc(100vh - 147px);
}

.box {
	border: 4px dashed var(--color-border-dark);
	padding: 5vmin;
	text-align: center;
}

.box * {
	pointer-events: none;
}

.box button {
	pointer-events: auto;
}

.highlight {
	border-color: var(--color-input-primary);
}

.box .image {
	width: 150px;
}

.text {
	font-size: 18px;
	color: var(--color-text-secondary);
	opacity: 0.5;
	margin: 10px 0;
}

.input {
	display: none;
}
</style>
