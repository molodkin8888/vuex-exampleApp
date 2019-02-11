<template>
<div class="container">
	<div class="row">
		<div class="col-lg-12 col-sm-12 col-xs-12 add_new_product">
			<h3>Enter new product</h3>
			<div class="product">
				<form>
					<div class="form-group">
						<label for="titleProduct">Title</label>
						<input type="text" class="form-control" id="title" placeholder="product title" v-model="product.title" />
					</div>
					<div class="form-group">
						<label for="price">Price</label>
						<input type="text" class="form-control" id="price" placeholder="price" v-model="product.price" />
					</div>
					<div class="form-group">
						<label for="qt">Quantity</label>
						<input type="text" class="form-control" id="quantity" placeholder="quantity" v-model="product.qt" />
					</div>
					<button type="submit" class="btn btn-primary add_product" @click.prevent="addProduct">Add product</button>
				</form>
				</div>
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
	methods: {
		addProduct(){
			ProductService.addProduct(this.product.title, this.product.price, this.product.qt);
			this.$router.push('/')
		}
	}
}
</script>

<style scoped>
	.container {
		width: 100%;
		height: 100%;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    align-content: center; 
    justify-content: center; 
    overflow: auto;   
	}

	h3 { 
		text-align: center;
	}

	.add_product {
		width: 100%;
	}
</style>
