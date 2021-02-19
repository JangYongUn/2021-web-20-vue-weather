<template lang="pug">
	#app.container
		Header
		router-view.wrapper
		Footer
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
	name: 'App',
	components: { Header, Footer },
}
</script>
<style lang="scss">
	@import '@/assets/scss/_mixins';
	#app {
		height: 100vh;
		flex-direction: column;
		@include flex($SB, $ST);
		.wrapper {
			border-left: 1px solid $colorLight;
			border-right: 1px solid $colorLight;
			flex-grow: 1;
			overflow-y: auto;
			padding: 2em;
		}
	}
</style>