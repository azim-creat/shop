<template>
  <div class="product-item">
    <!-- <img :src="data.image" /> -->
    <div class="product-title">
      <h3> {{title || 'HGJHGJH'}} </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props:['title'],

};



</script>

<style scoped>
.product-item.single-item img {
  width: 100%;
  height: auto;
}

.view-wrapper.list-item {
}
</style>

