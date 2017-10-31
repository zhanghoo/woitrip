<template>
	<div class="slidenavbar" ref="slidenavbar">
		<ul class="nav clearfix" ref="slideNavList">
			<li class="nav-item nav-item-hook" :class="{'on': navOnIndex === index}" v-for="(item, index) in navItem" :key="item.id" @click="clickSelectType(index, $event)" :data-type="item.type">{{item.name}}</li>
		</ul>
		<div class="slide-bar" :class="{'click': navOpt === 0}" ref="slideNavBar"></div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapGetters, mapMutations } from 'vuex'

export default {
	name: 'slidenavbar',
	props: {
		navItem: {
			type: Array //列表nav分类item值
		}
	},
	data() {
		return {
			navOnIndex: 0,	//初始选项
			hiddenPosX: 0, //nav 移动到左侧隐藏的位置
			navOpt: 0, //nav 是 0 点击 还是 1 滑动
		}
	},
	computed: {
		...mapGetters([
			'selectedType'
		]),
	},
	created() {
		//接收数据
		this.$nextTick(() => {
			this._initSlideNavScroll();
		});
	},
	methods: {
		...mapMutations([
			'selectType', // 映射 select 到 this.$store.commit('selectType') 出错??
		]),
		_initSlideNavScroll() {
			if(this.slideNavScroll) {
	    		return
	    	}
	    	//计算nav item 总宽
	    	let navList = [...this.$refs.slideNavList.getElementsByClassName('nav-item-hook')];
	    	let navWidth = 0;
	    	for(let item in navList) {
	    		navWidth += navList[item].offsetWidth;
	    	}
	    	//设置nav 的 宽
	    	this.$refs.slideNavList.style.width = navWidth + 1 + 'px';
			this.slideNavScroll = new BScroll(this.$refs.slidenavbar, {
				scrollX: true,
				eventPassthrough: 'vertical',
				probeType: 3 // 监测实时滚动的位置
			});

			//根据 当前nav on 设置 slide-bar 的位置 和宽
			this._setSlideBarStyle(navList[0]);

			//绑定scroll
			this.slideNavScroll.on('scroll', (pos) => {
				this.navOpt = 1;//nav 滑动操作
				this.hiddenPosX = Math.round(pos.x);
				//根据 当前nav on 设置 slide-bar 的位置 和宽
				let navList = this.$refs.slideNavList.getElementsByClassName('nav-item-hook');
				this._setSlideBarStyle(navList[this.navOnIndex]);
			});
			//滑动结束后 初始为点击操作
			this.slideNavScroll.on('scrollEnd', () => {
				this.navOpt = 0;//nav 点击操作
			});
		},
		_setSlideBarStyle(navOnTarget) {
			if(!navOnTarget) {
				return;
			}
			this.$refs.slideNavBar.style.width = `${navOnTarget.offsetWidth}px`;
			this.$refs.slideNavBar.style.left = `${this.hiddenPosX + navOnTarget.offsetLeft}px`;
		},
		clickSelectType(index, event) {
			this.navOnIndex = index;
			this.navOpt = 0;//nav 点击操作
			//根据 当前nav on 设置 slide-bar 的位置 和宽
			let navList = this.$refs.slideNavList.getElementsByClassName('nav-item-hook');

			//初始化设置 store index模块中的 selectedType 值, 通过 调用store index 中方法进行设置
			this.selectType(navList[index].getAttribute('data-type'));
			this._setSlideBarStyle(navList[index]);
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";

.slidenavbar {
	position: relative;
    width: 100%;
    height: 36px;
    line-height: 36px;
    overflow: hidden;
    background-color: #fff;
	.nav {
		.nav-item {
			float: left;
			padding: 0 20px;
			&.on {
				color: $mainColor;
			}
		}
	}
	.slide-bar {
		position: absolute;
		bottom: 0px;
		left: 0;
		width: 0;
		height: 4px;
		background-color: $mainColor;
		&.click {
			transition: left .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		}
	}
}
</style>