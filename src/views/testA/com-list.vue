<!-- 
	list component
 -->

<template>
	<div class="t-list-con">
		<label class="t-list-title">{{ title }}</label>
		<select class="t-list-select" v-on:change.stop.preventDefalut="selectChange">
			<option v-if="choose * 1 === item['value'] * 1" v-for="item in datalist" :value="item['value']" selected=""> {{ item['text'] }}</option>
			<option v-if="choose * 1 !== item['value'] * 1" v-for="item in datalist" :value="item['value']"> {{ item['text'] }}</option>
		</select>
	</div>
</template>

<script>
	export default {
		props : {
			title : {
				type : String ,
				default : "请选择"
			} ,
			datalist : {
				type : Array
			} ,
			defVal : {
				type : Number | String ,
				defVal : this.datalist ? this.datalist[0]['value']  : 0
			}
		} ,
		data(){
			return {
				choose : this.defVal
			}
		} ,
		methods : {
			selectChange(ev){
				this.choose = ev.target.value
				console.log(this.choose) ;
			}
		}
	}
</script>

<style scoped>
.t-list-con{

}

.t-list-title {
	color: #444 ;
	margin-right: 5px ;
}

.t-list-select {
	border: 1px solid #ccc ;
	border-radius: 5px ;
	min-width: 150px ;
	height: 28px ;
	line-height: 28px ;
	padding: 0 3px ;
	appearance: none ;
    -moz-appearance: none ; 
    -webkit-appearance: none ; 
}

.t-list-select option {
	font-size: 13px ;
	color: #333 ;
}

</style>