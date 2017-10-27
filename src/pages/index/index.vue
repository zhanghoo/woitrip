<template>
	<div class="index">
		<div class="carousel-wrapper">
			<carousel></carousel>
		</div>
	</div>
</template>

<script>
import carousel from '@/components/carousel/carousel'

export default {
	name: 'index',
	components: {
		carousel
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.index {
	
}
</style>