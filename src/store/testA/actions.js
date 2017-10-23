/*
	Module : testA 
	Describe : Actions example in testA module 
	Date : 2017-10-17
	Author : liuding
*/

export default {
	// commit a mutation in the same module
	// 参数形态
	showStateA(context){
		context.commit("getStateA");
	} ,
	// async handle
	// 异步操作
	asyncShowStateA(context){
		return new Promise((resolve , reject) => {
			let t = setTimeout(() => {
				context.commit("getStateA") ;
				clearTimeout(t) ;
				resolve() ;
			} , 1000)
		});
	}
}