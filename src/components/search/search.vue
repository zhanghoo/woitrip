<template>
	<div class="search">
		<div class="input-wrapper">
			<input class="input" type="text" placeholder="搜索目的地/旅行攻略/结伴等" autocomplete="off">
			<div class="cover" @click="inputPageShow()"></div>
			<span class="icon"><icon name="search"></icon></span>
		</div>
		<transition name="slide-fade">
			<div class="search-wrapper" ref="searchWrapper" v-show="showFlag">
				<div class="search-page">
					<div class="input-box">
						<span class="chevron-left" @click="inputPageHide()"><icon name="chevron-left"></icon></span>
						<input class="input" type="text" placeholder="搜索目的地/旅行攻略/结伴等" autocomplete="off" v-focus>
						<span class="icon-search"><icon name="search"></icon></span>
					</div>
					<!-- <div class="search-tag" v-for="tagType in tags">
						<h2 class="title">{{tagType.title}}<span class="icon"><icon :name="tagType.icon"></icon></span></h2>
						<div class="tags">
							<el-tag v-for="tag in tagType.tags" class="tag" :class="{ hot: tag.type }">{{tag.name}}</el-tag>
						</div>
					</div> -->
					<div class="search-tag" v-show="historyShow">
						<h2 class="title">{{tags.history.title}}<span class="icon" @click="clearHistory()"><icon :name="tags.history.icon"></icon></span></h2>
						<div class="tags">
							<el-tag v-for="(tag, index) in tags.history.tags" class="tag" :class="{ hot: tag.type }" :key="index">{{tag.name}}</el-tag>
						</div>
					</div>
					<div class="search-tag">
						<h2 class="title">{{tags.finding.title}}<span class="icon"><icon :name="tags.finding.icon"></icon></span></h2>
						<div class="tags">
							<el-tag v-for="(tag, index) in tags.finding.tags" class="tag" :class="{ hot: tag.type }" :key="index">{{tag.name}}</el-tag>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import icon from 'vue-awesome/components/Icon'
import $ from 'jquery'

export default {
	name: 'search',
	data() {
		return {
			showFlag: false,
			tags: {}
		}
	},
	computed: {
		historyShow() {
			return JSON.stringify(this.tags.history.tags) === '[]' ? false : true;
		}
	},
	created() {
		//接收数据
		this.tags = {
			history: {
				title: '历史搜索',
				icon: 'trash-o',
				tags: [
					{
						name: '北疆',
						type: ''
					},
					{
						name: '尼泊尔',
						type: ''
					},
					{
						name: '北京',
						type: ''
					}
				]
			},
			finding: {
				title: '搜索发现',
				icon: 'eye',
				tags: [
					{
						name: '三清山',
						type: ''
					},
					{
						name: '西安',
						type: ''
					},
					{
						name: '泰国',
						type: 'hot'
					},
					{
						name: '斯米兰群岛',
						type: 'hot'
					}
				]
			}
		};
		this.$nextTick(function () {
			// 代码保证 this.$el 在 document 中
			this.$refs.searchWrapper.style.height = $(window).height() + 'px';
		})
	},
	methods: {
		inputPageShow() {
			this.showFlag = true;
			//触发 首页的 禁用 better-scroll事件
			this.$root.eventHub.$emit('index.indexscroll.disable');
			this.$root.eventHub.$emit('articlelist.navSlide.removeTop', 0);
		},
		inputPageHide() {
			this.showFlag = false;
			//触发 启动的 禁用 better-scroll事件
			this.$root.eventHub.$emit('index.indexscroll.enable');
			this.$root.eventHub.$emit('articlelist.navSlide.removeTop', 0);
		},
		clearHistory() {
			//清空历史标记
			this.tags.history.tags = [];
		}
	},
	directives: {
		focus: {
			// 指令的定义
			update: function (el) {
				// 聚焦元素
				el.focus()
			}
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

.search {
	.input-wrapper {
		position: relative;
		padding: 16px;
		width: 100%;
		.input {
			position: relative;
			padding: 3px 3px 3px 30px;
			width: 100%;
			height: 30px;
			line-height: 16px;
			font-size: 12px;
			border: 1px solid #e4e8f1;
			border-radius: 3px;
			outline: none;
		}
		.cover {
			position: absolute;
			top: 16px;
			left: 0;
			width: 100%;
			height: 30px;
		}
		.icon {
			position: absolute;
			top: 22px;
			left: 24px;
			.fa-icon {
				height: 16px;
				color: #e4e8f1;
			}
		}
	}
	.search-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100%;
		z-index: 999;
		background-color: #fff;
		&.slide-fade-enter-active {
			transition: all .3s ease;
		}
		&.slide-fade-leave-active {
			transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		}
		&.slide-fade-enter, .slide-fade-leave-to {
			transform: translateX(10px);
			opacity: 0;
		}
		.search-page {
			.input-box {
				display: flex;
				position: relative;
				padding: 16px;
				width: 100%;
				background-color: $mainColor;
				.chevron-left {
					width: 40px;
					.fa-icon {
						position: relative;
						top: 7px;
						left: 5px;
						height: 16px;
						color: #e4e8f1;
					}
				}
				.input {
					position: relative;
					padding: 3px 3px 3px 30px;
					width: 100%;
					height: 30px;
					line-height: 16px;
					font-size: 12px;
					border: 1px solid #e4e8f1;
					border-radius: 3px;
					outline: none;
				}
				.icon-search {
					position: absolute;
					top: 22px;
					left: 62px;
					.fa-icon {
						height: 16px;
						color: #e4e8f1;
					}
				}
			}
			.search-tag {
				padding: 10px;
				.title {
					position: relative;
					.icon {
						position: absolute;
						padding: 5px;
						top: -8px;
						right: -5px;
						color: #666;
					}
				}
				.tags {
					padding: 5px;
					.tag {
						margin: 5px 10px 0 0;
						color: #333;
						background-color: #eee;
						&.hot {
							color: #fff;
							background-color: $lightBlue;
						}
					}
				}
			}
		}
	}
}
</style>