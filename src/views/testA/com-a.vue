<!-- 
	coma
 -->

 <template>
 	<div>
 		<div>
 		当前的数量为： <b>{{ count }}</b>
 		</div>
 		<button @click.native="increaceCount"> +1 </button>
 	</div>
 </template>

 <script>
 	export default {
 		data(){
 			return {
 				count : 0
 			}
 		} ,
 		methods : {
 			increaceCount(){
 				this.count += 1 ;
 			}
 		}
 	}
 </script>

 <style scoped>
 	
 </style>