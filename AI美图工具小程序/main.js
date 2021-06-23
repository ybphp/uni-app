import Vue from 'vue'
import App from './App'
import imghandle from './pages/imghandle/home.vue'
Vue.component('imghandle', imghandle);
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

Vue.config.productionTip = false
Vue.prototype.usageCount = 10;
Vue.prototype.updataCountFun = (Count) => {
	console.log(Count)
	uni.setStorage({
		key: "usageCount",
		data: Count,
		success() {

		}
	})
}
Vue.prototype.usageCountFun = () => {
	uni.getStorage({
		key: "usageCount",
		success: (res) => {},
		fail: (res) => {
			uni.setStorage({
				key: "usageCount",
				data: 10,
				success: (res) => {
					uni.showToast({
						title: "您已获得10次体验机会，赶紧尝试吧！",
						duration: 2000,
						icon: "none"
					});
				}
			})
		}
	})

}
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
