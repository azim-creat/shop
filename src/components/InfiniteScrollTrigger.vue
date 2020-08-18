<template>
  <img id="scroll-observer" class="preloder" :src="require('../assets/preloader.svg')" />
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["NEXT_PAGE"]),
    debounce(func, wait, immediate) {
      let timeout;

      return function executedFunction() {
        const context = this;
        const args = arguments;

        const later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },
  },
  mounted() {
    self = this;
    const next = this.debounce(this.NEXT_PAGE, 5000);

    const options = {
      rootMargin: "10px",
      threshold: 0,
    };

    const callbackObserver = function (entries, observer) {
      console.log("[ENTRIES]", entries);
      entries.forEach((element) => {
        self.NEXT_PAGE();
      });
    };

    let scrollObserver = new IntersectionObserver(callbackObserver, options);
    scrollObserver.observe(document.getElementById("scroll-observer"));
  },
};
</script>

<style>
.preloder {
  width: 60%;
  text-align: center;
  display: block;
  margin: 0 auto;
}
</style>