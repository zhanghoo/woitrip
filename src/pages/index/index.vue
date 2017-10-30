<template>
	<div class="index">
		<div class="carousel-wrapper">
			<carousel></carousel>
		</div>
		<div class="search-wrapper">
			<div class="search-box">
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
			<articlelist></articlelist>
		</div>
	</div>
</template>

<script>
import carousel from '@/components/carousel/carousel'
import search from '@/components/search/search'
import icon from 'vue-awesome/components/Icon'
import articlelist from '@/components/articlelist/articlelist'

export default {
	name: 'index',
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

.index {
	@include init-position();
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
</style>