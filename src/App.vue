<template lang="pug">
	#app.container
		Header
		transition(name="fade" mode="out-in")
			router-view.wrapper-view
		Footer
		Loading(:active.sync="GET_LOADING")
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { mapGetters } from 'vuex'
import Loading from 'vue-loading-overlay'
import 'vue r'


export default {
	name: 'App',
	components: { Header, Footer, Loading },
	computed:{ ...mapGetters(['GET_LOADING'])}
}
</script>
<style lang="scss">
#app {
	@include flex($SB, $ST);
	flex-direction: column;
	height: 100vh;
	padding: 0;
	.wrapper-view {
		border-left: 1px solid $colorLight;
		border-right: 1px solid $colorLight;
		flex-grow: 1;
		overflow-y: auto;
		@include mobile {
			border-left: none;
			border-right: none;
		}
	}
}
</style>