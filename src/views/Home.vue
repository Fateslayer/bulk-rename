<template>
	<div>
		<app-header/>
		<app-file-input/>
	</div>
</template>

<script>
import Header from '@/components/shared/Header';
import FileInput from '@/components/input/FileInput';

export default {
	components: {
		'app-header': Header,
		'app-file-input': FileInput
	}
};
</script>
