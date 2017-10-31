<template>
	<div v-show="showFlag" class="articlepanel">
		<div class="header">
			<img class="bg" :src="article.bg">
			<span class="category">{{article.category}}</span>
			<!-- <el-dropdown trigger="click" @command="handleCommand">
				<span class="el-dropdown-link">
					<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="share">分享</el-dropdown-item>
					<el-dropdown-item command="collect">收藏</el-dropdown-item>
					<el-dropdown-item command="interest">不感兴趣</el-dropdown-item>
					<el-dropdown-item command="report">举报</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown> -->
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
import { mapGetters } from 'vuex'

const RECOMMEND = 'recommend';
const HOT = 'hot';
const LATEST = 'latest';
const SEASONAL = 'seasonal';
const DOMESTIC = 'domestic';
const ABROAD = 'abroad';
const THEME = 'theme';
const AROUND = 'around';

export default {
	name: 'articlepanel',
	props: {
		article: {
			type: Object
		},
		// selectedType: {
		// 	type: String,
		// 	default: RECOMMEND
		// }
	},
	computed: {
		// ...mapGetters([
		// 	'selectedType' // => selectedType: 'selectedType' 将state中的selectedType(右边位置)印射给左边的selectedType
		// ]),
		//mapGetters工具函数会将store中的getter映射到局部计算属性中
		...mapGetters([
			'selectedType'
		]),
		showFlag() {
			return this.article.tag.some(this.inArticleTag);
		}
	},
	// created() {
	//	// 第一次测试用
	// 	this.selectType('hot');
	// 	console.log(this.selectedType);
	// },
	methods: {
		handleCommand(command) {
	    	console.log('click on item ' + command);
        },
        inArticleTag(tag) {
        	return tag == this.selectedType;
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
		.el-dropdown {
			position: absolute;
			top: 10px;
			right: 10px;
			color: #fff;
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