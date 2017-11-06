<template>
	<div class="companypanel">
		<div class="bg">
			<img :src="company.bg">
		</div>
		<div class="date">
			<span class="icon"><icon name="calendar-o" scale="3.5"></icon></span>
			<span class="text"><b class="day">{{company.date | formateAfterDate}}</b>天后</span>
		</div>
		<div class="desc">
			<h3 class="title">{{company.destination}}</h3>
			<p class="text">{{company.describe}}</p>
			<div class="userinfo">
				<img class="img" width="18" height="18" :src="company.avatar">
				<span class="name">{{company.author}}</span>
				<span class="count">已有<b class="num">{{company.follow}}</b>关注</span>
			</div>
		</div>
	</div>
</template>

<script>
import icon from 'vue-awesome/components/Icon'
import {compLeftZero} from '@/common/js/utils';

export default {
	name: 'companypanel',
	props: {
        company: {
            type: Object
        }
    },
	components: {
		icon
	},
	filters: {
		formateAfterDate(time) {
			let date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();
			let cYear = time.substr(0, 4);
			let cMonth = time.substr(4, 2);
			let cDay = time.substr(6, 2);
			//几天后, 这里还未实现
			return cDay - day;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";
.companypanel {
	width: 100%;
	background-color: $panelColor;
	.bg {
		position: relative;
		width: 100%;
		height: 0;
		padding-top: 60%;
		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
	.date {
		position: relative;
		.icon {
			position: absolute;
			bottom: 0;
			right: 1px;
			font-size: 16px;
			.fa-icon {
				color: $green;
			}
		}
		.text {
			position: absolute;
			display: block;
		    bottom: 6px;
		    right: 5px;
		    width: 44px;
		    height: 33px;
		    line-height: 33px;
		    text-align: center;
			background-color: #fff;
			font-size: 12px;
			white-space: pre;
			.day {
				font-size: 20px;
				color: $green;
			}
		}
	}
	.desc {
		.title {
			width: 100%;
			height: 24px;
			line-height: 24px;
			font-size: 16px;
			font-weight: 700;
		}
		.text {
			@include text-ellipsis();
			padding: 5px 0;
		}
		.userinfo {
			position: relative;
			width: 100%;
			height: 18px;
			.img {
				width: 18px;
				height: 18px;
				border-radius: 50%;
				vertical-align: middle;
			}
			.name {
				margin-left: 2px;
				height: 18px;
				line-height: 18px;
			}
			.count {
				position: absolute;
				right: 0;
				height: 18px;
				line-height: 18px;
				.num {
					color: $green;
					font-size: 16px;
				}
			}
		}
	}
}
</style>