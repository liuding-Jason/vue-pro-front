<!-- 
	Module : testA
	Discribe : show how to pass data from parent component to son component
	Date : 2017-10-18
	Author : liuding
 -->

<template>
	<div>
		<h5>{{ title }}</h5>
		<div>{{ content }}</div>
	</div>
</template>
<script>
	export default {
		props : {
			title : {
				type : String ,
				default : "title" ,
				// required : true 是否必传
			} ,
			content : {
				type : String ,
				default : "content"
			}
		}
	}
</script>
<style scoped>
	

</style>