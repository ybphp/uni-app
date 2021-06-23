<template>
	<view class="content">
		<image mode="widthFix" class="banner" :src="banner_img"></image>
        <notice :notice="notice_data"></notice>
        <view class="list-module-group">
            <view class="list-module-item bg-blue" @click="jumpToList(1)">
                <text class="list-module-title">
                    高额任务
                </text>
                <text class="list-module-desc">
                    快速完成领取奖励
                </text>
            </view>
            <view class="list-module-item bg-red" @click="jumpToList(2)">
                <text class="list-module-title">
                    计划任务
                </text>
                <text class="list-module-desc">
                    高额奖励在这里
                </text>
            </view>
            <view class="list-module-item bg-violet" @click="jumpToList(3)">
                <text class="list-module-title">
                    快速任务
                </text>
                <text class="list-module-desc">
                    预告明天的任务
                </text>
            </view>
            <view class="list-module-item bg-green" @click="jumpToList(4)">
                <text class="list-module-title">
                    截图任务
                </text>
                <text class="list-module-desc">
                    上传截图获取奖励
                </text>
            </view>
        </view>
        <view class="list-group">
            <listItem v-for="(item, key) in list_data" :item_data="item" :key="key"></listItem>    
        </view>
        
	</view>
</template>

<script>
    const http = require("../../utils/http.js");
    import notice from "../../components/notice.vue";
    import listItem from "../../components/listItem.vue";
    
	export default {
        components:{
            notice,
            listItem
        },
		data() {
			return {
                banner_img:'',
                notice_data:[],
                list_data:[]
			}
		},
		onLoad() {
            let that = this;
            http.get(http.GET_BANNER, function(ret){
                that.banner_img = ret.data.data;
            });
            http.get(http.GET_NOTICE_LIST, function(ret){
                that.notice_data = ret.data.data;
            });
            http.get(http.GET_LIST, function(ret){
                that.list_data = ret.data.data;
            });
		},
		methods: {
            jumpToList(type){
                uni.switchTab({
                    url: '/pages/list/list?type'+type
                });
            }
		}
	}
</script>

<style>
    .content{
        background: #f5f5f5;
    }
    .banner{
        width:100%;
    }
    .bg-blue{
        background-color: #6bb9f7;
    }
    .bg-red{
        background-color: #f08163;
    }
    .bg-violet{
        background-color: #8189f5;
    }
    .bg-green{
        background-color: #68d74a;
    }
    .list-module-group{
        display: flex;
        justify-content : space-between;
        flex-wrap: wrap;
        margin:0 30upx;
    }
    .list-module-item{
        width:336upx;
        height:220upx;
        margin-bottom:30upx;
        border-radius: 20pux;
    }
    .list-module-item .list-module-title{
        display: block;
        color:#fff;
        font-size:32upx;
        /* text-indent: 40upx; */
        text-align: center;
        padding-top:56upx;
    }
    .list-module-item .list-module-desc{
        display: block;
        margin-top:10upx;
        color:#fff;
        font-size:28upx;
        /* text-indent: 40upx; */
        text-align: center;
    }
    .list-group{
        overflow: hidden;
        margin:0 30upx;
    }
</style>
