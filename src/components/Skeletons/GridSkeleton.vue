<template>
  <div class="container">
    <!-- картинка -->
    <Skeleton :height="'100%'" :width="'100%'" />
    <div class="product-title">
      <Skeleton />
    </div>
  </div>
</template>

<script>
import Skeleton from "./Skeleton";
export default {
  name: "GridSkeleton",
  components: {
    Skeleton,
  },
};
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  /* background-color: blue; */
}
.product-title {
  width: 100%;
  margin: 0;
  padding: 10px;
  position: absolute;
  background: transparent;
  bottom: 0;
  backdrop-filter: blur(10px);
  border-radius: 6px;
}
</style>