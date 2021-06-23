<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">风格转换</block>
		</cu-custom>
		<view class="padding-xl subimg margin radius shadow-warp " @tap="ViewImage" :style="imgurl">
		</view>
		<view class="text-red text-center">点击上方框框上传</view>
		<view class="margin">
			<radio-group @change="listenerRadioGroup">
				<view class="margin-tb">
					<radio class="pink margin-left-sm" name="fengge" value="cartoon" checked=""></radio> <text class="margin-left-sm">卡通画</text>
					<radio class="pink margin-left-sm" name="fengge" value="pencil"></radio> <text class="margin-left-sm">铅笔画</text>
					<radio class="pink margin-left-sm" name="fengge" value="color_pencil"></radio> <text class="margin-left-sm">彩色铅笔画</text>
				</view>
				<view class="margin-tb">
					<radio class="pink margin-left-sm" name="fengge" value="gothic"></radio> <text class="margin-left-sm">哥特油画</text>
					<radio class="pink margin-left-sm" name="fengge" value="warm"></radio> <text class="margin-left-sm">彩色糖块油画</text>
					<radio class="pink margin-left-sm" name="fengge" value="scream"></radio> <text class="margin-left-sm">呐喊油画</text>
				</view>
				<view class="margin-tb">
					<radio class="pink margin-left-sm" name="fengge" value="wave"></radio> <text class="margin-left-sm">神奈川冲浪里油画</text>
					<radio class="pink margin-left-sm" name="fengge" value="mononoke"></radio> <text class="margin-left-sm">奇异油画</text>
				</view>
				<radio class="pink margin-left-sm" name="fengge" value="lavender"></radio> <text class="margin-left-sm">薰衣草油画</text>
			</radio-group>
		</view>
		<view class="margin flex flex-direction">
			<button v-show="isshow" class="cu-btn lg bg-mauve" @tap="subimgcl"> 开始处理</button>
			<button v-show="down" class="cu-btn lg bg-blue" @tap="download"> 下载保存</button>
		</view>
		<view class="text-df padding text-mauve">
			功能：运用世界领先的对抗生成网络，结合人脸检测、头发分割、人像分割等技术，为用户量身定制千人千面的二次元动漫形象，
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
				option: 'cartoon'

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
							this.down = false;
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
			download() {
				uni.showLoading({
					title: '正在下载…'
				});
				let fileName = new Date().getTime();
				let filePath = wx.env.USER_DATA_PATH + '/newImg' + fileName + '.jpg';
				uni.getFileSystemManager().writeFile({
					filePath: filePath, //创建一个临时文件名
					data: this.base64, //写入的文本或二进制数据
					encoding: 'base64', //写入当前文件的字符编码
					success: res => {
						uni.saveImageToPhotosAlbum({
							filePath: filePath,
							success: function(res2) {
								uni.hideLoading();
								uni.showToast({
									title: '保存成功',
									icon: "none",
									duration: 1500
								});
							},
							fail: function(err) {
								console.log(err.errMsg);
								uni.hideLoading();
							}
						})

					}
				})
			},
			listenerRadioGroup(e) {
				this.option = e.detail.value;
				this.down = false;
				this.isshow = true;
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
