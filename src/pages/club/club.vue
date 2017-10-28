<template>
	<div class="club">
		club
	</div>
</template>

<script>
export default {
	name: 'club'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";
.club {
	@include init-position();
}
</style>