<template>
  <div class="home">
    <h1>{{title}}</h1>
    <Products :render_list="StoreItems"/>
    <SizeCheckerPopup
      :setShow="showModal"
      :currentId="currentId"
      :cproduct="currentProd"
      :class="{active:show_modal}"
    />
  </div>
</template>

<script>
import Products from "./Products";
import SizeCheckerPopup from "@/components/SizeCheckerPopup";
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    Products,
    SizeCheckerPopup,
  },
  data() {
    return {
      title: "Home",
      view_mode: "grid",
      show_modal: false,
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
    currentProd: function () {
      return this.StoreItems[this.currentId];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* режим вида - сетка */
.home {
  position: relative;
}



</style>
