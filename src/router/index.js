import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '@/pages/index/index'
import destination from '@/pages/destination/destination'
import message from '@/pages/message/message'
import home from '@/pages/home/home'

export default new Router({
	linkActiveClass: 'active',
	routes: [
		{ path: '*', redirect: '/index', },
		{ path: '/index', component: index },
		{ path: '/destination', component: destination },
		{ path: '/message', component: message },
		{ path: '/home', component: home },
	]
})
