<template>
	<div class="home">
		我的
	</div>
</template>

<script>
export default {
	name: 'home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";
.home {
	@include init-position();
	padding-bottom: 50px; /*这里的padding-bottom, 根据app.vue nav-box的高设定*/
}
</style>