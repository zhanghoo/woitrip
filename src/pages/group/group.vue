<template>
	<div class="group">
		<div class="header">
			<pageheader :placeholder="placeholder">
				<span slot="title">小组</span>
			</pageheader>
		</div>
		<div class="content"></div>
	</div>
</template>

<script>
import pageheader from '@/components/pageheader/pageheader'

export default {
	name: 'group',
	data() {
		return {
			placeholder: '加入小组，讨论一下'
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
.group {
	@include init-position();
}
</style>