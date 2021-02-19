<template lang="pug">
	#app.container
		.nav
		Header
		router-view
		.footer
</template>
<script>
import Header from './components/Header.vue'
export default {
	name: 'App',
	components: {

	},
}
</script>
<style lang="scss">

</style>