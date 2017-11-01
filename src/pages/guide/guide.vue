<template>
	<div class="guide">
		<div class="header">
			<pageheader :placeholder="placeholder">
				<span slot="title">找攻略</span>
			</pageheader>
			<slidenavbar :navItem="navItem"></slidenavbar>
		</div>
		<div class="content">
			<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="guideSwiperRef">
				<swiper-slide v-for="guide in guides" :key="guide.id">
					<guidelist :guide="guide"></guidelist>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>

<script>
import pageheader from '@/components/pageheader/pageheader'
import slidenavbar from '@/components/slidenavbar/slidenavbar'
import guidelist from '@/components/guidelist/guidelist'
import axios from 'axios'
import { mapGetters, mapMutations } from 'vuex'

export default {
	name: 'guide',
	data() {
		return {
			placeholder: '想看哪里的攻略，搜搜看',
			navItem: [
					  {id: 1, type: 'China', name: '国内'},
					  {id: 2, type: 'Asia', name: '亚洲'},
					  {id: 3, type: 'Europe', name: '欧洲'},
					  {id: 4, type: 'NorthAmerica', name: '北美洲'},
					  {id: 5, type: 'Oceania', name: '大洋洲'},
					  {id: 6, type: 'Africa', name: '非洲'},
					  {id: 7, type: 'SouthAmerica', name: '南美洲'}],
			guides: {},
			//notNextTick组件自有属性，设置为true，组件则不会通过NextTick来实例化swiper，可以在第一时间获取到swiper对象，设置为ture可以在刚加载遍获取swiper对象 在 标签中 还需要添加 :not-next-tick="notNextTick" 绑定
			notNextTick: true,
			swiperOption: {
				autoHeight: true,
				// //swiper 回调函数
				// onSlideChangeEnd: swiper => {
				// 	//在data里面访问不来 navItem 只能在其他地方实现 store selectedType 的变化 this.selectType()
				// 	//即调用 
				// 	//console.log(swiper.realIndex)
				// }
			}
		}
	},
	created() {
		//接收数据
		axios.get('static/data.json').then((res) => {
			this.guides = res.data.guides;
		});
	},
	mounted() {
		//mounted 不会承诺所有的子组件也都一起被挂载
		//如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted
		//这里 在 未加载完毕的时候 就 滑动  也滑动不了  也暂时没什么问题?
		this.$nextTick(function () {
			this.$refs.guideSwiperRef.swiper.on('slideChangeEnd', swiper => {
				this.selectType(this.navItem[swiper.realIndex].type)
			});
		})
	},
	computed: {
		...mapGetters({
			selected: 'selectedType'
		}),
		//获得当前swiper对象
		guideSwiper() {
	        return this.$refs.guideSwiperRef.swiper
	    },
	    //点击的nav 的序号
	    navIndex() {
	    	for(let item in this.navItem) {
	    		if(this.navItem[item].type == this.selected) {
	    			return item;
	    		}
	    	}
	    	return 0;
	    }
	},
	watch: {
		selected: function() {
			// console.log(this.selected, this.guideSwiper);
			//切换到第 navIndex 个 slide 事件300ms 回调函数 false 不触发onSlideChange回调函数
			this.$refs.guideSwiperRef.swiper.slideTo(this.navIndex, 300, false)
		},
	},
	methods: {
		...mapMutations([
			'selectType', // 映射 select 到 this.$store.commit('selectType') 出错?? 注意使用别名的时候 是花括号 不是 方括号
		])
	},
	components: {
		pageheader,
		slidenavbar,
		guidelist
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";
.guide {
	@include init-position();
	background-color: $bgColor;
	overflow: hidden;
	z-index: 1000;
	.content {
		position: fixed;
		top: 0;
		left: 0;
		margin-top: 76px;
		width: 100%;
		height: 100%;
		background: $panelColor;
		overflow-y: auto;
	    overflow-x: hidden;
	}
}
</style>