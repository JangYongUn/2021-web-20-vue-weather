<template lang="pug">
	.days-wrapper
		h1 5DAYS
		DayList
</template>
<script>

import DayList from '../components/weather/DayList.vue'

export default {
	name: 'Days'
}
</script>
<style lang="scss" scoped>
.days-wrapper {
	text-align: center;
}
</style>