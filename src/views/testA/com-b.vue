<!-- 
	comb
-->

<template>
	<div>
		<!-- 简单的应用state -->
		{{ this.$store.state.testA.moduleName }}
		{{ initVal }}
		{{ comInitVal }}
	</div>
</template>

<script>
	export default {
		data(){
			return {
				initVal : "hello"
			}
		} ,
		computed : {
			// 当有较复杂的应用时 可以通过计算属性
			comInitVal (){
				console.log(this.$store);
				return this.$store.state.testA.moduleName;
			}
		}
	}
</script>


