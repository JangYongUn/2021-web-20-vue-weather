<template lang="pug">
	.wrapper 
		span {{value.desc}}
		span ({{value.main}})
</template>
<script>
export default {
	name: 'Summary',
	props: ['value']
}
</script>
<style lang="scss" scoped>
	
</style>