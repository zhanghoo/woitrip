<template>
	<div class="index-wrapper" ref="indexWrapper">
		<div class="index">
			<div class="carousel-wrapper">
				<carousel :carousels="carousels"></carousel>
			</div>
			<div class="search-wrapper">
				<div class="search-box search-box-hook">
					<search></search>
				</div>
			</div>
			<div class="nav-wrapper">
				<div class="nav-row">
					<div class="nav-item">
						<router-link to='guide'>
							<span class="icon"><icon name="list-alt" scale="2" class="red"></icon></span>
							<p class="type">攻略</p>
						</router-link>
					</div>
					<div class="nav-item">
						<router-link to='company'>
							<span class="icon"><icon name="group" scale="2" class="orange"></icon></span>
							<p class="type">结伴</p>
						</router-link>
					</div>
					<div class="nav-item">
						<router-link to='local'>
							<span class="icon"><icon name="compass" scale="2" class="green"></icon></span>
							<p class="type">当地人</p>
						</router-link>
					</div>
					<div class="nav-item">
						<router-link to='club'>
							<span class="icon"><icon name="shield" scale="2" class="blue"></icon></span>
							<p class="type">俱乐部</p>
						</router-link>
					</div>
				</div>
				<div class="nav-row">
					<div class="nav-item">
						<router-link to='traveler'>
							<span class="icon"><icon name="globe" scale="2" class="blue"></icon></span>
							<p class="type">旅行家</p>
						</router-link>
					</div>
					<div class="nav-item">
						<router-link to='group'>
							<span class="icon"><icon name="share-alt" scale="2" class="green"></icon></span>
							<p class="type">小组</p>
						</router-link>
					</div>
					<div class="nav-item">
						<router-link to='qa'>
							<span class="icon"><icon name="comments-o" scale="2" class="orange"></icon></span>
							<p class="type">问答</p>
						</router-link>
					</div>
					<div class="nav-item">
						<router-link to='more'>
							<span class="icon"><icon name="th-large" scale="2" class="red"></icon></span>
							<p class="type">更多</p>
						</router-link>
					</div>
				</div>
			</div>
			<div class="article-wrapper">
				<articlelist :articles="articles" class="articlelist-i-hook"></articlelist>
			</div>
		</div>
	</div>
</template>

<script>
import carousel from '@/components/carousel/carousel'
import search from '@/components/search/search'
import icon from 'vue-awesome/components/Icon'
import articlelist from '@/components/articlelist/articlelist'
import BScroll from 'better-scroll'
import axios from 'axios'
import $ from 'jquery'

export default {
	name: 'index',
	data() {
		return {
			carousels: [],
			articles: [],
		}
	},
	mounted() {
		this.$nextTick(function () {
			// 代码保证 this.$el 在 document 中
			this.$refs.indexWrapper.style.height = $(window).height() + 'px';
		})
	},
	created() {
		//接收数据
		axios.get('static/data.json').then((res) => {
			this.carousels = res.data.carousels;
			this.articles = res.data.articles;
			this.$nextTick(() => {
				this._initNavScroll();
			});
		})
		//监听当前实例上自定义事件 index.indexscroll.disable
		this.$root.eventHub.$on('index.indexscroll.disable', () => {
			if(this.navScroll) {
				return
			} else {
				this.indexScroll.scrollTo(0, 0, 0);
				this.indexScroll.disable();
				$('.search-box-hook').removeClass('top').css('top', '-25px');
			}
		});
		this.$root.eventHub.$on('index.indexscroll.enable', () => {
			if(this.navScroll) {
				return
			} else {
				this.indexScroll.enable();
				this.indexScroll.refresh();
				$('.search-box-hook').removeClass('top').css('top', '-25px');
			}
		});
	},
	methods: {
		_initNavScroll() {
			if(!this.indexScroll) {
				this.indexScroll = new BScroll(this.$refs.indexWrapper, {
					click: true,
					probeType: 3 // 监测实时滚动的位置
				});

				let _searchBox = $('.search-box-hook');
				let _searchBoxTop = Math.round(_searchBox.offset().top);
				let _searchBoxHeight = Math.round(_searchBox.outerHeight(true));//outerHeight(true)返回元素宽高 + padding + border + margin
				let _articleList = $('.articlelist-i-hook');
				let _articleListTop = Math.round(_articleList.offset().top);
				let _articleNavTop = _articleListTop - _searchBoxHeight;
				
				this.indexScroll.on('scroll', (pos) => {
		            // 拿到实时的y坐标
		            let scrollY = Math.abs(Math.round(pos.y));
					//这个判断是为了 不一直添加 top类
		            if(scrollY >= _searchBoxTop && !_searchBox.hasClass('top')) {
		            	_searchBox.addClass('top').css('top', `${_searchBoxTop}px`);
		            } else if(scrollY >= _searchBoxTop) {
		            	_searchBox.addClass('top').css('top', `${scrollY}px`);
		            } else if(scrollY < _searchBoxTop && _searchBox.hasClass('top')) {
		            	_searchBox.removeClass('top').css('top', '-25px');
		            }

		            if(scrollY >= _articleNavTop && !_articleList.hasClass('top')) {
		            	//触发 articlelist的事件
						this.$root.eventHub.$emit('articlelist.navSlide.addTop', _articleNavTop);
		            } else if(scrollY >= _articleNavTop) {
		            	this.$root.eventHub.$emit('articlelist.navSlide.addTop', scrollY+_searchBoxHeight);
		            } else if(scrollY < _articleNavTop && _articleList.hasClass('top')) {
		            	this.$root.eventHub.$emit('articlelist.navSlide.removeTop', 0);
		            }

		        })
	    	} else {
	    		this.indexScroll.refresh();
	    	}
		}
	},
	components: {
		carousel,
		search,
		icon,
		articlelist
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";
.index-wrapper {
	width: 100%;
	height: 100%;
	overflow: hidden;
	.index {
		padding-bottom: 50px; /*这里的padding-bottom, 根据app.vue nav-box的高设定*/
		.search-wrapper {
			position: relative;
			width: 100%;
			height: 37px;
			z-index: 999; /*这个层次设置会对底部的nav和search-page有影响*/
			.search-box {
				position: absolute;
				top: -25px;
				width: 100%;
				transition: background-color .3s ease;
				&.top {
					position: fixed;
					top: 0;
					background-color: $mainColor;
				}
			}
		}
		.nav-wrapper {
			margin-bottom: 10px;
			background-color: $panelColor;
			.nav-row {
				display: flex;
				.nav-item {
					flex: 1;
					padding: 0 10px;
					width: 25%;
					text-align: center;
					a {
						display: block;
						padding: 10px 0;
						width: 100%;
						height: 100%;
						color: #333;
						> .icon {
							display: block;
							.fa-icon {
								height: 30px;
								font-size: 30px;
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
						> .type {
							height: 16px;
							line-height: 16px;
						}
					}
				}
			}
		}
		.article-wrapper {
			background-color: $panelColor;
		}
	}
}

</style>