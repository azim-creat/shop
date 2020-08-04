<template>
  <div class="home">
    <h1>{{title}}</h1>
    <div>
      <ViewToggle :setViewMode="setViewMode" :view_mode="view_mode" />
      <div class="view-wrapper" :class="view_mode">
        <div :id="title" v-for="(data,index) in StoreItems" :key="index">
          <ProductGrid
            :title="data.productTitle"
            :image="data.image"
            :itemId="data.id"
            :price="data.price"
            :increase="showModal"
            :decrease="showModal"
            v-if=" view_mode === 'grid'"
          />
          <ProductSingle
            :title="data.productTitle"
            :image="data.image"
            :itemId="data.id"
            :price="data.price"
            :size="data.size"
            :quantity="data.quantity"
            :increase="setCurrentId"
            :decrease="setCurrentId"
            v-else-if="view_mode === 'single'"
          />
          <ProductList
            :title="data.productTitle"
            :image="data.image"
            :itemId="data.id"
            :price="data.price"
            :size="data.size"
            :quantity="data.quantity"
            :increase="setCurrentId"
            :decrease="setCurrentId"
            v-else
          />
        </div>
      </div>
    </div>
    <SizeCheckerPopup
      :setShow="showModal"
      :currentId="currentId"
      :cproduct="currentProd"
      :class="{active:show_modal}"
    />
  </div>
</template>

<script>
import ProductList from "@/components/ProductItems/ProductList";
import ProductGrid from "@/components/ProductItems/ProductGrid";
import ProductSingle from "@/components/ProductItems/ProductSingle";
import ViewToggle from "@/components/ViewToggle";
import SizeCheckerPopup from "@/components/SizeCheckerPopup";
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    ProductList,
    ProductGrid,
    ProductSingle,
    ViewToggle,
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
    increaseQuantity(itemId) {
      this.currentId = itemId;
      this.show_modal = true;
      this.$store.dispatch("INCREASE_ITEM_QUANTITY", itemId);
    },
    decreaseQuantity(itemId) {
      this.currentId = itemId;
      this.show_modal = true;
      this.$store.dispatch("DECREASE_ITEM_QUANTITY", itemId);
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
.grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  grid-auto-rows: min-content;
  align-items: stretch;
  justify-items: stretch;
}

/* режим вида - по одному */
.single {
  display: grid;
  gap: 10px;
  grid-auto-columns: 1fr;
}
</style>
