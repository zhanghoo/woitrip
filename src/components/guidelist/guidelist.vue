<template>
	<div class="guidelist">
		<div class="hot-guide border-1px">
			<h2 class="title">热门攻略</h2>
			<div class="content" ref="guideWrapper">
				<ul class="hot-list clearfix" ref="hotList">
					<li class="item item-hook" v-for="hotGuide in hotGuides">
						<div class="img"><img :src="hotGuide.bg"></div>
						<h3 class="title">{{hotGuide.title}}</h3>
						<p class="count">
							<span><icon name="map-marker" scale="0.6"></icon>{{hotGuide.destination}}</span>
							<span><icon name="eye" scale="0.6"></icon>{{hotGuide.pageviews}}</span>
						</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="all-guide">
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
	</div>
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
		}
	},
	created() {
		this.hotGuides = this.guide.list.hot;
		this.allGuides = this.guide.list.all;
		this.$nextTick(() => {
			this._initHotScroll();
		});
	},
	methods: {
		_initHotScroll() {
			if(this.hotScroll) {
	    		return
	    	}
	    	//计算nav item 总宽
	    	let hotList = [...this.$refs.hotList.getElementsByClassName('item-hook')];
	    	let hotWidth = 0;
	    	for(let item in hotList) {
	    		hotWidth += hotList[item].offsetWidth;
	    	}

	    	//设置nav 的 宽
	    	this.$refs.hotList.style.width = hotWidth + 1 + 'px';
			this.hotScroll = new BScroll(this.$refs.guideWrapper, {
				scrollX: true,
				eventPassthrough: 'vertical',
			});
		}
	},
	components: {
		icon
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";

.guidelist {
	padding: 15px 10px;
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
				.item {
					position: relative;
					float: left;
					width: 200px;
					padding-right: 10px;
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
}
</style>