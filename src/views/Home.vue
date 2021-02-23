<template lang="pug">
	.home-wrapper
		.title-wrapper
			h2 Vue를 활용한 날씨정보 앱
				small.ml-3 v1.0
			h1 {{ GET_DAILY.name }}
		Search
		Daily(:value="GET_DAILY")
</template>
<script>
import { mapGetters } from 'vuex'
import Search from '../components/Search.vue'
import Daily from '../components/weather/Daily.vue'

export default {
	name: 'Home',
	components: { Search, Daily },
	computed: { ...mapGetters(['GET_DAILY', 'GET_GEO']) },
	created() {
		this.$store.dispatch('ACT_POSITION')
		console.log(process.env);
	},
	data() {
		return {
		
		}
	},
	methods: {
		
	}
}
</script>
<style lang="scss" scoped>
.home-wrapper {
	text-align: center;
}
</style>