<template>
	<div class="carousel">
	    <swiper :options="swiperOption">
	    	<swiper-slide v-for="(slide, index) in swiperSlides" :key="index">I'm Slide {{index}}</swiper-slide>
	    </swiper>
	    <div class="swiper-pagination" slot="pagination"></div>
	</div>
</template>

<script>
/*
 * SWIPER(SLIDES) COMPONENT FOR VUE.JS(1.X ~ 2.X)
 * 通过 npm install vue-awesome-swiper --save 安装,
 * https://github.com/surmon-china/vue-awesome-swiper
*/
require('swiper/dist/css/swiper.css')

import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

export default {
	name: 'carousel',
	data() {
		return {
			swiperOption: {
				autoplay: 3500,
				setWrapperSize :true,
				pagination: '.swiper-pagination',
				paginationClickable: true,
				mousewheelControl : true,
			},
			swiperSlides: [1, 2, 3]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>

</style>