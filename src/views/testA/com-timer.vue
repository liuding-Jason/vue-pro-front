<!-- 
	Module : testA
	Discribe : show how to pass data from son component to parent component by $emit
	Date : 2017-10-18
	Author : liuding
 -->

 <template>
 	<div>
 		<span>还有 {{ count }} 秒 活动结束！</span>
 		<input class="t-input-button" type="button" name="btn" value="倒计时开始" v-on:click.stop.preventDefault = "handleInputButtonClick">
 	</div>
 </template>

 <script>
 	export default {
 		data (){
 			return {
 				count : 5
 			}
 		} ,
 		methods : {
 			handleInputButtonClick(){
 				this.lastCountFun() ;
 			} ,
 			lastCountFun(){
 				let t = setInterval(() => {
 					if(--this.count <= 0){
 						this.$emit('timer-over', "这是传递的信息")
 						clearInterval(t) ;
 					}
 				} , 1000) ;
 			}
 		}
 	}
 </script>
 <style scoped>
 .t-input-button {
	height: 28px ;
	line-height: 28px ;
	border: 1px solid #ccc ;
	border-radius: 5px ;
	background-color: #efefef ;
 }
 </style>