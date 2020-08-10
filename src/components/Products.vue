<template>
  <div>
    <ViewToggle
      v-if="Object.keys(render_list).length !== 0"
      :setViewMode="setViewMode"
      :view_mode="view_mode"
    />
    <div class="view-wrapper" :class="view_mode">
      <div v-for="(data,index) in to_render" :key="index">
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
          :tags="data.tags"
          :quantity="data.quantity"
          :decrease="decreaseItem"
          :increase="increaseItem"
        />
      </div>
    </div>
    <div id="observer_bottom"></div>
    <img v-if="preloader_show" class="preloder" :src="require('../assets/preloader.svg')" alt />
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
      view_mode: "list",
      to_render: [],
      chashed_items: [],
      last_index: 0,
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
    addItems() {
      if (this.chashed_items[this.last_index] === undefined){
        if(this.last_index > 0) this.preloader_show = false
        return;
      } 
      this.to_render = this.to_render.concat(
        this.chashed_items[this.last_index]
      );
      debugger;
      this.last_index++;
    },
    segmentation(val) {
      let obj_keys = Object.keys(val);
      let segmented = [];
      let one_segment = [];
      for (let index = 0; index < obj_keys.length; index++) {
        if (index && index % 50 === 0) {
          segmented.push(one_segment);
          one_segment = [];
        }
        const obj_key = obj_keys[index];
        one_segment.push(val[obj_key]);
        if (index === obj_keys.length - 1) {
          segmented.push(one_segment);
        }
      }
      this.chashed_items = segmented;
      this.addItems();
    },
  },
  watch: {
    render_list(val) {
      debugger
      this.to_render = []
      this.chashed_items = []
      this.last_index =  0

      this.segmentation(val);
    },
  },
  beforeMount() {},
  mounted() {
    const self = this;
    setTimeout(() => {
      self.segmentation(self.render_list);
    }, 100);

    const options = {
      rootMargin: "10px",
      threshold: 0,
    };

    const callbackObserver = function (entries, observer) {
      entries.forEach((element) => {
        if (element.isIntersecting) {
          self.addItems();
        }
      });
    };

    let observerBottom = new IntersectionObserver(callbackObserver, options);

    observerBottom.observe(document.getElementById("observer_bottom"));
  },
};
</script> 

<style scoped>
.preloder {
  width: 60%;
  text-align: center;
  display: block;
  margin: 0 auto;
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
</style>











