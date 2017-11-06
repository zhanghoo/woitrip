<template>
	<div class="more">
		<div class="header">
			<pageheader :page="page">
				<div slot="title">
					全部类目
				</div>
				<div slot="headerRight"></div>
			</pageheader>
		</div>
		<div class="content">
			<swiper :options="swiperOption" class="more-swiper">
				<swiper-slide class="more-list">
					<ul class="item-list">
						<li class="item-box">
							<router-link to='guide' class="item" replace>
								<span class="icon"><icon name="list-alt" scale="2" class="red"></icon></span>
								<p class="type">攻略</p>
							</router-link>
						</li>
						<li class="item-box">
							<router-link to='company' class="item" replace>
								<span class="icon"><icon name="group" scale="2" class="orange"></icon></span>
								<p class="type">结伴</p>
							</router-link>
						</li>
						<li class="item-box">
							<router-link to='local' class="item" replace>
								<span class="icon"><icon name="compass" scale="2" class="green"></icon></span>
								<p class="type">当地人</p>
							</router-link>
						</li>
						<li class="item-box">
							<router-link to='club' class="item" replace>
								<span class="icon"><icon name="shield" scale="2" class="blue"></icon></span>
								<p class="type">俱乐部</p>
							</router-link>
						</li>
						<li class="item-box">
							<router-link to='traveler' class="item" replace>
								<span class="icon"><icon name="globe" scale="2" class="blue"></icon></span>
								<p class="type">旅行家</p>
							</router-link>
						</li>
						<li class="item-box">
							<router-link to='group' class="item" replace>
								<span class="icon"><icon name="share-alt" scale="2" class="green"></icon></span>
								<p class="type">小组</p>
							</router-link>
						</li>
						<li class="item-box">
							<router-link to='qa' class="item" replace>
								<span class="icon"><icon name="comments-o" scale="2" class="orange"></icon></span>
								<p class="type">问答</p>
							</router-link>
						</li>
						<li class="item-box">
							<router-link to='souvenirmall' class="item" replace>
								<span class="icon"><icon name="suitcase" scale="2" class="red"></icon></span>
								<p class="type">手礼商城</p>
							</router-link>
						</li>
						<li class="item-box">
							<router-link to='expmall' class="item" replace>
								<span class="icon"><icon name="star-half-o" scale="2" class="red"></icon></span>
								<p class="type">积分商城</p>
							</router-link>
						</li>
					</ul>
				</swiper-slide>
				<div class="swiper-scrollbar" slot="scrollbar"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
import pageheader from '@/components/pageheader/pageheader'
import icon from 'vue-awesome/components/Icon'

export default {
	name: 'more',
	data() {
		return {
			swiperOption: {
				scrollbar: '.swiper-scrollbar',
		        direction: 'vertical',
		        slidesPerView: 'auto',
		        mousewheelControl: true,
		        freeMode: true,
				roundLengths : true, //防止文字模糊
				observer:true,//修改swiper自己或子元素时，自动初始化swiper
				observeParents:true,//修改swiper的父元素时，自动初始化swiper
			},
			page: 'index'
		}
	},
	methods: {
		
	},
	components: {
		pageheader,
		icon
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";
.more {
	@include init-position();
	z-index: 1000;
	.content {
		position: fixed;
		top: 0;
		left: 0;
		padding-top: 40px;
		width: 100%;
		height: 100%;
		background: $panelColor;
		overflow: hidden;
		z-index: -1;
		.more-swiper {
			height: 100%;
			overflow: hidden;
			.more-list {
				height: auto;
				.item-list {
					.item-box {
						display: inline-block;
						width: 24%;
						padding: 10px;
						text-align: center;
						.item {
							color: #333;
							.fa-icon {
								&.red {
									color: $red;
								}
								&.orange {
									color: $orange;
								}
								&.green {
									color: $green;
								}
								&.blue {
									color: $blue;
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>