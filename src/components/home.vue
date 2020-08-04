<template>
  <div class="home">
    <h1>{{title}}</h1>
    <div>
      <ViewToggle :setViewMode="setViewMode" :view_mode="view_mode" />
      <div class="view-wrapper" :class="view_mode">
        <div v-for="(data,index) in StoreItems" :key="index">
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
  content: '';
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
  background: rgba(0,0,0,0.1);
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
