<template>
	<div class="local">
		<div class="header">
			<pageheader :placeholder="placeholder">
				<span slot="title">找当地人</span>
			</pageheader>
		</div>
		<div class="content"></div>
	</div>
</template>

<script>
import pageheader from '@/components/pageheader/pageheader'

export default {
	name: 'local',
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
.local {
	@include init-position();
}
</style>