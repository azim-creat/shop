<template>
  <span :style="{ height, width: computedWidth }" class="SkeletonBox" />
</template>

<script>
export default {
  name: "SkeletonBox",
  props: {
    maxWidth: {
      // The default maxiumum width is 100%.
      default: 70,
      type: Number,
    },
    minWidth: {
      // Lines have a minimum width of 80%.
      default: 50,
      type: Number,
    },
    height: {
      // Make lines the same height as text.
      default: "1em",
      type: String,
    },
    width: {
      // Make it possible to define a fixed
      // width instead of using a random one.
      default: null,
      type: String,
    },
  },
  computed: {
    computedWidth() {
      // Either use the given fixed width or
      // a random width between the given min
      // and max values.
      return (
        this.width ||
        `${Math.floor(
          Math.random() * (this.maxWidth - this.minWidth) + this.minWidth
        )}%`
      );
    },
  },
};
</script>

<style scoped>
.SkeletonBox {
  display: inline-block;
  vertical-align: middle;

  position: relative;
  overflow: hidden;
  border-radius: 5px;
}
.SkeletonBox::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgb(207, 207, 207) 50%, rgba(255,255,255,0) 100%);
  animation: shimmer 5s infinite;
  content: "";
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>