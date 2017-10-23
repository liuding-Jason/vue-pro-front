/*
	Module : testA
	Describe : Mutations example in testA moudle
	Date : 2017-10-17
	Author : liuding
*/
export default {
	// get stateA of testA module
	// 获取 stateA
	getStateA(state , rootMuta){
		return state.stateA += " new value" ;
	} ,
	// get root mutations
	// 访问根mutation
	getRootMutaions(state , rootMuta){
		// TODO
	} ,
	changeModuleName(state , rootMuta){
		return state.moduleName += " new" ;
	} ,
	// change good num
	changeGoodNum(state , value){
		let {total = 0} = value ;
		return state.goodsNum = total * 1 ;
	}	
}
