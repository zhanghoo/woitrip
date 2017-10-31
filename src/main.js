// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	data: {
		//将在各处使用该事件中心
		//组件通过它来通信
		eventHub: new Vue()
	},
	render: h => h(App),
	router,
	store,
	template: '<App/>',
	components: { App }
})
