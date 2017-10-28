<template>
	<div class="app">
		<div class="nav-box">
		    <div class="nav">
		    	<div class="nav-item">
		    		<router-link to="/index">
		    			<span class="icon"><icon name="home" scale="1.5"></icon></span>
		    			<p class="text">首页</p>
		    	</router-link>
		    	</div>
		    	<div class="nav-item">
		    		<router-link to="/destination">
		    			<span class="icon"><icon name="map-marker" scale="1.5"></icon></span>
		    			<p class="text">目的地</p>
		    	</router-link>
		    	</div>
		    	<div class="nav-item">
		    		<router-link to="/message">
		    			<span class="icon"><icon name="comment-o" scale="1.5"></icon></span>
		    			<p class="text">消息</p>
		    	</router-link>
		    	</div>
		    	<div class="nav-item">
		    		<router-link to="/home">
		    			<span class="icon"><icon name="user" scale="1.5"></icon></span>
		    			<p class="text">我的</p>
		    	</router-link>
		    	</div>
		    </div>
		</div>
		<div class="content">
			<transition name="slide-fade">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
/*
 * 通过npm i normalize.css --save 安装, 然后引入normalize.css. 
 * 有关normalize.css介绍可见: http://jerryzou.com/posts/aboutNormalizeCss/
*/
import 'normalize.css'
import icon from 'vue-awesome/components/Icon'

export default {
	name: 'app',
	components: {
		icon
	}
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "common/scss/index";

.app {
	width: 100%;
	min-height: 100px;
	.nav-box {
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    width: 100%;
		z-index: 999;
		background-color: $bgColor;
		.nav {
			display: flex;
			width: 100%;
			height: 50px;
			font-size: 14px;
			.nav-item {
				flex: 1;
				text-align: center;
				a {
					display: block;
					position: relative;
					top: 5px;
					color: #999;
					&.active {
						color: $mainColor;
					}
				}
			}
		}
	}
	.content {
		position: relative;
		.slide-fade-enter-active {
			position: absolute;
			transition: all .3s ease;
		}
		.slide-fade-leave-active {
			position: absolute;
			transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		}
		.slide-fade-enter, .slide-fade-leave-to{
			transform: translateX(10px);
			opacity: 0;
		}
	}
}

</style>
