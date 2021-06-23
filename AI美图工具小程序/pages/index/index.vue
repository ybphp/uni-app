<template>
	<view>
		<imghandle v-if="PageCur=='imghandle'" ></imghandle>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'imghandle'
			}
		},
		mounted() {
			this.usageCountFun();
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
		
	}
</script>

<style>

</style>
