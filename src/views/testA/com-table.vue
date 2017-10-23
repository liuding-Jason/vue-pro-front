<!-- 
	Module : testA 
	Discribe : show how to pass data from one son component to anythor
	Date : 2017-10-18
	Author : liuding
 -->

 <template>
 	<table class="t-table">
 		<thead class="t-table-header">
 			<th display="table-cell" v-if="checked.indexOf(item['key']) > -1" v-for="item in tableHeader">{{item['text']}}</th>
 		</thead>
 		<tbody>
 			<tr class="t-table-col" v-for="col in tableList">
 				<td display="table-cell" v-if="checked.indexOf(item['key']) > -1" v-for="item in tableHeader">{{ col[item['key']] }}</td>
 			</tr>
 		</tbody>
 	</table>
 </template>
 <script>
 	import bus from "../../libs/bus.js" ;
 	export default {
 		props : {
 			initChecked : {
 				type : Array 
 			} ,
 			tableheader : {
 				type : Array
 			} ,
 			tablelist : {
 				type : Array
 			}
 		} ,
 		data(){
 			return {
 				checked : this.initChecked ,
 				tableHeader : this.tableheader ,
 				tableList : this.tablelist
 			}
 		} ,
 		created(){
 			bus.$on('table-check' , this.getCheckResult) ;
 		} ,
 		methods : {
 			getCheckResult(result){
 				let newHeader = [] ,
 					newChecked = [] ;
 				this.tableheader.map((item) => {
 					let { key } = item ;
 					if(result.indexOf(key) > -1){
 						newHeader.push(item) ;
 						newChecked.push(key) ;
 					}
 				}) ;
 				this.tableHeader = newHeader ;
 				this.checked = newChecked ;
 			}
 		}
 	}
 </script>
 <style scoped>
 .t-table{
 	border: 2px solid mediumpurple ;
 	border-radius: 5px ;
 	box-shadow: 1px 1px 3px #ccc ;
 }
 .t-table th , .t-table td {
	min-width: 150px ;
	text-align: center ;
 }
 </style>
