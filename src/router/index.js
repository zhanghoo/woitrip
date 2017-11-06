import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '@/pages/index/index'
import destination from '@/pages/destination/destination'
import message from '@/pages/message/message'
import home from '@/pages/home/home'
import guide from '@/pages/guide/guide'
import company from '@/pages/company/company'
import local from '@/pages/local/local'
import club from '@/pages/club/club'
import traveler from '@/pages/traveler/traveler'
import group from '@/pages/group/group'
import qa from '@/pages/qa/qa'
import expmall from '@/pages/expmall/expmall'
import souvenirmall from '@/pages/souvenirmall/souvenirmall'
import more from '@/pages/more/more'

export default new Router({
	linkActiveClass: 'active',
	routes: [
		{
			path: '*',
			redirect: '/index', 
		},
		{
			path: '/index',
			component: index,
		},
		{
			path: '/destination',
			component: destination 
		},
		{
			path: '/message',
			component: message 
		},
		{
			path: '/home',
			component: home 
		},
		{
			path: '/guide',
			component: guide
		},
		{
			path: '/company',
			component: company
		},
		{
			path: '/local',
			component: local
		},
		{
			path: '/club',
			component: club
		},
		{
			path: '/traveler',
			component: traveler
		},
		{
			path: '/group',
			component: group
		},
		{
			path: '/qa',
			component: qa
		},
		{
			path: '/expmall',
			component: expmall
		},
		{
			path: '/souvenirmall',
			component: souvenirmall
		},
		{
			path: '/more',
			component: more
		}
	]
})
