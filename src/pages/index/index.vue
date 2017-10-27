<template>
	<div class="index">
		<div class="carousel-wrapper">
			<carousel></carousel>
		</div>
		<div class="search-wrapper">
			<search></search>
		</div>
	</div>
</template>

<script>
import carousel from '@/components/carousel/carousel'
import search from '@/components/search/search'

export default {
	name: 'index',
	components: {
		carousel,
		search
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.index {
	position: relative;
	.search-wrapper {
		position: relative;
		top: -25px;
		z-index: 999; /*这个层次设置会对底部的nav和search-page有影响*/
	}
}
</style>