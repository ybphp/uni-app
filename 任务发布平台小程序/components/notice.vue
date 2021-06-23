<template name="notice">
	<view class="notice-group" v-if="notice.length">
	    <image class="notice-icon" src="../static/image/notice.png"></image>
	    <navigator class="notice-text" :url="notice[notice_index]['id']">{{notice[notice_index]['title']}}</navigator>
	</view>
</template>

<script>
	export default {
        name: "notice",
		data() {
			return {
				notice_index:0
			};
		},
        props:{
            notice:{
                type: Array,
                value: []
            }
        }
	}
</script>

<style lang="scss">
    .notice-group{
        display: flex;
        flex-direction:row;
        margin:30upx 30upx;
        border-radius: 20upx;
        padding:16upx 20upx;
        background: #fff;
    }
    .notice-icon{
        width:40upx;
        height:30upx;
        margin-right:20upx;
    }
    .notice-text{
        flex:1;
        font-size: 24upx;
    }
</style>
