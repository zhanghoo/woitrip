<template>
	<div class="company">
		company
	</div>
</template>

<script>
export default {
	name: 'company'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";
.company {
	@include init-position();
}
</style>