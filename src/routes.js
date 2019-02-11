import Header from './Header.vue'
import ProductList from './ProductList.vue'
import ProductDetails from './ProductDetails.vue'
import AddProduct from './AddProduct.vue'

export const routes = [
	{
		path: '/',
		component: ProductList,
		name: 'home'
	},
	{
		path: '/add',
		component: AddProduct
	},
	{
		path: '/detail/:id',
		component: ProductDetails,
		name: 'product-details'
	},
	{
		path: '*',
		component: ProductList
	}
]