<template>
  <div class="home">
    <h1>{{title}}</h1>
    <div>
      <!-- TODO: подключать иконки как компоненты -->
      <div class="view-toggle">
        <div
          class="view-toggle-item"
          @click="view_mode='grid'"
          :class="{ active:( view_mode === 'grid') }"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="3.94737" height="3.94737" fill="white" />
            <rect y="5.52637" width="3.94737" height="3.94737" fill="white" />
            <rect y="11.0527" width="3.94737" height="3.94737" fill="white" />
            <rect x="5.52637" width="3.94737" height="3.94737" fill="white" />
            <rect x="5.52637" y="5.52637" width="3.94737" height="3.94737" fill="white" />
            <rect x="5.52637" y="11.0527" width="3.94737" height="3.94737" fill="white" />
            <rect x="11.0527" width="3.94737" height="3.94737" fill="white" />
            <rect x="11.0527" y="5.52637" width="3.94737" height="3.94737" fill="white" />
            <rect x="11.0527" y="11.0527" width="3.94737" height="3.94737" fill="white" />
          </svg>
        </div>
        <div
          class="view-toggle-item"
          @click="view_mode='single'"
          :class="{ active:( view_mode === 'single') }"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.85" y="0.85" width="15.3" height="15.3" stroke="black" stroke-width="1.7" />
          </svg>
        </div>
        <div
          class="view-toggle-item"
          @click="view_mode='list'"
          :class="{ active:( view_mode === 'list')}"
        >
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.631592" width="3.94737" height="3.94737" rx="1.57895" fill="black" />
            <rect
              x="0.631592"
              y="5.52637"
              width="3.94737"
              height="3.94737"
              rx="1.57895"
              fill="black"
            />
            <rect
              x="0.631592"
              y="11.0527"
              width="3.94737"
              height="3.94737"
              rx="1.57895"
              fill="black"
            />
            <rect
              x="6.15796"
              y="0.789551"
              width="14.2105"
              height="2.36842"
              rx="0.789474"
              fill="black"
            />
            <rect
              x="6.15796"
              y="6.31592"
              width="14.2105"
              height="2.36842"
              rx="0.789474"
              fill="black"
            />
            <rect
              x="6.15796"
              y="11.8423"
              width="14.2105"
              height="2.36842"
              rx="0.789474"
              fill="black"
            />
          </svg>
        </div>
      </div>

      <div class="view-wrapper single" :class="view_mode">
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
export default {
  name: "home",
  components: {
    ProductList,
    ProductGrid,
    ProductSingle
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  padding: 5px;
}

/* переключатель вида */
.view-toggle {
  margin: 14px auto;
  border: 2px black solid;
  border-radius: 5px;
  display: flex;
}

/* иконка переключателя*/
.view-toggle-item {
  width: 33.3%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
}
.view-toggle-item * {
  color: black;
  fill: black;
}
.view-toggle-item.active * {
  color: white;
  fill: white;
}
.view-toggle-item.active {
  background-color: black;
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
