<template>
  <div>
    <ViewToggle :setViewMode="setViewMode" :view_mode="view_mode" />
    <div class="view-wrapper" :class="view_mode">
      <div v-for="(data,index) in render_list" :key="index">
        <ProductGrid
          v-if=" view_mode === 'grid'"
          :title="data.full_name"
          :image="image"
          :itemId="data.profile_id"
          :price="data.field_468"
        />
        <ProductSingle
          v-else-if="view_mode === 'single'"
          :itemId="data.profile_id"
          :title="data.full_name"
          :image="image"
          :price="data.field_468"
          :tags="data.tags"
          :quantity="data.quantity"
          :decrease="decreaseItem"
          :increase="increaseItem"
        />
        <ProductList
          v-else
          :title="data.full_name"
          :image="image"
          :itemId="data.profile_id"
          :price="data.field_468"
          :tags="data.tags"
          :quantity="data.quantity"
          :decrease="decreaseItem"
          :increase="increaseItem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ViewToggle from "@/components/ViewToggle";
import ProductList from "@/components/ProductItems/ProductList";
import ProductGrid from "@/components/ProductItems/ProductGrid";
import ProductSingle from "@/components/ProductItems/ProductSingle";

export default {
  name: "Products",
  props: { render_list: Object },
  components: {
    ProductList,
    ProductGrid,
    ProductSingle,
    ViewToggle,
  },
  data() {
    return {
      view_mode: "grid",
      image: require("../assets/images/product1.png"),
    };
  },
  methods: {
    setViewMode(new_view_mode) {
      this.view_mode = new_view_mode;
    },
    decreaseItem(id) {
      this.$store.dispatch("DECREASE", id);
    },
    increaseItem(id) {
      this.$store.dispatch("INCREASE", id);
    },
  },
};
</script> 

<style scoped>
.grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  grid-auto-rows: min-content;
  align-items: stretch;
  justify-items: stretch;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  grid-auto-rows: 1fr;
}

.grid::before {
  content: "";
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.grid > *:first-child {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

/* Just to make the grid visible */

.grid > * {
  background: rgba(0, 0, 0, 0.1);
  border: 1px white solid;
  border-radius: 6px;
  overflow: hidden;
}

/* режим вида - по одному */
.single {
  display: grid;
  gap: 10px;
  /* grid-auto-columns: 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(60vh, 1fr));
  grid-auto-rows: 1fr;
}

.single::before {
  content: "";
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.single > *:first-child {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

/* Just to make the grid visible */

.single > * {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  border: 1px white solid;
}
@media (max-width: 500px) {
  .single {
    grid-template-columns: repeat(auto-fill, minmax(60vw, 1fr));
  }
}

/* режим вида - по одному */
.list {
  display: grid;
  gap: 10px;
  /* grid-auto-columns: 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(60vh, 1fr));
  grid-auto-rows: 1fr;
}

@media (max-width: 500px) {
  .list {
    grid-template-columns: repeat(auto-fill, minmax(60vw, 1fr));
  }
}

.list > *:first-child {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

/* Just to make the grid visible */

.list > * {
  background: #fff;
  border-radius: 12px;
  border: 1px white solid;
}
</style>