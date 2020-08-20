<template>
  <div class="product">
    <div class="product_header">
      <h1 class="product_title">{{ITEM.productTitle}}</h1>
      <h4 class="product_price">{{ITEM.price }} KZT</h4>
      <h4 class="product_price">id {{ITEM.id }}</h4>
    </div>

    <div class="product_images">
      <div class="product_img" :style="`background-image: url(${main_img})`"></div>
      <div class="product_add_images">
        <img @click="openModalImage($event)" class="product_add_img" v-lazy="ITEM.image" />
        <img
          @click="openModalImage($event)"
          class="product_add_img"
          v-for="(product_img, index) in ITEM.product_img"
          :key="index"
          v-lazy="product_img"
        />
      </div>
    </div>

    <div class="product_chose_grid">
      <div class="product_choose noSelect">
        <div class="product_choose_size">
          <div class="sizes" v-show="ITEM.tags">
            <span class="size" :class="{active:(getCurrentSize('s'))}">S</span>
            <span class="size" :class="{active:( getCurrentSize('m'))}">M</span>
            <span class="size" :class="{active:(getCurrentSize('l'))}">L</span>
            <span class="size" :class="{active:(getCurrentSize('xl'))}">XL</span>
          </div>
          <div class="controls noSelect">
            <input
              class="noSelect"
              :class="{'isNotVisible': getQuantity() == '0' }"
              type="button"
              value="-"
              @click="decrease(prodID)"
            />
            <span :class="{'isNotVisible': getQuantity() == '0' }">{{getQuantity()}}</span>
            <input class="noSelect" type="button" value="+" @click="increase(prodID)" />
          </div>
        </div>
      </div>
    </div>

    <div class="product_dis">
      <div class="product_description">
        <h4 style="margin-bottom:16px">ХАРАКТЕРИСТИКИ</h4>
        <ul>
          <li v-for="(descrip, index) in ITEM.description" :key="index">
            <span>{{descrip}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      main_img: "",
    };
  },
  methods: {
    openModalImage(e) {
      this.main_img = e.target.src;
    },

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
      let item_in_cart = this.CartItems[this.ITEM.id];
      if (item_in_cart === undefined) return 0;
      if (typeof item_in_cart === "number") {
        return item_in_cart;
      } else if (typeof item_in_cart === "object") {
        var sum = 0;
        for (var el in item_in_cart) {
          if (item_in_cart.hasOwnProperty(el)) {
            sum += parseFloat(item_in_cart[el]);
          }
        }
        return sum;
      }
    },
    increase(itemId) {
      this.$store.dispatch("INCREASE", itemId);
    },
    decrease(itemId) {
      this.$store.dispatch("DECREASE", itemId);
    },
  },
  mounted() {
    this.main_img = this.ITEM.image;
  },
  computed: {
    ...mapGetters(["CartItems", "StoreItems", "getStoreItemsById"]),
    prodID() {
      return this.$route.params.id;
    },
    ITEM() {
      return this.getStoreItemsById(this.prodID);
    },
  },
};
</script>
    
<style scoped>
.wrapper {
  background: #efefef;
  box-shadow: 1px 1px 10px #999;
  margin: auto;
  text-align: center;
  position: relative;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  margin-bottom: 20px !important;
  width: 800px;
  padding-top: 5px;
}
.scrolls {
  overflow-x: scroll;
  overflow-y: hidden;
  height: 80px;
  white-space: nowrap;
}
.imageDiv img {
  box-shadow: 1px 1px 10px #999;
  margin: 2px;
  max-height: 50px;
  cursor: pointer;
  display: inline-block;
  *display: inline;
  *zoom: 1;
  vertical-align: top;
}

.product {
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "header chose"
    "images  images"
    "dis  dis";
}

.product_header {
  grid-area: header;
}

.product_images {
  grid-area: images;
  overflow: hidden;
}
.product_dis {
  grid-area: dis;
}
.product_chose_grid {
  grid-area: chose;
}

@media (min-width: 600px) {
  .product {
    display: grid;
    column-gap: 20px;
    grid-template-columns: 50% 40%;
    grid-template-rows: 50px 50px;
    grid-template-areas:
      "images  header "
      "images  chose"
      "images  dis";
  }
}

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

.product_img {
  height: 60vw;
  width: calc(100vw - 36px);
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  margin: auto;
  max-width: 100%;
  height: 0;
  padding-top: 100%;
}
.product_add_images {
  margin-top: 16px;
  overflow-x: scroll;
  white-space: nowrap;
}
.product_add_images::-webkit-scrollbar {
  display: block;
}
.product_add_img {
  height: 20vw;
  min-width: 30%;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  margin: 0 10px;
  width: 10vw;
  height: 10vw;
  object-fit: cover;
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