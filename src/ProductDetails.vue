<template>
<div class="container">
	<div class="row">
		<div class="col-md-8 col-sm-12 col-xs-12 product">
			<h2>Product Detail</h2>
			<form>
			<div>
				<label for="title">Title: </label>
				<span>{{product.title}}</span>
			</div>
			<div>
				<label for="price">Price: </label>
				<span>{{product.price}} $</span>
			</div>
			<div>
				<label for="qt">Quantity: </label>
				<span>{{product.qt}}</span>
			</div>
			</form>
			<!--  <router-link to="/detail/2">go to detail 2</router-link>    -->
			<router-link :to="{name:'home'}">go to list</router-link>    
		</div>
	</div>
</div>
</template>

<script>
import ProductService from './ProductService.js'

export default {  
	data(){
		return {
			product: {}
		}
	},   
	created(){
			//listening $emit from ProductService.js
		ProductService.$on("viewDetails_From_Product_List", (selectedProduct) => { 
			this.product = selectedProduct;
		});
	},
	mounted(){
		ProductService.viewDetails(this.$route.params.id); // go here use exist routs and get id
	},
	watch: { // watcher check change parametrs
		'$route.params.id'(id){
			ProductService.viewDetails(this.$route.params.id); //simulate create components if we want to go from this components to same components
		}
	}
}    
</script>

<style scoped>
	.product {
		border: 1px solid red;
		border-radius: 10px;
		margin: 10px;
		padding: 10px;
		float: right;
	}

	span{
		font-weight: 700;
		font-size: 24px;
	}
</style>