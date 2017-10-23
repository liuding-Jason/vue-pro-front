<!-- 
	Module : testA
	Discribe : TestA index view
	Date : 2017-10-17
	Author : liuding
 -->
<template>
	<div>
		<h1 style="margin-bottom:15px;">{{ message + id }}</h1>
		<div class="t-container">
			<h2>1、Vue 组件定义 </h2>
			<div class="t-content">
				<h3>1.1 操作</h3>
				<div class="t-quote">
					<h4>步骤/说明</h4>
					<p>a 新建一个.vue文件，书写组件</p>
					<p>b 在想引用的组件中引入</p>
					<p>c 在当前组件的<span class="t-keywords">components</span>属性中组册</p>
				</div>
				<div class="t-example">
					<h4>案例 <small>( /views/testA/com-list.vue )</small></h4>
					<com-list :datalist="datalist"></com-list>

					<com-list :datalist="datalist"></com-list>
				</div>
			</div>
		</div>
		<div class="t-container">
			<h2>2、vue 组件之间 通信 </h2>
			<div class="t-content">
				<h3>2.1、父子 组件之间的通信 </h3>
				<div class="t-quote">
					<h4>步骤/说明</h4>
					<p>数据从父组件 -> 子组件 通过 <span class="t-keywords">props</span>实现</p>
				</div>
				<div class="t-example">
					<h4>案例 <small>( /views/testA/com-props.vue )</small></h4>
					<com-props title="这是一个标题" :content="propsContent"></com-props>
				</div>
			</div> 
			<div class="t-content">
				<h3>2.2、子父 组件之间的通信 </h3>
				<div class="t-quote">
					<h4>步骤/说明</h4>
					<p>a 数据从 子组件 -> 父组件 通过 <span class="t-keywords">父组件传入事件</span></p>
					<p>b 数据从 子组件 -> 父组件 通过 <span class="t-keywords">子组件$emit事件</span> </p>
					<p>c 数据从 子组件 -> 父组件 通过 <span class="t-keywords">中央总线bus</span></p>
				</div>
				<div class="t-example">
					<h4>案例a <small>( /views/testA/com-input.vue )</small></h4>
					<div>
						<com-input :getInputValue="getInputValue"></com-input>
					</div>
				</div>
				<div class="t-example">
					<h4>案例b <small>( /views/testA/com-timer.vue )</small></h4>
					<div>
						<com-timer @timer-over="showTimerOver"></com-timer>
					</div>
				</div>
				<div class="t-example">
					<h4>案例c</h4>
					<div>如2.3中兄弟组件通信</div>
				</div>
			</div>
			<div class="t-content">
				<h3>2.3、兄弟 组件之间的通信 </h3>
				<div class="t-quote">
					<h4>步骤/说明</h4>
					<div>a 数据从 一个子组件 -> 另一个子组件 ， 通过<span class="t-keywords">父组件做桥梁（不建议）</span> </div>
					<div>b 数据从 一个子组件 -> 另一个子组件 ， 通过<span class="t-keywords">中央总线bus</span> </div>
				</div>
				<div class="t-example">
					<h4>案例<small>( /views/testA/com-bus.vue )</small></h4>
					<div>
						<com-bus :initChecked="initChecked" :tableheader="tableheader"></com-bus>
						<com-table :initChecked="initChecked" :tableheader="tableheader" :tablelist="tablelist"></com-table>
					</div>
				</div>
			</div>
			<div class="t-content">
				<h3>2.4、不同层级 组件之间的通信 </h3>
				<div class="t-quote">
					<h4>步骤/说明</h4>
					<div>a 数据从一个组件 -> 另一个组件，通过<span class="t-keywords">中央总线bus</span></div>
					<div>b 数据从一个组件 -> 另一个组件，通过<span class="t-keywords">vuex</span> , <span class="t-keywords">**适用于上面所有的通信场景**</span></div>
				</div>
				<div class="t-example">
					<h4>案例</h4>
					<div>
						<div class="t-shop-num">当前购物车商品数量：{{this.$store.state.testA.goodsNum}}</div>
						<com-shop-car></com-shop-car>
					</div>
				</div>
			</div>
		</div>
		<div class="t-container">
			<h2>3、vuex 使用</h2>
			<div class="t-quote">
				<h4>说明</h4>
				<div> <span class="t-keywords">Vuex</span> 是基于vue开发的一个状态管理的<span class="t-keywords">插件</span> 通过<span class="t-keywords">"Vue.install"</span>开发 ，所以可以在vue所有组件中，通过<span class="t-keywords">"this.$store"</span>访问</div>
			</div>
			<div class="t-example">
				<h4>步骤</h4>
				<div>
					<p>a 使用npm安装vuex ， <span class="t-keywords">npm install --save vuex</span></p>
					<p>b 引入main主文件，<span class="t-keywords">import Vuex from "vuex"</span></p>
					<p>c 创建vuex的store实例 <span class="t-keywords">const store = new Vuex.Store(Store);</span></p>
					<p>d 在根组件中配置和挂载 , <span class="t-keywords">
						new Vue({
						    el: '#app',
						    router: router,
						    store : store ,
						    render: h => h(App)
						}) ;
					</span></p>
				</div>
			</div>
			<div class="t-content">
				<h3>3.1 state </h3>
				<div class="t-quote">
					<h4>步骤/说明</h4>
					<div>
						<p><span class="t-keywords">state</span> 是vuex中的<span class="t-keywords">状态库</span>，用于存放所有共享的状态</p>
					</div>
				</div>
			</div>
			<div class="t-content">
				<h3>3.2 mutations</h3>
				<div class="t-quote">
					<h4>步骤/说明</h4>
					<div>
						<p><span class="t-keywords">mutations</span> 是vuex中，可以直接访问和修改state的配置项，在vue的组件中，通过<span class="t-keywords">this.$store.commit('mutation-name')</span>触发</p>
						<p><span class="t-keywords">注：默认状态下mutations中是不可以进行异步操作的</span></p>
					</div>
				</div>
			</div>
			<div class="t-content">
				<h3>3.3 actions</h3>
				<div class="t-quote">
					<h4>步骤/说明</h4>
					<div>
						<p><span class="t-keywords">actions</span> 是vuex中通过触发mutations，而实现state更改的配置项。在vue组件中，可以通过<span class="t-keywords">this.$store.dispatch("action-name")</span>触发</p>
						<p><span class="t-keywords">注：actions中是可以进行异步操作的</span></p>
					</div>
				</div>
			</div>
			<div class="t-content">
				<h3>3.4 modules</h3>
				<div class="t-quote">
					<h4>步骤/说明</h4>
					<div>
						<p><span class="t-keywords">modules</span> 是vuex根据不同业务，进行拆分组合 ，定义的多个store的集合</p>
						<p><span class="t-keywords">注：只能有一个主store，其他的store通过modules配置项集成</span></p>
					</div>
				</div>
			</div>
			<div class="t-example">
				<comb></comb>
				<comb></comb>	
			</div>
		</div>
	</div>
