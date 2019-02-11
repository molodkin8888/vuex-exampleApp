<template>
<div id="app">
  <div class="container">
    <router-view></router-view>
  </div>
</div>
</template>

<script>


export default {
  data(){
    return {
      mode: 'view'
    }
  },
  computed: {
    componentName(){
      return this.mode == 'view' ? 'ProductDetails' : 'add-product';
    }
  },
  components: {
   // 'vue-header':Header,
  }
}
</script>

<style>

</style>
