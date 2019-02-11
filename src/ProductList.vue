<template>
	<div>
		<router-link to="/add" class="btn btn-success">Add product</router-link>
		<product-item v-for="(product, i) in products" :key="product.id" 
		:product="product" :index="(i+1)"></product-item>
	</div>
</template>
<script>
	import ProductItem from './ProductItem.vue';
	import ProductService from './ProductService.js'
	import {mapGetters, mapActions, mapState} from 'Vuex' //make all getters in computed-property
	export default {
	
	// if we used mapGetters, down computed commented.

	/*computed: {
				products(){
			 // return this.$store.state.products;
					return this.$store.getters.getProducts;
				}
		},*/

		//and write: 
	computed: {
		...mapState(['products'])
	},
		
	components: {
		'product-item':ProductItem
	},
	methods: {
		...mapActions(['loadProducts'])
	},
	created(){
	// call mutations with name 'loadProducts
	//  this.$store.commit('loadProducts', ProductService.products);
		this.$store.dispatch('loadProducts', ProductService.products)
		// this.loadProducts(ProductService.products)
		}
	}
</script>