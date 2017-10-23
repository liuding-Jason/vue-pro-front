
/*
	Moudle : testA
	Describe : Getters example in testA module 
	Date : 2017-10-17
	Author : liuding
*/

export default {
	// stateA add B
	// 获取同一个module中定义的 state
	getAddState (state , getters , rootState){
		return state.stateA + state.stateB
	} ,
	// get one getter in the same module
	// 在同一个module的 getters 中，调用同一个 module 中另一个 getters
	getAGetterFun(state , getters , rootState){
		return getters.getAddState + "is a example" ;
	}
}