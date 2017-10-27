<template>
	<div class="app">
		<div class="nav-box">
		    <div class="nav">
		    	<div class="nav-item">
		    		<router-link to="/index">首页</router-link>
		    	</div>
		    	<div class="nav-item">
		    		<router-link to="/destination">目的地</router-link>
		    	</div>
		    	<div class="nav-item">
		    		<router-link to="/message">消息</router-link>
		    	</div>
		    	<div class="nav-item">
		    		<router-link to="/home">我的</router-link>
		    	</div>
		    </div>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
/*
 * 通过npm i normalize.css --save 安装, 然后引入normalize.css. 
 * 有关normalize.css介绍可见: http://jerryzou.com/posts/aboutNormalizeCss/
*/
import 'normalize.css'

export default {
	name: 'app'
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
			height: 40px;
			line-height: 40px;
			.nav-item {
				flex: 1;
				text-align: center;
				a {
					color: #999;
					&.active {
						color: $mainColor;
					}
				}
			}
		}
	}
	.content {
		padding-bottom: 40px; /*这里的padding-bottom, 根据nav-box的高设定*/
	}
}

</style>
