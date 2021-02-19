<template lang="pug">
	.search-wrapper
		b-form-select(v-model="selected" :options="options" size="lg")
</template>
<script>
export default {
	name: 'Search',
	data() {
		return {
			selected: null,
			city: [
				{ value: '1811'}
			]
		}
	}
}
</script>
<style lang="scss" scoped>
	@import '@/assets/scss/_mixins';
	.search-wrapper {

	}
</style>