<template>
	<div class="company">
		<div class="header">
			<pageheader :placeholder="placeholder">
				<span slot="title">找同伴</span>
			</pageheader>
		</div>
		<div class="content"></div>
	</div>
</template>

<script>
import pageheader from '@/components/pageheader/pageheader'

export default {
	name: 'company',
	data() {
		return {
			placeholder: '想去那了，看看有没有人一起去'
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
.company {
	@include init-position();
}
</style>