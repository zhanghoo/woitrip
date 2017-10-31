<template>
	<div class="club">
		<div class="header">
			<pageheader :placeholder="placeholder">
				<span slot="title">找俱乐部</span>
			</pageheader>
		</div>
		<div class="content"></div>
	</div>
</template>

<script>
import pageheader from '@/components/pageheader/pageheader'

export default {
	name: 'club',
	data() {
		return {
			placeholder: '想找个俱乐部，参加有趣的活动'
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
.club {
	@include init-position();
}
</style>