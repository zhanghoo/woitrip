<template>
	<div class="articlepanel">
		<div class="header">
			<img class="bg" :src="article.bg">
			<span class="category">{{article.category}}</span>
			<div class="opt-wrapper">
				<span class="icon" @click="menuToggle"><icon name="ellipsis-h"></icon></span>
				<transition name="drop-fade">
					<div class="menu-list" v-show="showFlag">
						<ul class="menu clearfix">
							<li class="menu-item">分享</li>
							<li class="menu-item">收藏</li>
							<li class="menu-item">不感兴趣</li>
							<li class="menu-item">举报</li>
						</ul>
					</div>
				</transition>
			</div>
		</div>
		<div class="detail">
			<div class="title">{{article.title}}</div>
			<div class="survey">{{article.survey}}</div>
			<div class="author-box">
				<div class="author">
					<img class="avatar" width="18" height="18" :src="article.avatar">
					<span class="username">{{article.author}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import icon from 'vue-awesome/components/Icon'

export default {
	name: 'articlepanel',
	props: {
		article: {
			type: Object
		}
	},
	data() {
		return {
			showFlag: false
		}
	},
	created() {
	},
	methods: {
		menuToggle() {
			this.showFlag = !this.showFlag;
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
.articlepanel {
	position: relative;
	margin-bottom: 10px;
	border-radius: 3px;
	background-color: $panelColor;
	.header{
		position: relative;
		width: 100%;
		height: 0;
		padding-top: 45%;
		.bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border-radius: 3px 3px 0 0;
		}
		.category {
			display: block;
			position: absolute;
			top: 10px;
			left: 10px;
			height: 18px;
			line-height: 18px;
			padding: 0 7px;
			border-radius: 9px;
			border: 1px solid #fff;
			color: #fff;
			background-color: rgba(118, 118, 118, 0.08);
			box-shadow: 0 1px 3px rgba(118, 118, 118, 0.2);
		}
		.opt-wrapper {
			position: absolute;
			top: 0px;
			right: 5px;
			.icon {
				display: block;
				padding-top: 8px;
				width: 28px;
				height: 22px;
				color: #fff;
				text-align: center;
			}
			.menu-list {
			    position: absolute;
			    top: 100%;
			    right: 5px;
				.menu {
					position: absolute;
				    top: 100%;
				    right: 0;
				    z-index: 970;
				    float: left;
				    min-width: 160px;
				    padding: 5px 0;
				    margin: 2px 0 0;
				    background-color: #fff;
				    background-clip: padding-box;
				    border: 1px solid #ccc;
				    border: 1px solid rgba(0,0,0,.15);
				    border-radius: 3px;
				    box-shadow: 0 6px 12px rgba(0,0,0,.175);
					.menu-item {
						display: block;
					    padding: 3px 20px;
					    clear: both;
					    font-weight: 400;
					    line-height: 1.42857143;
					    color: #333;
					    white-space: nowrap;
					    &:active {
					    	outline: 0;
					    	background-color: #e6e6e6;
							box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
					    }
					}
				}

				&.drop-fade-enter-active {
					transition: top .1s ease;
				}
				&.drop-fade-leave-active {
					transition: opacity .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
				}
				&.drop-fade-enter, &.drop-fade-leave-to{
					top: 50%;
					opacity: 0;
				}
			}
		}
	}
	.detail {
		padding: 15px 10px;
		.title {
			font-weight: 700;
		}
		.survey {
			font-size: 12px;
			padding: 15px 0;
		}
		.author-box {
			position: relative;
			.author {
				.avatar {
					border-radius: 50%;
				}
				.username {
					display: inline-block;
					height: 18px;
					line-height: 18px;
					font-size: 10px;
					vertical-align: top;
				}
			}
		}
	}
}
</style>