<template>
	<div class="destination">
		目的地
	</div>
</template>

<script>
export default {
	name: 'destination'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";

.destination {
	@include init-position();
	padding-bottom: 50px; /*这里的padding-bottom, 根据app.vue nav-box的高设定*/
}
</style>