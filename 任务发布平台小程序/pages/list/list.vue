<template>
	<view class="content">
		<listItem v-for="(item, key) in list_data" :item_data="item" :key="key"></listItem>
	</view>
</template>

<script>
    const http = require("../../utils/http.js");
    import listItem from "../../components/listItem.vue";
	export default {
        components:{
            listItem
        },
		data() {
			return {
				list_data:[]
			};
		},
        onLoad(option) {
            let type = option && option['type'] ? option['type'] : 0;
            let that = this;
            http.get(http.GET_LIST+'?type='+type, function(ret){
                that.list_data = ret.data.data;
            });
		},
	}
</script>

<style lang="scss">
    .content{
        min-height:1070upx;
        background: #f5f5f5;
        padding:30upx;
    }
</style>
