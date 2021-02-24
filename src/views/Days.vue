<template lang="pug">
	.days-wrapper
		.title-wrapper
			Title.title
			DayList
</template>
<script>

import DayList from '../components/weather/DayList.vue'
import Title from '../components/weather/Title.vue'
import { mapGetters } from 'vuex'

export default {
	name: 'Days',
	components: { DayList, Title },
	computed: {
		...mapGetters(['GET_DAYS']),
	}
}
created() {
	let selected
}
</script>
<style lang="scss" scoped>
.days-wrapper {
	text-align: center;
}
</style>