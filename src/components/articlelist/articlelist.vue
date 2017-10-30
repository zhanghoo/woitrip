<template>
	<div class="articlelist">
		<div class="nav-wrapper" ref="navWrapper">
			<ul class="nav clearfix" ref="navList">
				<li class="nav-item nav-item-hook" :class="{'on': navOnIndex === index}" v-for="(item, index) in navItem" :key="item.id" @click="selectType(index, $event)">{{item.name}}</li>
			</ul>
			<div class="slide-bar" :class="{'click': navOpt === 0}" ref="slideBar"></div>
		</div>
		<div class="content">
			<articlepanel></articlepanel>
		</div>
	</div>
</template>

<script>
/*
 * 安装 better-scroll npm install better-scroll --save
*/
import BScroll from 'better-scroll'
import articlepanel from '@/components/articlepanel/articlepanel'

export default {
	name: 'articlelist',
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
			navOnIndex: 0,
			hiddenPosX: 0, //nav 移动到左侧隐藏的位置
			navOpt: 0, //nav 是 0 点击 还是 1 滑动
		}
	},
	created() {
		//接收数据
		this.$nextTick(() => {
			this._initScroll();
		});
	},
	methods: {
		_initScroll() {
			if(this.navScroll) {
	    		return
	    	}
	    	//计算nav item 总宽
	    	let navList = [...this.$refs.navList.getElementsByClassName('nav-item-hook')];
	    	let navWidth = 0;
	    	for(let item in navList) {
	    		navWidth += navList[item].offsetWidth;
	    	}
	    	//设置nav 的 宽
	    	this.$refs.navList.style.width = navWidth + 1 + 'px';
			this.navScroll = new BScroll(this.$refs.navWrapper, {
				scrollX: true,
				eventPassthrough: 'vertical',
				probeType: 3 // 监测实时滚动的位置
			});

			//根据 当前nav on 设置 slide-bar 的位置 和宽
			this.setSlideBarStyle(navList[0]);

			//绑定scroll
			this.navScroll.on('scroll', (pos) => {
				this.navOpt = 1;//nav 滑动操作
				this.hiddenPosX = Math.round(pos.x);
				//根据 当前nav on 设置 slide-bar 的位置 和宽
				let navList = this.$refs.navList.getElementsByClassName('nav-item-hook');
				this.setSlideBarStyle(navList[this.navOnIndex]);
			});
			//滑动结束后 初始为点击操作
			this.navScroll.on('scrollEnd', () => {
				this.navOpt = 0;//nav 点击操作
			});
		},
		selectType(index, event) {
			this.navOnIndex = index;
			this.navOpt = 0;//nav 点击操作
			//根据 当前nav on 设置 slide-bar 的位置 和宽
			let navList = this.$refs.navList.getElementsByClassName('nav-item-hook');
			this.setSlideBarStyle(navList[index]);
		},
		setSlideBarStyle(navOnTarget) {
			if(!navOnTarget) {
				return;
			}
			this.$refs.slideBar.style.width = navOnTarget.offsetWidth + 'px';
			this.$refs.slideBar.style.left = (this.hiddenPosX + navOnTarget.offsetLeft) + 'px';
		}
	},
	components: {
		articlepanel
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";

.articlelist {
	.nav-wrapper {
		position: relative;
		width: 100%;
		height: 36px;
		line-height: 36px;
		overflow: hidden;
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
	.content {
		padding: 10px 5px;
		background-color: $bgColor;
	}
}
</style>