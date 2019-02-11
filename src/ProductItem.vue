<template>
	<div class="card">
		<div class="card-body">
			<h4 class="card-title">{{index}} {{product.title}}</h4>
			<p class="card-text">{{product.qt}} items for ${{product.price}}</p>
			<a href="#" class="btn btn-primary" @click="viewDetailsClicked">View Details</a>            
		</div>
	</div>
</template>

<script>
	import ProductService from './ProductService.js'

	export default {
		props: {
			product: {
				type: Object,
				required: true,
			},
			index: {
				type: Number,
			}
		},
		methods: {
			//send ID current product in ProducctService.js
			viewDetailsClicked(){
				this.$router.push({name: 'product-details', params: {id:this.product.id}})
			}
		}
	}
</script>

<style>
	div.card {
		border: 1px solid rgb(93, 192, 250);
		border-radius: 10px;
		margin: 10px;
		padding: 10px;
	}
</style>