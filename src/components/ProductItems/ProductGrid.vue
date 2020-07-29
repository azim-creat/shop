<template>
  <router-link to="/product">
    <div class="product-item">
      <img :src="image" />
      <div class="product-title">
        <h3>{{title}}</h3>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProductGrid",
  props: { title: String, image: String }
};
</script> 

<style scoped>
.product-item {
  position: relative;
  border-radius: 3px;
}
.product-title {
  width: 100%;
  margin: 0;

  position: absolute;
  background: transparent;
  bottom: 0;
  backdrop-filter: blur(10px);
  min-height: 25px;
  max-height: 50px;
}
h3 {
  margin: 0;
  color: white;
  padding-left: 7px;
}
.product-item img {
  display: block;
  border-radius: 3px;
  width: 100%;
  height: auto;
}
</style>