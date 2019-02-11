import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueRouter)

export const router = new VueRouter({
	mode: 'history', //if we want to use url without #-hash we should use mode history.
	routes
})