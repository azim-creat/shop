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
            :increase="increaseQuantity"
            :decrease="decreaseQuantity"
            v-if=" view_mode === 'grid'"
          />
          <ProductSingle
            :title="data.productTitle"
            :image="data.image"
            :itemId="data.id"
            :price="data.price"
            :size="data.size"
            :quantity="data.quantity"
            :increase="increaseQuantity"
            :decrease="decreaseQuantity"
            v-else-if="view_mode === 'single'"
          />
          <ProductList
            :title="data.productTitle"
            :image="data.image"
            :itemId="data.id"
            :price="data.price"
            :size="data.size"
            :quantity="data.quantity"
            :increase="increaseQuantity"
            :decrease="decreaseQuantity"
            v-else
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/ProductItems/ProductList";
import ProductGrid from "@/components/ProductItems/ProductGrid";
import ProductSingle from "@/components/ProductItems/ProductSingle";
import ViewToggle from "@/components/ViewToggle";
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    ProductList,
    ProductGrid,
    ProductSingle,
    ViewToggle,
  },
  data() {
    return {
      title: "Home",
      view_mode: "grid",
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
      this.$store.dispatch("INCREASE_ITEM_QUANTITY", itemId);
    },
    decreaseQuantity(itemId) {
      this.$store.dispatch("DECREASE_ITEM_QUANTITY", itemId);
    },
  },
  computed: mapGetters(["StoreItems"]),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* режим вида - сетка */
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
