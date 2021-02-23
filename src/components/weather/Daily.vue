<template lang="pug">
	.wrapper-daily
		Title.Title(:name="value.name" :country="value ? value.sys.country : ''")
		Time
		Icon
		Temp
		Summary
		Wind
</template>
<script>

import Title from './Title.vue'
import Time from './Time.vue'
import Temp from './Temp.vue'
import Summary from './Summary.vue'
import Icon from './Icon.vue'
import Wind from './Wind.vue'

export default {
	name= 'Daily',
	props: ['value'],
	components: { Title, Time, Temp, Summary, Icon, Wind },
}
</script>
<style lang="scss" scoped>
	.wrapper-daily {
		.Title {
			font-size: 1em;
		}
	}
</style>