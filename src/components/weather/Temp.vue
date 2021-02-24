<template lang="pug">
	.wrapper
		.temp 
			spen.title 현재온도
			span.cont {{value.temp}}
			span ℃ (
			span.title 체감온도 
			span.cont {{value.feel}}
			span ℃ )
		.temp2
			spen.title 최고온도
			span.temp {{value.max}} 
			span ℃ /  
			span.title 최저온도 
			span.temp {{value.min}} 
			span ℃
</template>
<script>
export default {
	name: 'Temp',
	props: ['value']
}
</script>
<style lang="scss" scoped>
	
</style>