<template>
	<div class="more">
		more
	</div>
</template>

<script>
export default {
	name: 'more'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";
.more {
	@include init-position();
}
</style>