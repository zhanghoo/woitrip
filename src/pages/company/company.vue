<template>
	<div class="company">
		<div class="header">
			<pageheader :placeholder="placeholder">
				<div slot="title">
					<el-dropdown trigger="click" placement="top" @command="handleCommand">
						<p class="el-dropdown-link" >
							<span ref="titleText">热门结伴</span>
							<i class="el-icon-arrow-down el-icon--right"></i>
						</p>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item command="热门结伴">热门结伴</el-dropdown-item>
							<el-dropdown-item command="最新发布">最新发布</el-dropdown-item>
							<el-dropdown-item command="即将出发">即将出发</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</pageheader>
		</div>
		<div class="content">
			<swiper :options="swiperOption" class="company-swiper">
				<swiper-slide class="company-list">
					<ul>
						<li v-for="company in companies">
							<companypanel :company="company"></companypanel>
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
import companypanel from '@/components/companypanel/companypanel'
import axios from 'axios'

export default {
	name: 'company',
	data() {
		return {
			placeholder: '想去那了，看看有没有人一起去',
			companies: [],
			swiperOption: {
				scrollbar: '.swiper-scrollbar',
		        direction: 'vertical',
		        slidesPerView: 'auto',
		        mousewheelControl: true,
		        freeMode: true,
				roundLengths : true, //防止文字模糊
				observer:true,//修改swiper自己或子元素时，自动初始化swiper
				observeParents:true,//修改swiper的父元素时，自动初始化swiper
			}
		}
	},
	created() {
		//接收数据
		axios.get('static/data.json').then((res) => {
			this.companies = res.data.companies;
		});
	},
	methods: {
		handleCommand(command) {
			this.$refs.titleText.innerHTML = command;
		}
	},
	components: {
		pageheader,
		companypanel
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";
.company {
	@include init-position();
	z-index: 1000;
	.header {
		.title {
			.el-dropdown-link {
				color: #fff;
			}
		}
	}
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
		.company-swiper {
			/*<swiper> 高设置100%*/
			height: 100%;
			overflow: hidden;
			.company-list {
				/*<swiper-slide> 搞设置auto*/
				height: auto;
				ul {
					width: 100%;
					li {
						display: inline-block;
						padding: 10px;
						width: 50%;
						background-color: $panelColor;
					}
				}
			}
			/*.swiper-scrollbar 滑动条需保持的样式自带样式类*/
		}
	}
}
</style>