<template>
  <div class="categoryes">
    <h1 class="name_category">Категории</h1>
    <div class="category-item__parent" v-if="parent" @click="backToParent()">
      <span class="category-item__arrow-right__parent_arrow"></span>
      <span class="category-item__title">
        <h3>{{parent.productTitle}}</h3>
        <h5>{{parent.count}} товаров</h5>
      </span>
    </div>

    <div class="category-items">
      <div
        class="category-item"
        v-for="(item,index) in CategoryItems"
        :key="index"
        @click="setParent(item,index)"
      >
        <div class="category-item__img" :style="`background-image: url(.${image})`"></div>
        <span class="category-item__title">
          {{'catID ' + item}}
          <h3>{{item.productTitle}}</h3>
          <h5>{{item.count}} товаров</h5>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "categoryes",
  data() {
    return {
      title: "Home",
      parent: false,
      childs: {},
      path: [],
      products: {
        "01_1": {
          id: "01_1",
          productTitle: "Категория 1",
          count: 1245,
          parent_id: false,
          image: require("../assets/images/product1.png"),
          childs: {
            "01_1_1": {
              id: "01_1_1",
              productTitle: "К1 Категория 1",
              count: 1245,
              image: require("../assets/images/product1.png"),
              parent_id: "01_1",
              childs: {
                "01_1_1_1": {
                  id: "01_1_1_1",
                  productTitle: "К1 К2 Категория 1",
                  count: 1245,
                  image: require("../assets/images/product1.png"),
                  parent_id: "01_1_1",
                  childs: {
                    "01_1_1_1_1": {
                      id: "01_1_1_1_1",
                      productTitle: "К1 К2 К3 Категория 1",
                      count: 1245,
                      image: require("../assets/images/product1.png"),
                      parent_id: "01_1_1_1",
                    },
                    "01_1_1_1_2": {
                      id: "01_1_1_1_1",
                      productTitle: "К1 К2 К3 Категория 1",
                      count: 1245,
                      image: require("../assets/images/product1.png"),
                      parent_id: "01_1_1_1",
                    },
                    "01_1_1_1_3": {
                      id: "01_1_1_1_1",
                      productTitle: "К1 К2 К3 Категория 1",
                      count: 1245,
                      image: require("../assets/images/product1.png"),
                      parent_id: "01_1_1_1",
                    },
                  },
                },
              },
            },
          },
        },
        "01_2": {
          id: 10002,
          productTitle: "Категория 2",
          count: 562,
          parent_id: false,
          image: require("../assets/images/product2.png"),
        },
        "01_3": {
          id: 10003,
          productTitle: "Категория 3",
          count: 896,
          parent_id: false,
          image: require("../assets/images/product3.png"),
        },
      },
      image: require("../assets/images/product1.png"),
    };
  },

  methods: {
    setParent(item, index) {
      this.parent = item;
      this.childs = item.childs;
      if (item.id) {
        this.path.push(item.id);
      }
    },
    backToParent() {
      //   this.childs = this.childs.parent_id;
      let clone = this.products;

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
  },
  computed: mapGetters(["CategoryItems"]),
  mounted() {
    this.childs = this.products;
    console.log("mounted");
  },
};
</script>
    
<style scoped>
.category-item__parent {
  display: flex;
  align-items: center;
  padding-left: 25px;
  margin: 10px;
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
  margin: 10px;
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
  margin-bottom: 5px;
}
.category-item__title h5 {
  margin-top: 5px;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}
</style>