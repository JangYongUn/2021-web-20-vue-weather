<template lang="pug">
	.wrapper
		span.name {{name}}
		span.country {{country}}
</template>
<script>
export default {
	name= 'Title',
	props: [ 'name', 'country'],
}
</script>
<style lang="scss" scoped>
	.wrapper {
		.name {
			font-size: ;
		}
	}
</style>