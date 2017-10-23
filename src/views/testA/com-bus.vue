<!-- 
	Module : testA
	Discribe : show how to pass data form one son component to anyther 
	Date : 2017-10-18
	Author : liuding	
-->
<!-- 表格列的筛选功能 -->
<template>
	<div>
		<p>请选择表头 <button class="t-table-button" v-on:click="getChooseHeader">筛选</button> </p>
		<span class="t-table-choose-item" v-for="item of tableHeader">
			<input 
			type="checkbox" :id="item['key']" 
			:name="item['key']" v-model="item.checked" /> 
			<label :for="item['key']">{{ item['text'] }}</label> 
		</span>
	</div>
</template>

<script>
	import bus from "../../libs/bus.js" ;
	export default {
		props : {
			initChecked : {
				type : Array ,
				default : () => {return ['name' , 'age', 'gender']}
			} ,
			tableheader : {
				type : Array
			}
		} ,
		data(){
			return {
				tableHeader : this.tableheader
			}
		} ,
		methods : {
			filterChecked(){
				this.tableHeader.map((item) => {
					if(this.initChecked.indexOf(item['key']) > -1){item['checked'] = true}
				}) ;
			} ,
			getChooseHeader(){
				let checkedItems = [] ;
				this.tableHeader.map((item) => {
					let {checked , key} = item ;
					if(checked){checkedItems.push(key);}
				}) ;
				console.log("筛选结果：" , checkedItems) ;
				bus.$emit("table-check" , checkedItems);
			}
		} ,
		mounted(){
			this.filterChecked() ;
		}
	}
</script>

<style>
.t-table-choose-item {
	margin-right: 8px ;
}
.t-table-button {
	height: 25px ;
	line-height: 25px ;
	padding: 0 8px ;
	font-size: 13px ;
	font-weight: 700 ;
	border: 1px solid #ccc ;
	border-radius: 5px ;
	margin-left: 15px ;
	background-color: #78c06e ;
	color: #fff ;
}

.t-table-button:active {
	color: #333 ;
	background-color: #51c163 ;
	outline: none;
}

</style>

