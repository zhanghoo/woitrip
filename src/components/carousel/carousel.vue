<template>
	<div class="carousel">
		<div class="carousel-container">
		    <swiper :options="swiperOption">
		    	<swiper-slide v-for="slide in carousels" :key="slide.id">
			    	<a :href="slide.href" :title="slide.title">
			    		<img class="bg" :src="slide.bg">
			    		<h2 class="title">{{slide.title}}</h2>
			    		<div class="detail">
			    			<span class="icon"><icon name="map-marker"></icon></span>
			    			<span>{{slide.destination}}</span>
			    			&nbsp;&nbsp;
			    			<span class="icon"><icon name="user"></icon></span>
			    			<span>{{slide.author}}</span>
			    		</div>
			    	</a>
		    	</swiper-slide>
		    </swiper>
		    <div class="swiper-pagination" slot="pagination"></div>
	    </div>
	</div>
</template>

<script>
/*
 * SWIPER(SLIDES) COMPONENT FOR VUE.JS(1.X ~ 2.X)
 * 通过 npm install vue-awesome-swiper --save 安装,
 * https://github.com/surmon-china/vue-awesome-swiper
 * 通过npm install vue-awesome --save 安装, 引入
 * 有关vue-awesomen介绍可见: https://github.com/Justineo/vue-awesome
*/
require('swiper/dist/css/swiper.css')
import 'vue-awesome/icons'

import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import icon from 'vue-awesome/components/Icon'

Vue.use(VueAwesomeSwiper)

export default {
	name: 'carousel',
	props: {
		carousels: {
			type: Array
		}
	},
	data() {
		return {
			swiperOption: {
				autoplay: 3500,	//自动播放
				setWrapperSize :true,//开启这个设定会在Wrapper上添加等于slides相加的宽高
				pagination: '.swiper-pagination', //分页
				paginationClickable: true,//分页点点击
				mousewheelControl : true,//鼠标滚动
				preventDefault: false, //阻止默认点击, 如a标签:
				preloadImages:false,   //默认提前加载所有图片
			},
			swiperSlides: []
		}
	},
	components: {
		icon
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/mixins";

.carousel {
	position: relative;
	height: 0;
	padding-top: 40%;
	.carousel-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		.swiper-container {
			height: 100%;
			.swiper-wrapper {
				.swiper-slide {
					position: relative;
					.title {
						position: absolute;
						bottom: 45px;
						left: 10px;
						@include text-ellipsis(60%);
						height: 16px;
						line-height: 16px;
						font-size: 16px;
						color: #fff;
						text-shadow: 0 1px 3px rgba(118,118,118,.9);
					}
					.detail {
						position: absolute;
						bottom: 30px;
						left: 10px;
						height: 10px;
						line-height: 10px;
						font-size: 10px;
						color: #fff;
						text-shadow: 0 1px 3px rgba(118,118,118,.9);
						.icon {
							position: relative;
							top: 1px;
							left: 1px;
							.fa-icon {
								height: 10px;
							}
						}
					}
					.bg {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		.swiper-pagination {
			bottom: 15px;
			right: 15px;
			.swiper-pagination-bullet {
				position: relative;
				&.swiper-pagination-bullet-active {
					/*这里为什么不生效了, 暂只在swiper.css里修改了*/
					width: 16px;
					border-radius: 4px;
				}
			}
		}
	}
}

</style>