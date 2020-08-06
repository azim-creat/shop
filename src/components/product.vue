<template>
  <div class="product">
    <h1 class="product_title">{{StoreItems[prodID].productTitle}}</h1>
    <h4 class="product_price">{{StoreItems[prodID].price }} $</h4>
    <div class="product_img" :style="`background-image: url(${StoreItems[prodID].image})`"></div>
    <div class="product_add_images">
      <div
        class="product_add_img"
        v-for="(product_img, index) in StoreItems[prodID].product_img"
        :key="index"
        :style="`background-image: url(.${product_img})`"
      ></div>
    </div>
    <div class="product_choose">
      <div class="product_choose_size">
        <div class="sizes" v-show="StoreItems[prodID].tags">
          <span @click="SET_SIZE('s')" class="size" :class="{active:(getCurrentSize('s'))}">S</span>
          <span @click="SET_SIZE('m')" class="size" :class="{active:( getCurrentSize('m'))}">M</span>
          <span @click="SET_SIZE('l')" class="size" :class="{active:(getCurrentSize('l'))}">L</span>
          <span @click="SET_SIZE('xl')" class="size" :class="{active:(getCurrentSize('xl'))}">XL</span>
        </div>
        <div class="controls">
          <input type="button" value="-" @click="decrease(prodID)" />
          <span>{{getQuantity()}}</span>
          <input type="button" value="+" @click="increase(prodID)" />
        </div>
      </div>
    </div>
    <div class="product_description">
      <h4 style="margin-bottom:16px">ХАРАКТЕРИСТИКИ</h4>
      <ul>
        <li v-for="(descrip, index) in StoreItems[prodID].description" :key="index">
          <span>{{descrip}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    setParent(item, index) {
      this.parent = item;
      this.childs = item.childs;
    },
    backToParent(item, index) {},
    SET_SIZE(size) {
      const id = this.prodID;
      this.$store.dispatch("SET_SIZE", { id, size });
    },
    getCurrentSize(sizeToCheck) {
      if (this.CartItems[this.prodID]) {
        return this.CartItems[this.prodID].size == sizeToCheck;
      }
    },
    getQuantity() {
      if (this.CartItems[this.prodID]) {
        return this.CartItems[this.prodID].quantity;
      } else {
        return 0;
      }
    },
    increase(itemId) {
      this.$store.dispatch("INCREASE_ITEM_QUANTITY", itemId);
    },
    decrease(itemId) {
      this.$store.dispatch("DECREASE_ITEM_QUANTITY", itemId);
    },
  },
  mounted() {},
  computed: {
    ...mapGetters(["CartItems", "StoreItems"]),
    prodID() {
      return this.$route.params.id;
    },
  },
};
</script>
    
<style scoped>
.product_title {
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: bold;
}
.product_price {
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
}
.product {
  height: 100%;
  /* width: 100%; */
  margin: 10px auto;
}
.product_img {
  height: 60vw;
  width: calc(100vw - 36px);
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  margin: auto;
}
.product_add_images {
  margin: auto;
  margin-top: 16px;
  height: 20vw;
  width: calc(100vw - 36px);
  display: flex;
  overflow-x: scroll;
  justify-content: space-between;
}
.product_add_img {
  height: 20vw;
  min-width: 30%;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  margin: 0 10px;
}
.product_choose_size {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "sizes controls";
  align-items: center;
  width: 100%;
}
.product_choose_size__items {
  width: auto;
  display: flex;
  justify-content: space-between;
}
.product_choose_item__count {
  width: auto;
  display: flex;
  justify-content: space-between;
}
.product_choose_size__item {
  padding: 5px;
  border: 1px solid #000000;
  border-radius: 4px;
}
.product_choose_item_count__minus {
  width: 5vw;
  text-align: center;
  padding: 5px;
  border-radius: 30px;
  background-color: #dadada;
}
.product_choose_item_count__plus {
  width: 5vw;
  text-align: center;
  padding: 5px;
  border-radius: 30px;
  background: linear-gradient(246.58deg, #ff0099 -162.71%, #ff4d00 163.83%);
}
.product_description li {
  color: #ff4d00;
}
.product_description span {
  color: black;
}
.sizes {
  grid-area: sizes;
}
.size {
  display: inline-block;
  border: 1px black solid;
  margin: 0 5px;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 10px;
}
.size.active {
  background-color: black;
  color: white;
  border: 1px black solid;
}
input {
  height: 30px;
  width: 30px;
  border-radius: 26px;
  border: none;
}
input[value="-"] {
  background-color: #dadada;
  color: black;
}
input[value="+"] {
  background: linear-gradient(246.58deg, #ff0099 -162.71%, #ff4d00 163.83%);
  color: white;
}
.controls {
  grid-area: controls;
  justify-self: flex-end;
}
.controls > * {
  margin: 0 3px;
}
.controls span {
  font-size: 12px;
}
</style>