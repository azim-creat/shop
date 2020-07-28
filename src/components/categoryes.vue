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

    <div
      class="category-item"
      v-for="(item,index) in childs"
      :key="index"
      @click="setParent(item,index)"
    >
      <div class="category-item__img" :style="`background-image: url(.${item.image})`"></div>
      <span class="category-item__title">
        <h3>{{item.productTitle}}</h3>
        <h5>{{item.count}} товаров</h5>
      </span>
      <span class="category-item__arrow-right parent_arrow"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "categoryes",
  data() {
    return {
      title: "Home",
      parent: false,
      childs: {},
      products: [
        {
          productTitle: "Серьги",
          count: 1245,
          image: require("../assets/images/product1.png"),
          productId: 1,
          childs: [
            {
              productTitle: "Серьга 1",
              count: 124,
              image: require("../assets/images/product1.png"),
              productId: 4,
              childs: [
                {
                  productTitle: "Серьга 2",
                  count: 12,
                  image: require("../assets/images/product1.png"),
                  productId: 6
                }
              ]
            }
          ]
        },
        {
          productTitle: "Кольца",
          count: 562,
          image: require("../assets/images/product2.png"),
          productId: 2
        },
        {
          productTitle: "Брaслеты",
          count: 896,
          image: require("../assets/images/product3.png"),
          productId: 3
        }
      ]
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
      let clone = {}

    //   for (let index = 0; index < this.path.length; index++) {

    //       clone
          
    //   }
    function index(obj,is, value) {
        if (typeof is == 'string')
            return index(obj,is.split('.'), value);
        else if (is.length==1 && value!==undefined)
            return obj[is[0]] = value;
        else if (is.length==0)
            return obj;
        else
            return index(obj[is[0]],is.slice(1), value);
    }


    console.log(index(this.products,this.path ))


    },
  },
  mounted() {
    this.childs = this.products;
    console.log("mounted");
  },
};
</script>
    
<style scoped>
.category-item__parent {
  display: flex;
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
  margin-top: 10%;
  margin-left: 5%;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  transform: rotate(-45deg);
  text-align: right;
}
.category-item {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  background: #000000;
  border-radius: 12px;
  overflow: hidden;
  height: 100px;
  color: #ffffff;
}
.category-item__img {
  height: 100%;
  width: 150px;
  background-size: cover;
  background-position: center;
}

.name_category {
  margin-top: 70px;
  margin-left: 20px;
  font-family: "Comfortaa", cursive;
}
.category-item__title {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-size: 18px;
  line-height: 21px;
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
.category-item__arrow-right {
  display: block;
  width: 20px;
  height: 20px;
  margin-top: 10%;
  margin-right: 5%;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  transform: rotate(135deg);
  text-align: right;
}
</style>