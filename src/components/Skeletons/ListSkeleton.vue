<template>
  <div class="container">
    <!-- картинка -->
    <Skeleton class="image" :height="'100px'" :width="'100px'" />
    <div class="description">
      <Skeleton :max-width="70" />
      <Skeleton :max-width="60" />
    </div>
    <Skeleton class="button" :width="'30px'" :height="'30px'" />
  </div>
</template>

<script>
import Skeleton from "./Skeleton";
export default {
  name: "ListSkeleton",
  components: {
    Skeleton,
  },
};
</script>

<style scoped>
.container {
  max-height: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 12px;
  padding-right: 10px;
}
.image {
  border-radius: 12px !important;
}
.button {
  border-radius: 26px !important;
}
.description {
  height: 100%;
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: center;
}
.description > .SkeletonBox {
  margin: 5px;
}
</style>