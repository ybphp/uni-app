<template name="listItem">
	<view class="item-group">
        <navigator :url="'../../pages/detail/detail?id='+item_data.id">
            <view class="item-title-group">
                <view>{{item_data.title}}</view>
            </view>
            <view class="item-title-desc">
                每包 {{item_data.num}} 题 / 时长 {{item_data.time}} / 剩余 {{item_data.surplus}}
            </view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
        props:{
            item_data:{
                type:Object,
                val:{}
            }
        }
	}
</script>

<style lang="scss">
    
    .item-group{
        background: #fff;
        border-radius: 20upx;
        padding:20upx 40upx;
        margin-bottom:30upx;
    }
    .item-group .item-title-group{
        font-size:32upx;
    }
    .item-group .item-title-desc{
        font-size:24upx;
        margin-top:10upx;
    }
</style>
