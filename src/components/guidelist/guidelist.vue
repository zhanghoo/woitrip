<template>
	<swiper :options="boxSwiperOption" class="box-swiper" ref="guideBoxSwiper">
		<swiper-slide class="guidelist">
			<div class="hot-guide border-1px" v-show="hotGuides.length > 0">
				<h2 class="title">热门攻略</h2>
				<div class="content" ref="guideWrapper">
					<swiper :options="swiperOption" class="hot-list clearfix" ref="hotList">
						<swiper-slide v-for="(hotGuide,index) in hotGuides" class="item item-hook" :key="index">
							<div class="img"><img :src="hotGuide.bg"></div>
							<h3 class="title">{{hotGuide.title}}</h3>
							<p class="count">
								<span><icon name="map-marker" scale="0.6"></icon>{{hotGuide.destination}}</span>
								<span><icon name="eye" scale="0.6"></icon>{{hotGuide.pageviews}}</span>
							</p>
						</swiper-slide>
					</swiper>
				</div>
			</div>
			<div class="all-guide" v-show="allGuides.length > 0">
				<h2 class="title">全部攻略</h2>
				<div class="content">
					<ul class="all-list clearfix">
						<li class="item" v-for="allGuide in allGuides">
							<div class="img">
								<img :src="allGuide.bg">
							</div>
							<div class="overview">
								<h3 class="title">{{allGuide.destination}}</h3>
								<p class="count">{{allGuide.guidesNum}}篇攻略</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="empty-guide" v-show="hotGuides.length == 0 && allGuides.length == 0">
				<span class="icon"><icon name="meh-o" scale="2"></icon></span>
				<span class="text">还什么都没有, 赶紧来写一篇吧~~</span>
			</div>
		</swiper-slide>
		<div class="swiper-scrollbar box-swiper-scrollbar" slot="scrollbar"></div>
	</swiper>
</template>

<script>
import icon from 'vue-awesome/components/Icon'
import BScroll from 'better-scroll'

export default {
	name: 'guidelist',
	props: {
		guide: {
			type: Object //列表nav分类item值
		}
	},
	data() {
		return {
			hotGuides: [],
			allGuides: [],
			boxSwiperOption: {
				scrollbar: '.box-swiper-scrollbar',
		        direction: 'vertical',
		        slidesPerView: 'auto',
		        mousewheelControl: true,
		        freeMode: true,
				roundLengths : true, //防止文字模糊
				observer:true,//修改swiper自己或子元素时，自动初始化swiper
				observeParents:true,//修改swiper的父元素时，自动初始化swiper
			},
			swiperOption: {
				slidesPerView: 5,
          		spaceBetween: 50,
				breakpoints: {
					1024: {
						slidesPerView: 4,
						spaceBetween: 40
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 20
					},
					320: {
						slidesPerView: 1,
						spaceBetween: 10
					}
				}
			}
		}
	},
	created() {
		this.hotGuides = this.guide.list.hot;
		this.allGuides = this.guide.list.all;
	},
	methods: {
		
	},
	components: {
		icon
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";
.box-swiper {
	height: 100%;
	overflow: hidden;
	.guidelist {
		position: relative;
		padding: 15px 10px;
		height: auto;
		.hot-guide {
			@include border-1px(#ccc);
			>.title {
				padding-bottom: 10px;
				height: 40px;
				line-height: 30px;
				font-size: 16px;
			}
			.content {
				width: 100%;
				.hot-list {
					width: 100%;
					overflow: hidden;
					.item {
						.img {
							position: relative;
							padding-top: 60%;
							width: 100%;
							height: 0;
							img {
								position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
							}
						}
						.title {
							padding: 10px 0;
							height: 44px;
							line-height: 1;
							font-weight: 700;
							font-size: 12px;
							overflow: hidden;
						}
						.count {
							padding-bottom: 20px;
							font-weight: 700;
							font-size: 10px;
							.fa-icon {
								position: relative;
								top: 2px;
								margin-right: 3px;
							}
						}
					}
					>:last-child {
						padding-right: 0;
						width: 190px;
					}
				}
			}
		}
		.all-guide {
			>.title {
				padding-top: 10px;
				padding-bottom: 10px;
				height: 50px;
				line-height: 30px;
				font-size: 16px;
			}
			.content {
				width: 100%;
				.all-list {
					width: 100%;
					.item {
						position: relative;
						float: left;
						width: 50%;
						height: 100%;
						padding-right: 15px;
						.img {
							position: relative;
							float: left;
							padding-top: 35%;
							margin-bottom: 10px;
							width: 45%;
							height: 0;
							img {
								position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
							}
						}
						.overview {
							position: relative;
							margin-left: 45%;
							padding-left: 10px;
							padding-top: 35%;
							height: 0;
							>.title {
								position: absolute;
								bottom: 50%;
								font-weight: 700;
							}
							.count {
								position: absolute;
								bottom: 20%;
								font-size: 10px;
							}
						}
					}
				}
			}
		}
		.empty-guide {
			width: 100%;
			height: 100%;
			font-size: 16px;
			text-align: center;
		}
	}
}

</style>