<template>
	<div class="message">
		消息
	</div>
</template>

<script>
export default {
	name: 'message'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";
.message {
	@include init-position();
	padding-bottom: 50px; /*这里的padding-bottom, 根据app.vue nav-box的高设定*/
}
</style>