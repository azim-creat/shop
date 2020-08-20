<template>
  <div class="categoryes">
    <h1 class="name_category">Категории</h1>
    <div class="category-item__parent" v-if="parent" @click="backToParent()">
      <span class="category-item__arrow-right__parent_arrow"></span>
      <span class="category-item__title">
        <h3>{{parent.full_name}} </h3>
        <!-- <h5>{{parent.count}} товаров</h5> -->
      </span>
    </div>
    <div class="category-items" v-if="parent == false">
      <div
        class="category-item"
        v-for="(item,index) in getCategoryNames"
        :key="index"
        @click="setParent(item,index)"
      >
        <div class="category-item__img" :style="`background-image: url(.${image})`"></div>
        <span class="category-item__title">
          <h3>{{item.full_name}}</h3>
          <!-- <h5>{{item.count}} товаров</h5> -->
        </span>
      </div>
    </div>
    <span v-if="getCategoryItems[0]=='empty'"><h4>товаров не найдено</h4></span>

    <Products v-if="parent  && getCategoryItems[0]!=='empty'" :render_list="getCategoryItems" />
    <InfiniteScrollTrigger id_par="observer_cat_page" :toTrigger="CATEGORIES_NEXT_PAGE" :parameters="this.parent.id" />
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Products from "@/components/Products";
import InfiniteScrollTrigger from "@/components/InfiniteScrollTrigger";
export default {
  name: "categoryes",
  components: {
    Products,
    InfiniteScrollTrigger,
  },

  data() {
    return {
      title: "Home",
      parent: false,
      childs: {},
      renderElements: {},
      path: [],
      image: require("../assets/images/product1.jpg"),
    };
  },

  methods: {
    ...mapActions(["FETCH_ITEMS_BY_CAT", "CATEGORIES_NEXT_PAGE"]),
    ...mapMutations(["CLEAR_CATEGORIES_ITEMS"]),
    setParent(item, index) {
      this.parent = item;
      this.childs = item.childs;
      if (item.id) {
        this.path.push(item.id);
      }
      if (item.parent_id == false) {
        this.collectCategoryItems(item.id);
      }
    },
    backToParent() {
      //   this.childs = this.childs.parent_id;
      this.CLEAR_CATEGORIES_ITEMS();
      let clone = this.products;
      this.renderElements = {};

      if (this.path.length === 1) {
        this.path = [];
        this.parent = false;
        this.childs = clone;
      } else {
        for (let index = 0; index < this.path.length; index++) {
          if (index === 0) {
            clone = clone[this.path[index]];
          } else if (this.path.length - 1 === index) {
            continue;
          } else {
            clone = clone.childs[this.path[index]];
          }
        }

        this.path.pop();
        this.parent = clone;
        this.childs = clone.childs;
      }
    },
    collectProductsByCatId() {
      const cItem = this.$store.state.categoryItems;
      const sItem = this.$store.state.storeItems;

      const accum = {};
      for (const catItem in cItem) {
        if (cItem.hasOwnProperty(catItem)) {
          for (const cartItem in sItem) {
            if (sItem.hasOwnProperty(cartItem)) {
              if (console.log(sItem[cartItem].categoryCode)) {
              }
            }
          }
        }
      }
    },
    collectCategoryItems(id) {
      this.FETCH_ITEMS_BY_CAT(id);
    },
  },

  computed: {
    ...mapGetters(["getCategoryNames", "getCategoryItems", "StoreItems"]),
  },
  mounted() {
    this.childs = this.products;
    console.log("mounted");
  },
  destroyed() {
    this.CLEAR_CATEGORIES_ITEMS();
  },
};
</script>
    
<style scoped>
.category-item__parent {
  display: flex;
  align-items: center;
  padding-left: 25px;
  /* margin: 10px; */
  background: #000000;
  border-radius: 12px;
  overflow: hidden;
  height: 100px;
  color: #ffffff;
}
.category-item__arrow-right__parent_arrow {
  display: block;
  width: 20px;
  height: 20px;

  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  transform: rotate(-45deg);
  text-align: right;
}

.category-items {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
}

.category-items > *:first-child {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.category-items > * {
  background: #fff;
  border-radius: 12px;
  border: 1px white solid;
}

.category-item {
  display: flex;
  flex: 1;
  margin: 0;
  background: #000000;
  border-radius: 12px;
  overflow: hidden;
  height: 100px;
  color: #ffffff;
  align-items: center;
  padding-right: 25px;
}
.category-item__img {
  height: 100%;
  width: 150px;
  background-size: cover;
  background-position: center;
}

.category-item__title {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-size: 18px;
  line-height: 21px;
  justify-content: center;
}
.category-item__title h3 {
  /* margin-bottom: 5px; */
}
.category-item__title h5 {
  margin-top: 5px;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}
</style>