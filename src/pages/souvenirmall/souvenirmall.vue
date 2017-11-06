<template>
	<div class="souvenirmall">
		<div class="header">
			<pageheader :placeholder="placeholder">
				<span slot="title">手礼商城</span>
			</pageheader>
		</div>
		<div class="content"></div>
	</div>
</template>

<script>
import pageheader from '@/components/pageheader/pageheader'

export default {
	name: 'souvenirmall',
	data() {
		return {
			placeholder: '旅行不白来，看看手礼'
		}
	},
	components: {
		pageheader
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";
.souvenirmall {
	@include init-position();
}
</style>