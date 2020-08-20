<template>
  <img :id="id_par" class="preloder" :src="require('../assets/preloader.svg')" />
</template>

<script>
import { mapActions } from "vuex";
export default {
  props:{
    id_par: String
  },

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
          debugger

      entries.forEach((element) => {
        if(element.isIntersecting){
          debugger
          self.NEXT_PAGE();
        }

      });
    };

    let scrollObserver = new IntersectionObserver(callbackObserver, options);
    scrollObserver.observe(document.getElementById(this.id_par));
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