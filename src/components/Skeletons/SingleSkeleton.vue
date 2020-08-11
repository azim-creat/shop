<template>
  <div class="container">
    <!-- картинка -->
    <Skeleton :height="'100%'" :width="'100%'" />
    <div class="product-title">
      <Skeleton />
      <Skeleton class="button" :width="'30px'" :height="'30px'" />
    </div>
  </div>
</template>

<script>
import Skeleton from "./Skeleton";
export default {
  name: "SingleSkeleton",
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  backdrop-filter: blur(10px);
  border-radius: 6px;
}
.button {
  border-radius: 26px !important;
}
</style>