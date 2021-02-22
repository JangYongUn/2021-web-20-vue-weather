<template lang="pug">
	.home-wrapper
		.title-wrapper
			h1 Vue를 활용한 날씨정보 앱
				small.ml-3 v1.0
		Search
		input(type="text" v-model="query")
		div {{myName}}
</template>
<script>
import Search from '../components/Search.vue'

export default {
	name: 'Home',
	components: { Search },
	computed: {
		// 내 값이 바뀌어야 될때.
		myName: function() {
			return this.query;
		}
	},
	watch: {
		// 내 값이 바뀌어서 뭔가를 실행할때.
		myName: function(nVal, oVal) {
			console.log(nVal, oVal);
		}
	},
	data() {
		return {
			query: ''
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