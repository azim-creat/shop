<template>
  <div class="goToProduct" @click="goToProduct">
    <div class="product-item">
      <img v-lazy="image" />
      <div class="product-title">
        <h3>{{title}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGrid",
  props: {
    title: String,
    image: String,
    itemId: [Number, String],
    item: Object,
  },
  methods: {
    goToProduct() {
      this.$router.push({
        name: "product",
        params: { data: this.$props.item },
      });
    },
  },
};
</script> 

<style scoped>
.goToProduct {
  height: 100%;
  width: 100%;
}
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