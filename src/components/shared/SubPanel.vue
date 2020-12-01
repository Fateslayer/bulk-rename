<template>
	<div class="subpanel">
		<div class="header">
			<p class="title">{{ title }}</p>
		</div>
		<div class="body">
			<slot/>
		</div>
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
.subpanel {
	box-shadow: rgba(0, 0, 0, 0.04) 0 2px 6px;
}

.header {
	background-color: var(--color-background-primary);
	padding: 10px;
}

.title {
	font-size: 13px;
	color: var(--color-white);
	font-weight: bold;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 1.5px;
}

.body {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px;
	border: 1px solid var(--color-border-primary);
	border-top: none;
	height: 25px;
}
</style>
