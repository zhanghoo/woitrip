<template>
	<div class="articlepanel">
		<div class="author"></div>
		<div class="header">
			<img src="">
		</div>
		<div class="detail"></div>
	</div>
</template>

<script>
export default {
	name: 'articlepanel',
	data() {
		return {
			articleList: []
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../common/scss/index";
.articlepanel {
	position: relative;
	border-radius: 3px;
	background-color: $panelColor;
	.header{
		position: relative;
		width: 100%;
		height: 0;
		padding-top: 45%;
	}
}
</style>