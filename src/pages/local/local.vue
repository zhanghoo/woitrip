<template>
	<div class="local">
		local
	</div>
</template>

<script>
export default {
	name: 'local'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";
.local {
	@include init-position();
}
</style>