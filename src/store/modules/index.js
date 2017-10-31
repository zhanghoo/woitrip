// import * as types from '../mutation-types' //这个是用于 定义函数 名字的
//mutation-type.js: export const SELECT_TYPE = 'selectType'

//state
//定义状态
const state = {
	selectedType: null
}

//getter
//用于从store中的state中派生一些状态 (store的计算属性)
const getters = {
	// selectedType: state => state.selectedType,
	selectedType: state => {
		return state.selectedType
	}
}

//mutation 必须是同步函数
const mutations = {
	// 使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
	// [types.SELECT_TYPE] (state, { val }) {

	// },
	selectType(state, val) {
		state.selectedType = val;
	}
}

//action
const actions = {

}

export default {
	state,
	getters,
	mutations,
	actions
}