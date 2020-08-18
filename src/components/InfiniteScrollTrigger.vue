<template>
  <div id="scroll-observer"></div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(['NEXT_PAGE']),
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
    const next = this.debounce(this.NEXT_PAGE, 1000);

    const options = {
      rootMargin: "10px",
      threshold: 0,
    };

    const callbackObserver = function (entries, observer) {
      console.log("[ENTRIES]", entries);
      entries.forEach((element) => {
        next();
      });
    };

    let scrollObserver = new IntersectionObserver(callbackObserver, options);
    scrollObserver.observe(document.getElementById("scroll-observer"));
  },
};
</script>

<style>
#scroll-observer {
  background-color: red;
  height: 150px;
  width: 10px;
}
</style>