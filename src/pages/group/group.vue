<template>
	<div class="group">
		group
	</div>
</template>

<script>
export default {
	name: 'group'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";
.group {
	@include init-position();
}
</style>