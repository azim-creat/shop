<template>
  <div class="home">
    <h1>{{title}}</h1>
    <div>
      <ViewToggle :setViewMode='setViewMode' :view_mode='view_mode' />
      <div class="view-wrapper" :class="view_mode">
        <div :id="title" v-for="(data,index) in products" :key="index">
          <ProductGrid
            @click="goTodetail(data.productId)"
            :title="data.productTitle"
            :image="data.image"
            v-if=" view_mode === 'grid'"
          />
          <ProductSingle
            @click="goTodetail(data.productId)"
            :title="data.productTitle"
            :image="data.image"
            v-else-if="view_mode === 'single'"
          />
          <ProductList
            @click="goTodetail(data.productId)"
            :title="data.productTitle"
            :image="data.image"
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

export default {
  name: "home",
  components: {
    ProductList,
    ProductGrid,
    ProductSingle,
    ViewToggle
  },
  data() {
    return {
      title: "Home",
      products: [
        {
          productTitle: "ABCN",
          image: require("../assets/images/product1.png"),
          productId: 1
        },
        {
          productTitle: "KARMA",
          image: require("../assets/images/product2.png"),
          productId: 2
        },
        {
          productTitle: "Tino",
          image: require("../assets/images/product3.png"),
          productId: 3
        },
        {
          productTitle: "EFG",
          image: require("../assets/images/product4.png"),
          productId: 4
        },
        {
          productTitle: "MLI",
          image: require("../assets/images/product5.png"),
          productId: 5
        },
        {
          productTitle: "Banans",
          image: require("../assets/images/product6.png"),
          productId: 6
        }
      ],
      view_mode: "grid"
    };
  },
  methods: {
    goTodetail(prodId) {
      let proId = prodId;
      this.$router.push({ name: "details", params: { Pid: proId } });
    },
    setViewMode(new_view_mode) {
      this.view_mode = new_view_mode;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  padding: 5px;
}

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
