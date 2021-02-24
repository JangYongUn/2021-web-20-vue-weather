<template lang="pug">
	.daily-wrapper 
		i.fa.fa-arrow-down(style="`transform: rotate(${value.deg}deg)`") 
		span.direction {{value.direction}}
		span.speed {{value.speed}}
</template>
<script>
export default {
	name: 'Wind',
	props: ['value']
}
</script>
<style lang="scss" scoped>
	
</style>