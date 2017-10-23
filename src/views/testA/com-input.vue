<!-- 
	Module : testA
	Discribe : Show how to pass data from son component to parent component
	Date : 2017-10-18
	Author : liuding
 -->

 <template>
 	<div>
 		<input class="t-input-text" type="text" placeholder="请输入" name="keyword" v-model="inputValue" v-on:change="handleInputChange" />	
		<input class="t-input-btn" type="button" name="btn" value="搜索" v-on:click.stop.preventDefault="handleButtonClick" />
 	</div>
 </template>

<script>
	export default {
		props : {
			value : {
				type : Number | String
			} ,
			getInputValue : {
				type : Function
			}
		} ,
		data(){
			return {
				inputValue : this.value || ""
			}
		} ,
		methods : {
			handleInputChange(ev){
				console.log("ev.target.value is %s"  , ev.target.value) ;
				console.log("inputValue is %s" , this.inputValue) ;
				// this.inputValue = ev.target.value ;
			} ,
			handleButtonClick(){
				this.getInputValue(this.inputValue) ;
			}
		}

	}
</script>
<style scoped>
.t-input-text{
	border: 1px solid #ccc ;
	height: 28px ;
	border-radius: 5px ;
	padding-left: 8px ;
}
.t-input-btn {
	border: 1px solid #ccc ;
	background-color: #ececec ;
	color: #333 ;
	height: 28px ;
	line-height: 28px ;
	border-radius: 5px ;
	padding: 0 5px ;
	vertical-align: middle; 
}

</style>