<template>
	<div class="qa">
		<div class="header">
			<pageheader :placeholder="placeholder">
				<span slot="title">问答</span>
			</pageheader>
		</div>
		<div class="content"></div>
	</div>
</template>

<script>
import pageheader from '@/components/pageheader/pageheader'

export default {
	name: 'qa',
	data() {
		return {
			placeholder: '求助~~'
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
.qa {
	@include init-position();
}
</style>