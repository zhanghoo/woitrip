<template>
	<div class="guide">
		<div class="header">
			<pageheader :placeholder="placeholder">
				<span slot="title">找攻略</span>
			</pageheader>
			<slidenavbar :navItem="navItem"></slidenavbar>
		</div>
		<div class="content">
			<swiper :options="swiperOption">
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
			swiperOption: {
				autoHeight: true
			}
		}
	},
	created() {
		//接收数据
		axios.get('static/data.json').then((res) => {
			this.guides = res.data.guides;
		});
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