<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">物体识别</block>
		</cu-custom>
		<view class="padding-xl subimg margin radius shadow-warp " @tap="ViewImage" :style="imgurl">
		</view>
		<view class="text-red text-center">点击上方框框上传</view>
		<view class="margin flex flex-direction">
			<button v-show="isshow" class="cu-btn lg bg-mauve" @tap="subimgcl"> 开始识别</button>

		</view>
		<view class="text-df padding text-mauve">
			功能：智能识别图片知名地标、动物、植物、菜品、商标、红酒、货币、车辆外观损坏等。
		</view>
		<view class="margin" v-if="data.length>0">
			<view class="text-xl text-blue">识别结果：</view>
			<view class="text-lg flex margin-tb solid-bottom padding-bottom" v-for="(item,i) in data">
				<view class="flex-treble ">{{item.root}} </view>
				<view class="flex-treble">{{item.keyword}}</view>
				<view class="flex-treble text-center">概率：{{(item.score*100).toFixed(2)}}%</view>
			</view>
		</view>
		
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
		},
		mounted() {
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
