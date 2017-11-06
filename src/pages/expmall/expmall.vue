<template>
	<div class="expmall">
		<div class="header">
			<pageheader :placeholder="placeholder">
				<span slot="title">积分商城</span>
			</pageheader>
		</div>
		<div class="content"></div>
	</div>
</template>

<script>
import pageheader from '@/components/pageheader/pageheader'

export default {
	name: 'expmall',
	data() {
		return {
			placeholder: '想兑换什么'
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
.expmall {
	@include init-position();
}
</style>