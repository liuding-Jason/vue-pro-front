<!-- 
	Module : testA 
	Discribe : show how to pass data from one component to anthor
	Date : 2017-10-19
	Author : liuding
 -->
<template>
 	<table class="t-table">
 		<thead>
 			<tr>
 				<span>{{ shopNum }}</span>
 				<th>订单编号</th>
	 			<th>商品名称</th>
				<th>商品数量</th>
				<th>商品价格</th>
				<th>备注</th>
 			</tr>	
 		</thead>
 		<tbody>
 			<tr v-for="item in shoplist">
 				<span class="t-checkbox"><input type="checkbox" :orderCode="item['orderCode']" v-model="item.checked"></span>
 				<td>{{ item['orderCode'] }}</td>
				<td>{{ item['shopName'] }}</td>
				<td>
					<input class="t-handle-button" type="button" value="-" :orderCode="item['orderCode']" v-on:click.stop="handleShopDel"> 
					<span class="t-shopNum-input">{{ item['shopNum'] }}</span> 
					<input class="t-handle-button" type="button" value="+" :orderCode="item['orderCode']" v-on:click.stop="handleShopAdd"> 
				</td>
				<td>{{ (item['shopPerRank'] * item['shopNum']).toFixed(2) }}</td>
				<td>{{ item['remark'] }}</td>
 			</tr>
 		</tbody>
 	</table>
</template>
<script>
 	export default {
 		data(){
 			return {
 				shoplist : []
 			}
 		} ,
 		methods : {

 			getAjaxData(){
 				// node server
 				this.$http.post("http://192.168.60.54:3001/shopCar" , {userId : 1})
 				.then((res = {}) => {
 					return res.body ;
 				})
 				.then(({code = void 0 , data = {} , message = "请求失败！"}) => {
 					if(code * 1 !== 0){alert(message);}
 					let {shopCar = []} = data ;
 					this.shoplist = shopCar ;
 				})

 				// php server 
 				// this.$http.get("http://127.0.0.1:8000/shopCar")
 				// .then((res = {}) => {
 				// 	return res.body ;
 				// })
 				// .then(({code = void 0 , data = {} , message = "请求失败！"}) => {
 				// 	if(code * 1 !== 0){alert(message);}
 				// 	let {shopList = []} = data ;
 				// 	this.shoplist = shopList ;
 				// })

 			} ,
 			handleShopAdd(ev){
 				let code = ev.target.getAttribute("orderCode") ;
 				for(let i = 0 , len = this.shoplist.length ; i < len ; i++){
 					let {orderCode = ""} = this.shoplist[i] ;
 					if(code && orderCode.toLowerCase() === code.toLowerCase()){
 						this.shoplist[i]['shopNum'] = this.shoplist[i]['shopNum'] + 1 ;
 						break ;
 					}
 				}
 			} ,
 			handleShopDel(ev){
 				let code = ev.target.getAttribute("orderCode") ;
 				for(let i = 0 , len = this.shoplist.length ; i < len ; i++){
 					let {orderCode = "" , shopNum = 0} = this.shoplist[i] ;
 					if(code && orderCode.toLowerCase() === code.toLowerCase() && shopNum * 1 > 1){
 						this.shoplist[i]['shopNum'] = this.shoplist[i]['shopNum'] - 1 ;
 						break ;
 					}
 				}
 			}
 		} ,
 		computed : {
 			shopNum(){
 				let total = 0 ;
 				this.shoplist.map((item) => {
 					let {shopNum = 0} = item ;
 					total += shopNum * 1 ;
 				}) ;
 				// cimmit mutation
 				this.$store.commit("changeGoodNum" , {total}) ;
 				return total ;
 			}
 		},
 		mounted(){
 			this.getAjaxData() ;
 		}
 	}
</script>
<style scoped>
.t-table{
	border: 2px solid mediumpurple ;
    border-radius: 5px ;
    box-shadow: 1px 1px 3px #ccc ; 
}
.t-table>thead {
	border-bottom: 2px solid mediumpurple ;
}

.t-checkbox {
	padding : 0 10px
}

.t-shopNum-input , .t-handle-button {
	color: #ee0000 ;
	height: 22px ;
	line-height: 20px ;
	width: 22px ;
	display: inline-block ;
}

.t-handle-button {
	background-color: #ddd ;
	border: 1px solid #ccc ;
	color: #222 ;
	border-radius: 5px ;
	margin: 0 5px ;
}

.t-handle-button:active{
	color: #fff ;
	background-color: #333
}

.t-table th , .t-table td {
	min-width: 150px ;
    text-align: center ;
}
</style>