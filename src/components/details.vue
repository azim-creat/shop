<template>
	<div class="details">
		<div class="container">
			<div class="row">
				<div class="col-md-12" v-for="(product,index) in products" :key="index"> 
					<div v-if="proId == product.productId">
						<h1>{{product.productTitle}}</h1>
						<img :src="product.image" class="img-fluid">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'details',
		data(){
			return{
				proId:this.$route.params.Pid,
				title:"details",
				products:[
				{
				productTitle:"ABCN",
				image       : require('../assets/images/product1.jpg'),
				productId:1
				},
				{
				productTitle:"KARMA",
				image       : require('../assets/images/product2.jpg'),
				productId:2
				},
				{
				productTitle:"Tino",
				image       : require('../assets/images/product3.jpg'),
				productId:3
				},
				{
				productTitle:"EFG",
				image       : require('../assets/images/product4.jpg'),
				productId:4
				},
				{
				productTitle:"MLI",
				image       : require('../assets/images/product5.jpg'),
				productId:5
				},
				{
				productTitle:"Banans",
				image       : require('../assets/images/product6.jpg'),
				productId:6
				}
				]
				 
			}
		},
		computed :{
			FIRST_COMPUTED_VALUE(){
			return this.$store.state.first_value
			}
		},
		
	}
</script>