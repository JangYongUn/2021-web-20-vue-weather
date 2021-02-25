<template lang="pug">
	.days-wrapper
		.title-wrapper
			Title.title(:value="title")
			Search.search(:value="value" :selCity="GET_CITY")
		transition(name="fade" mode="out-in")
			DayList.day-list(:value="GET_DAYS" :key="tKey")
</template>
<script>

import Search from '../components/Search.vue'
import DayList from '../components/weather/DayList.vue'
import Title from '../components/weather/Title.vue'
import { mapGetters } from 'vuex'

export default {
	name: 'Days',
	components: { Search, DayList, Title },
	data() {
		return {
			value: 'ACT_DAYS',
			tKey: '',
		}
	},
	computed: {
		...mapGetters(['GET_DAYS', 'GET_CITY']),
		title: function() {
			return (
				this.GET_DAYS
				? { name: this.GET_DAYS.city.name, country: this.GET_DAYS.city.country }
				: { name: '', country: ''}
			)
		}
	},
	watch: {
		GET_DAYS: function(nv) {
			if(nv) this.tKey = nv.city.name
		}
	}
}

</script>
<style lang="scss" scoped>
.days-wrapper {
	@include flex($ST, $ST);
	flex-direction: column;
	.title-wrapper {
		padding: 1em;
		@include flex($FS, $CT);
		.title {
			font-size: 1.25em;
			margin-right: 1em;
		}
		.search {
			min-width: 140px;
		}
	}
	.day-list {
		flex-grow: 1;
	}
}
</style>