<template lang="pug">
	.daily-wrapper
		Title
		Time
		Icon
		Temp
		Desc
		Wind
</template>
<script>
import Title from './Title.vue'
import Time from './Time.vue'
import Temp from './Temp.vue'
import Desc from './Desc.vue'
import Icon from './Icon.vue'
import Wind from './Wind.vue'

export default {
	name= 'Daily',
	props: ['value'],
	components: { Title, Time, Temp, Desc, Icon, Wind },
}
</script>
<style lang="scss" scoped>
	
</style>