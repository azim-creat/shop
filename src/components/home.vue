<template>
  <div class="home">
    <h1 class="name_category">{{title}}</h1>

    <Products :render_list="StoreItems" />
    <InfiniteScrollTrigger class="infiniteScroll" />
  </div>
</template>

<script>
import Products from "./Products";
import InfiniteScrollTrigger from "./InfiniteScrollTrigger";
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    Products,
    InfiniteScrollTrigger,
  },
  data() {
    return {
      title: "Home",
      view_mode: "grid",
      show_modal: true,
      currentId: 4,
    };
  },
  methods: {
    setViewMode(new_view_mode) {
      this.view_mode = new_view_mode;
    },
    addItem(item) {
      this.$store.dispatch("ADD_CART_ITEM", item);
    },
    removeItem(item) {
      this.$store.dispatch("DELETE_CART_ITEM", item);
    },
    setCurrentId(itemId) {
      this.currentId = itemId;
      this.showModal();
    },
    showModal() {
      this.show_modal = !this.show_modal;
    },
  },
  computed: {
    ...mapGetters(["StoreItems"]),
  },
};
</script>

<style scoped>
.home {
  position: relative;
}

.infiniteScroll {
  position: absolute;
  bottom: -200px;
}
</style>