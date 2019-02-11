import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		products: []
	},
	getters: {
		getProducts: state => state.products
	},	
	mutations: {
		loadProducts(state, payload) {
			state.products = payload
		}
	},
	actions: {
		loadProducts(context, products) {
			//axios.get(url, (response) => .
			context.commit('loadProducts', products)
		}
	},
})