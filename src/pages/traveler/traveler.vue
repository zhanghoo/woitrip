<template>
	<div class="traveler">
		<div class="header">
			<pageheader :placeholder="placeholder">
				<span slot="title">旅行家专栏</span>
			</pageheader>
		</div>
		<div class="content"></div>
	</div>
</template>

<script>
import pageheader from '@/components/pageheader/pageheader'

export default {
	name: 'traveler',
	data() {
		return {
			placeholder: '找个当地人问问'
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
.traveler {
	@include init-position();
}
</style>