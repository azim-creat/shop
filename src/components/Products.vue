<template>
  <div class="products-container ios-fix">
    <ViewToggle v-if="render_list.length !== 0" :setViewMode="setViewMode" :view_mode="view_mode" />

    <div class="view-wrapper ios-fix" :class="view_mode" v-if="render_list.length !== 0">
      <div v-for="(data) in render_list" :key="data.id">
        <ProductGrid
          v-if=" view_mode === 'grid'"
          :title="data.productTitle"
          :image="data.image"
          :itemId="data.id"
          :price="data.price"
        />
        <ProductSingle
          v-else-if="view_mode === 'single'"
          :itemId="data.id"
          :title="data.productTitle"
          :image="data.image"
          :price="data.price"
          :articul="data.articul"
          :tags="data.tags"
          :quantity="data.quantity"
          :decrease="decreaseItem"
          :increase="increaseItem"
        />

        <ProductList
          v-else
          :title="data.productTitle"
          :image="data.image"
          :itemId="data.id"
          :price="data.price"
          :articul="data.articul"
          :tags="data.tags"
          :quantity="data.quantity"
          :decrease="decreaseItem"
          :increase="increaseItem"
        />
      </div>
    </div>

    <div class="view-wrapper" :class="view_mode" v-if="showSkeletons &&render_list.length == 0">
      <div v-for="n in 30" :key="n">
        <ListSkeleton v-if="view_mode === 'list' &&render_list.length == 0" />
        <GridSkeleton v-else-if="view_mode === 'grid' && render_list.length == 0" />
        <SingleSkeleton v-else-if="view_mode === 'single' && render_list.length == 0" />
      </div>
    </div>
  </div>
</template>

<script>
import ViewToggle from "@/components/ViewToggle";
import ProductList from "@/components/ProductItems/ProductList";
import ProductGrid from "@/components/ProductItems/ProductGrid";
import ProductSingle from "@/components/ProductItems/ProductSingle";
import ListSkeleton from "@/components/Skeletons/ListSkeleton";
import GridSkeleton from "@/components/Skeletons/GridSkeleton";
import SingleSkeleton from "@/components/Skeletons/SingleSkeleton";

export default {
  name: "Products",
  props: {
    render_list: Array,
    showSkeletons: { type: Boolean, default: true },
  },
  components: {
    ProductList,
    ProductGrid,
    ProductSingle,
    ViewToggle,
    ListSkeleton,
    SingleSkeleton,
  },
  data() {
    return {
      view_mode: "list",
      preloader_show: true,
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
  watch: {},
  beforeMount() {},
  mounted() {
    const self = this;
  },
};
</script> 

<style scoped>
.products-container {
  width: 100%;
  min-height: 100%;
}

.list_ {
  border: 2px solid steelblue;
  border-radius: 3px;
}

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
@media (min-height: 900px) {
  .list {
    grid-template-columns: repeat(auto-fill, minmax(49vh, 1fr));
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
*.view-wrapper {
  padding-bottom: 57px;
}
.ios_fix {
  -webkit-overflow-scrolling: auto !important;
}
</style>











