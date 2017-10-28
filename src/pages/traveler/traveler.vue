<template>
	<div class="traveler">
		traveler
	</div>
</template>

<script>
export default {
	name: 'traveler'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";
.traveler {
	@include init-position();
}
</style>