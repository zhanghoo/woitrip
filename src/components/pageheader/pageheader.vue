<template>
	<div class="pageheader">
		<div class="header">
			<span class="left-icon" @click="back"><icon name="chevron-left"></icon></span>
			<div class="title">
				<!-- title 插槽 -->
				<slot name="title"></slot>
			</div>
			<!-- 左侧内容插槽 -->
			<slot name="headerRight">
				<div class="right" @click="inputPageShow">
					<icon name="search"></icon>
				</div>
			</slot>
		</div>
		<transition name="slide-fade">
			<div class="input-page" v-show="showFlag">
				<div class="input-box">
					<!-- input 插槽 -->
					<slot name="input">
						<input class="input" type="text" :placeholder="placeholder" v-focus>
					</slot>
					<span class="btn-cancel" @click="inputPageHide">取消</span>
				</div>
				<div class="input-content">
					<!-- input下方的内容, 使用插槽可添加 -->
					<slot name="inputPageContent"></slot>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import icon from 'vue-awesome/components/Icon'
export default {
	name: 'pageheader',
	props: {
		placeholder: {
			type: String,
			default: '请输入要搜索的内容'
		}
	},
	data() {
		return {
			showFlag: false
		}
	},
	methods: {
		inputPageShow() {
			this.showFlag = true;
		},
		inputPageHide() {
			this.showFlag = false;
		},
		back() {
			//返回首页
			this.$router.push('index');
		}
	},
	directives: {
		focus: {
			// 指令的定义
			update: function (el) {
				//清空
				el.value = '';
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

.pageheader {
	padding: 5px 10px;
	background-color: $mainColor;
	.header {
		display: flex;
		text-align: center;
		height: 30px;
		line-height: 30px;
		color: $topIconColor2;
		.left-icon {
			width: 30px;
			text-align: left;
			.fa-icon {
				position: relative;
				top: 4px;
			}
		}
		.title {
			flex: 1;
		}
		.right {
			width: 30px;
			text-align: right;
			.fa-icon {
				position: relative;
				top: 4px;
			}
		}
	}
	.input-page {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1000;
		background-color: $panelColor;
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
		.input-box {
			display: flex;
			padding: 10px;
			width: 100%;
			height: 50px;
			.input {
				flex: 1;
				position: relative;
				padding: 3px 6px;
				width: 100%;
				height: 30px;
				line-height: 16px;
				font-size: 12px;
				border: 1px solid #e4e8f1;
				border-radius: 3px;
				outline: none;
				background-color: $bgColor;
			}
			.btn-cancel {
				width: 60px;
				height: 30px;
				line-height: 30px;
				text-align: center;
			}
		}
	}
}
</style>