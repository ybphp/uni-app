<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">提取文字</block>
		</cu-custom>
		<view class="padding-xl subimg margin radius shadow-warp " @tap="ViewImage" :style="imgurl">
		</view>
		<view class="text-red text-center">点击上方框框上传</view>
		<view class="margin flex flex-direction">
			<button v-show="isshow" class="cu-btn lg bg-mauve" @tap="subimgcl"> 开始提取</button>
		</view>
		<view class="text-df padding text-mauve">
			功能：智能识别图片中的所有文字,并提取出来。
		</view>
		<view class="margin" v-if="data.length>0">
			<view class="text-xl text-blue">识别结果：</view>
			<view class="text-lg margin-tb solid-bottom padding-bottom" v-for="(item,i) in data">
				<view>{{i}}、{{item.words}} </view>
			</view>
			<view class="margin flex flex-direction">
				<button class="cu-btn lg bg-blue" @tap="copyFun">复制到剪切板</button>
			</view>
		</view>
		<!-- <view class="margin ">
			 <ad unit-id="" ad-intervals="60"></ad>
		</view> -->
		<!-- 消息提示 -->
		<uni-popup ref="popupMessage" type="message">
			<uni-popup-message :type="msgType" :message="message" :duration="2000"></uni-popup-message>
		</uni-popup>

	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	export default {
		components: {
			uniPopup,
			uniPopupMessage,
			uniPopupDialog
		},
		data() {
			return {
				imgurl: 'background:#fff url(https://apis.51j.top/img/img.png)center no-repeat;',
				url: '',
				isshow: false,
				down: false,
				base64: '',
				type: 'center',
				msgType: 'success',
				message: '',
				value: '',
				data: []
			}
		},mounted() {
			this.usageCountFun();
		},
		methods: {
			ViewImage(e) {
				uni.chooseImage({
					count: 1,
					sourceType: 'album',
					success: (data) => {
						if (data.tempFiles[0].size < 512000) {
							this.imgurl = "background:#fff url(" + data.tempFiles[0].path + ")center no-repeat;background-size: 100%;";
							this.url = data.tempFiles[0].path;
							this.isshow = true;
						} else {
							this.msgType = "error"
							this.message = "图片大小不能超过500KB"
							this.$refs.popupMessage.open();
						}
					}
				})
			},
			subimgcl() {
			
			},
			copyFun() {
				let connet = '';
				this.data.forEach(function(val, key) {
					connet += val.words + "\r\n";
				})
				uni.setClipboardData({
					data: connet,
					success() {
						uni.showToast({
							title: "复制成功",
							icon: "success"
						});
					}
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}

	.subimg {
		height: 180px;
	}
</style>