</template>
<script>
	import comList from "./com-list.vue" ;
	import comProps from "./com-props.vue" ;
	import comInput from "./com-input.vue" ;
	import comTimer from "./com-timer.vue" ;
	import comBus from "./com-bus.vue" ;
	import comTable from "./com-table.vue" ;
	import comShopCar from "./com-shop-car.vue" ;
	import coma from "./com-a.vue" ;
	import comb from "./com-b.vue" ;
	export default {
		props : {
			id : {
				type : Number|String ,
				default : 0
			}
		} ,
		components : {
			comList , comProps , comInput , comTimer , 
			comBus , comTable , comShopCar , coma , comb
		} ,
		data(){
			return {
				message : "Welcome Vue " ,
				datalist : [
					{text : "菜单一" , value : "1"} , 
					{text : "菜单二" , value : "2"} , 
					{text : "菜单三" , value : "3"}
				] ,
				propsContent : "这是一个内容" ,
				initChecked : ['name' , 'age' , 'gender'] ,
				tableheader : [{
					key : "name" ,
					text : "姓名" ,
					checked : false ,
				} , {
					key : "age" ,
					text : "年龄" ,
					checked : false
				} , {
					key : "gender" ,
					text : "性别" ,
					checked : false
				} , {
					key : "grade" ,
					text : "成绩" ,
					checked : false
				}] ,
				tablelist : [{
					id : 1 ,
					name : 'pikaqiu' ,
					age : 25 ,
					gender : "M" ,
					grade : 88
				} , {
					id : 2 ,
					name : 'wencheng' ,
					age : 18 , 
					gender : "M" ,
					grade : 89
				} , {
					id : 3 ,
					name : 'shuishou' ,
					age : 19 ,
					gender : "M" ,
					grade : 86
				}]
			}
		} ,
		methods : {
			getModuleTestAState(){
				console.log(this.$store.state.testA) ;
			} ,
			changeModuleTestState(){
				this.$store.commit("changeModuleName") ;
			} ,
			getInputValue(value){
				console.log(value);
			} ,
			showTimerOver(message){
				alert("Timer over , and message is : " , message);
			}
		} ,
		mounted(){
			this.getModuleTestAState() ;
			let t = setTimeout(() => {
				this.changeModuleTestState() ;
				clearTimeout(t) ;
			} , 1000) ;
		}
	}
</script>

<style scoped>
.t-container {
	border: 2px solid #ccc ;
	border-radius: 10px ;
	margin-bottom: 15px ;
	padding: 10px 30px ; 
}

.t-content {
	padding: 5px ;
}

.t-quote , .t-example {
	background: #ddd ;
	color: #222 ;
	border-radius: 5px ;
	margin: 8px 0 ;
	padding: 6px 8px ;
	font-size: 14px ;
	line-height: 2.5 ;
}
.t-example {
	background: #eee ;
}
.t-keywords {
	background-color: #FFC0CB ;
	font-weight: 700  ;
	padding: 3px ;
	border-radius: 5px ;
	letter-spacing: 1px ;
	margin: 0 2px ;
}
.t-shop-num {
	text-align: right;
	padding-right: 15px ;
}

</style>