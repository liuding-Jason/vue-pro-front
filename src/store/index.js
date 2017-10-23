/*
	Module : index module
	Discribe : Vuex 状态管理配置模块 模块设计方式：主模块 index + 业务对应的模块 basisName
	Date : 2017-10-17
	Author : liuding
*/

// import other module 
import testA from "./testA/index.js" ;
import testB from "./testB/index.js" ;
const store = {
	state : {
		count : 0
	} ,
	getters : {

	} ,
	mutations : {

	} , 
	actions : {

	} , 
	modules : {
		testA ,
		testB
	}
}
export default store ;