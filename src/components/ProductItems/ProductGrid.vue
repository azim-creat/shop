<template>
  <router-link :to="`/product/${itemId}`">
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
<<<<<<< HEAD
  props: { title: String, image: String, itemId: Number },
=======
  props: { title: String, image: String },
>>>>>>> azim
};
</script> 

<style scoped>
.product-item {
  position: relative;
  border-radius: 3px;
  height: 100%;
}
.product-title {
  width: 100%;
  margin: 0;
  position: absolute;
  background: transparent;
  bottom: 0;
  backdrop-filter: blur(10px);
  line-height: 1;
  padding: 10px;
  border-radius: 6px;
}
h3 {
  margin: 0;
  color: white;
  max-width: 90%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.product-item img {
  display: block;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>