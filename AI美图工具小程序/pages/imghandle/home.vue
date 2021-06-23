<template name="basics">
	<view>
		<scroll-view scroll-y class="page">
			<image src="https://apis.51j.top/img/e256b4ce-d9a4-488b-8da2-032747213982.png"
			 mode="widthFix" class="response"></image>
			<view class="nav-list">
				<navigator hover-class="none" :url="'/pages/imghandle/' + item.url" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "imghandle",
		data() {
			return {
				elements: [{
						title: '模糊变清晰',
						name: '图片处理',
						url:"imageDefinitionEnhance",
						color: 'cyan',
						cuIcon: 'repairfill'
					},
					{
						title: '去雾气',
						name: '图片处理',
						url:'Defogging',
						color: 'blue',
						cuIcon: 'paintfill'
					},
					// {
					// 	title: '去水印',
					// 	name: '图片处理',
					// 	color: 'pink',
					// 	cuIcon: 'font'
					// },
					{
						title: '黑白上色',
						name: '相片处理',
						url:"colourize",
						color: 'purple',
						cuIcon: 'colorlens'
					},
					// {
					// 	title: '人像美化',
					// 	name: '照片处理',
					// 	color: 'olive',
					// 	cuIcon: 'myfill'
					// },
					{
						title: '漫画变装 ',
						name: '人像处理',
						url:"selfie_anime",
						color: 'mauve',
						cuIcon: 'clothesfill'
					},
					{
						title: '风格转变',
						name: '相片处理',
						url:"style_trans",
						color: 'pink',
						cuIcon: 'album'
					},
					{
						title: '涨知识',
						name: '物品识别',
						url:'advancedGeneral',
						color: 'brown',
						cuIcon: 'tagfill'
					},
					{
						title: '文字提取',
						name: '图片识别',
						url:"basicAccurate",
						color: 'red',
						cuIcon: 'newsfill'
					}
					// ,{
					// 	title: '提取翻译',
					// 	name: '图片识别',
					// 	color: 'orange',
					// 	cuIcon: 'copy'
					// }
				],
			};
		},
		onShow() {
			console.log("success")
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
