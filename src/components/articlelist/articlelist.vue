<template>
	<div class="articlelist articlelist-hook">
		<div class="nav-wrapper nav-book" ref="navWrapper">
			<slidenavbar :navItem="navItem"></slidenavbar>
		</div>
		<div class="content">
			<template v-for="article in articles">
				<articlepanel :selectedType="selectedType" :article="article"></articlepanel>
			</template>
		</div>
	</div>
</template>

<script>
/*
 * 安装 better-scroll npm install better-scroll --save
*/
import articlepanel from '@/components/articlepanel/articlepanel'
import slidenavbar from '@/components/slidenavbar/slidenavbar'
import $ from 'jquery'
import { mapGetters, mapMutations } from 'vuex'

const RECOMMEND = 'recommend';
const HOT = 'hot';
const LATEST = 'latest';
const SEASONAL = 'seasonal';
const DOMESTIC = 'domestic';
const ABROAD = 'abroad';
const THEME = 'theme';
const AROUND = 'around';

export default {
	name: 'articlelist',
	props: {
		articles: {
			type: Array
		}
	},
	data() {
		return {
			navItem: [{id: 0, type: 'recommend', name: '推荐'},
					  {id: 1, type: 'hot', name: '热门'},
					  {id: 2, type: 'latest', name: '最新'},
					  {id: 3, type: 'seasonal', name: '当季'},
					  {id: 4, type: 'domestic', name: '国内'},
					  {id: 5, type: 'abroad', name: '国外'},
					  {id: 6, type: 'theme', name: '主题'},
					  {id: 7, type: 'around', name: '周边'},],
		}
	},
	computed: {
		...mapGetters([
			'selectedType'
		]),
	},
	created() {
		//监听当前实例上自定义事件 articlelist.navSlide.addTop
		this.$root.eventHub.$on('articlelist.navSlide.addTop', (top) => {
			$('.articlelist-hook').addClass('top');
			$('.nav-book').css('top', `${top}px`);
		});
		this.$root.eventHub.$on('articlelist.navSlide.removeTop', (top) => {
			$('.articlelist-hook').removeClass('top');
			$('.nav-book').css('top', `${top}px`);
		});
		//初始化设置 store index模块中的 selectedType 值, 通过 调用store index 中方法进行设置
		this.selectType(RECOMMEND);
	},
	methods: {
		...mapMutations([
			'selectType', //映射 this.selectType() 到 this.$store.commit('selectType')
		]),
		// ...mapMutations({
		// 	select: 'selectType' // 映射 select 到 this.$store.commit('selectType')
		// }),
	},
	components: {
		articlepanel,
		slidenavbar
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";

.articlelist {
	position: relative;
	&.top {
		.nav-wrapper {
			position: fixed;
			top: 0;
			z-index: 980;
		}
		padding-top: 36px; /*这个视 nav-wrapper 的height 而定*/
	}
	.nav-wrapper {
		position: relative;
		width: 100%;
		height: 36px;
		line-height: 36px;
		overflow: hidden;
		background-color: #fff;
	}
	.content {
		padding: 10px 5px;
		background-color: $bgColor;
	}
}
</style>