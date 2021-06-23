<template>
	<view class="content">
        <view class="title">
            {{detail_data['title']}}11
        </view>
        <view class="survey-group">
            <view class="survey-item">
                <text class="survey-item-title">任务数量</text>
                <text class="survey-item-desc">{{detail_data['num']}}</text>
            </view>
            <view class="survey-item">
                <text class="survey-item-title">任务时间</text>
                <text class="survey-item-desc">{{detail_data['time']}}</text>
            </view>
            <view class="survey-item">
                <text class="survey-item-title">剩余天数</text>
                <text class="survey-item-desc">{{detail_data['surplus']}}</text>
            </view>
        </view>
        <view class="desc-group">
            <view class="desc-title">
                任务规则
            </view>
            <view class="desc">
                {{detail_data['desc']}}    
            </view>
        </view>
        <button type="primary" @click="add_task(detail_data['id'])" class="add-task-btn">加入任务</button>
	</view>
</template>

<script>
    const http = require("../../utils/http.js");
	export default {
		data() {
			return {
				detail_data: {}
			};
		},
        onLoad(option) {
            let type = option['id'];
            let that = this;
            http.get(http.GET_DETAIL, function(ret){
                that.detail_data = ret.data.data;
            });
        },
        methods:{
            add_task(id){
                http.get(http.GET_ADD_TASK, function(ret){
                    if(ret.data.status == 1){
                        uni.showToast({
                            title: '加入成功',
                            duration: 2000
                        });
                    }else{
                        uni.showToast({
                            title: '加入失败',
                            duration: 2000
                        });
                    }
                });
            }
        }
	}
</script>

<style lang="scss">
    .content{
        padding:40upx 0;
    }
    .title{
        padding:0 40upx;
        font-size: 38upx;
        font-weight: bold;
    }
    .survey-group{
        padding:0 40upx;
        margin-top:80upx;
        display: flex;
        justify-content : space-between;
    }
    .survey-item{
        text-align: center;
    }
    .survey-item-title{
        display: block;
        font-size:24upx;
    }
    .survey-item-desc{
        margin-top:10upx;
        display: block;
        font-size:36upx;
        font-weight: bold;
    }
    .desc-group{
        margin:60upx 0 0 0;
        padding:40upx 40upx 0 40upx;
        border-top:2upx solid #eeeeee;
    }
    .desc-title{
        font-size:24upx;
    }
    .desc-group .desc{
        margin-top:20upx;
        font-size:28upx;
        line-height: 48upx;
        margin-top:10upx;
        border:2upx solid #eeeeee;
        min-height:600upx;
        padding:20upx;
    }
    .add-task-btn{
        position: fixed;
        left:0;
        bottom:0;
        width:100%;
        font-size:32upx;
        border-radius: 0;
    }
</style>
