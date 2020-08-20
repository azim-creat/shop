<template>
  <div>
    <div :id="id_par"></div>
    <img v-show="is_show_loader" class="preloder" :src="require('../assets/preloader.svg')" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    id_par: String,
    toTrigger: Function,
    parameters: [String, Number],
  },
  data() {
    return {
      is_show_loader: false,
    };
  },
  methods: {
    //...mapActions(["NEXT_PAGE"]),
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
        if (element.isIntersecting) {
          self.is_show_loader = true;
          self.toTrigger(self.parameters);
          setTimeout(() => {
            self.is_show_loader = false;
          }, 5000);
        } else {
          self.is_show_loader = false;
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