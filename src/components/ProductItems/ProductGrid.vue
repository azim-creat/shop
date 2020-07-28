<template>
  <div class="product-item list-item">
    <img :src="data.image" />
    <div class="product-title list-item">
      <h3 @click="goTodetail(data.productId)">{{data.productTitle}}</h3>
    </div>
  </div>
</template>

<script>
</script> 

<style lang="scss" scoped>
.view-wrapper.view-mode-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  grid-auto-rows: min-content;
  align-items: stretch;
  justify-items: stretch;
}

.product-item.grid-item {
  position: relative;
  border-radius: 3px;
}
.product-title.grid-item {
  width: 100%;
  padding: 6px;
  margin: 0;
  position: absolute;
  background: transparent;
  bottom: 0%;
}
.product-title.grid-item h3 {
  margin: 0;
}
.product-item.grid-item img {
  display: block;
  border-radius: 3px;
  width: 100%;
  height: auto;
}
</style>