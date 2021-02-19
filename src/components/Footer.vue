<template lang="pug">
	footer.footer-wrapper
		Copyright &copy;JangYongUn. Allright Reserved.
</template>
<script>
export default {
	name: 'Footer'
}
</script>
<style lang="scss" scoped>
	@import '@/assets/scss/_mixins';
	.footer-wrapper {
		text-align: center;
		padding: 1em;
		background-color: $colorDarker;
		color: $colorLighter;
	}
</style>