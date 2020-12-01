<template>
	<div class="panel">
		<p class="title">{{ title }}</p>
		<slot/>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		}
	}
};
</script>

<style scoped>
.panel {
	background-color: var(--color-white);
	padding: 15px 20px 20px 20px;
	margin-bottom: 40px;
	box-shadow: rgba(0, 0, 0, 0.04) 0 2px 6px;
}

.title {
	font-size: 15px;
	font-weight: bold;
	text-align: center;
	color: var(--color-text-primary);
	margin-bottom: 15px;
}
</style>
