<template>
	<div class="guide">
		guide
	</div>
</template>

<script>
export default {
	name: 'guide'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";
.guide {
	@include init-position();
}
</style>