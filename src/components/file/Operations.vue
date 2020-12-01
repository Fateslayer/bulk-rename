<template>
	<div class="operations">
		<app-subpanel title="Transform">
			<app-transform-options/>
		</app-subpanel>
		<app-subpanel title="Replace">
			<app-replace-options/>
		</app-subpanel>
		<app-subpanel title="Insert">
			<app-insert-options/>
		</app-subpanel>
		<app-subpanel title="Remove">
			<app-remove-options/>
		</app-subpanel>
	</div>
</template>

<script>
import SubPanel from '@/components/shared/SubPanel';
import TransformOptions from '@/components/file/TransformOptions';
import ReplaceOptions from '@/components/file/ReplaceOptions';
import InsertOptions from '@/components/file/InsertOptions';
import RemoveOptions from '@/components/file/RemoveOptions';

export default {
	components: {
		'app-subpanel': SubPanel,
		'app-transform-options': TransformOptions,
		'app-replace-options': ReplaceOptions,
		'app-insert-options': InsertOptions,
		'app-remove-options': RemoveOptions
	}
};
</script>
<style scoped>
.operations {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 20px;
}
.options {
	display: flex;
}
</style>
