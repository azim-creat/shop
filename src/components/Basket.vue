<template>
  <div :class="[isEmpty() ? wrapper  : Cart ]">
    <div class="empty" v-if="isEmpty()">
      <img :src="require('../assets/cart_empty.svg')" />
      <button @click="goToHome">перейти в магазин</button>
    </div>

    <Products :render_list="renderCartsItemList" v-else :style="{paddingBottom: this.height+'px'}" />
    <div class="CartControls" v-show="!isEmpty()" ref="CartControls">
      <div class="CartFlexContainer">
        <div>
          <p>количество:</p>
          <span>{{CART_ITEM_COUNT}} единиц</span>
        </div>
        <div>
          <p>сумма:</p>
          <span>{{TOTAL}} KZT</span>
        </div>
      </div>
      <button @click="goToCheckout()">Заказать</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Products from "./Products";

import ProductList from "@/components/ProductItems/ProductList";

export default {
  name: "Basket",
  components: {
    Products,
  },
  data() {
    return {
      isEmpty: function () {
        return this.renderCartsItemList.length == 0 ? true : false;
      },

      Cart: "Cart",
      wrapper: "wrapper",

      height: 0,
    };
  },
  methods: {
    goToCheckout() {
      let ans = [];
      for (const key in this.CartItems) {
        if (this.CartItems.hasOwnProperty(key)) {
          const element = this.getStoreItemsById(key);
          ans.push(element);
        }
      }
      if (ans.length == 0) {
        alert("Ваша корзина пуста");
        return;
      } else {
        this.$router.push("checkout");
      }
    },
    goToHome() {
      this.$router.push("/");
    },
    addItem(item) {
      this.$store.dispatch("ADD_CART_ITEM", item);
    },
    removeItem(item) {
      this.$store.dispatch("DELETE_CART_ITEM", item);
    },
    decreaseItem(id) {
      this.$store.dispatch("DECREASE", id);
    },
    increaseItem(id) {
      this.$store.dispatch("INCREASE", id);
    },
    getHeight() {
      return this.$refs.CartControls.clientHeight;
    },
  },
  computed: {
    ...mapGetters([
      "CartItems",
      "Total",
      "TotalPrice",
      "StoreItems",
      "getStoreItemsById",
      "getCatsCachedItem",
      "getSearchCachedItem",
    ]),
    TOTAL() {
      const cart = this.$store.state.cartItems;
      let ans = 0;
      const calcCountTypes = (obj) => {
        var sum = 0;

        for (var el in obj) {
          if (obj.hasOwnProperty(el)) {
            sum += parseFloat(obj[el]);
          }
          return sum;
        }
      };

      for (const key in cart) {
        if (cart.hasOwnProperty(key)) {
          const element = cart[key];
          let item_cost = this.getStoreItemsById(key);
          if (item_cost == undefined) {
            item_cost = this.getCatsCachedItem(key);
            if (item_cost == undefined) {
              item_cost = this.getSearchCachedItem(key);
            }
          }
          item_cost = item_cost.price;
          if (typeof element === "number") {
            ans += element * item_cost;
          } else if (typeof element === "object") {
            ans += calcCountTypes(element) * item_cost;
          }
        }
      }

      return ans;
    },

    CART_ITEM_COUNT() {
      const cart = this.$store.state.cartItems;
      let ans = 0;
      const calcCountTypes = (obj) => {
        var sum = 0;

        for (var el in obj) {
          if (obj.hasOwnProperty(el)) {
            sum += parseFloat(obj[el]);
          }
          return sum;
        }
      };

      for (const key in cart) {
        if (cart.hasOwnProperty(key)) {
          const element = cart[key];
          if (typeof element === "number") {
            ans += element;
          } else if (typeof element === "object") {
            ans += calcCountTypes(element);
          }
        }
      }

      return ans;
    },
    renderCartsItemList() {
      let ans = [];
      for (const key in this.CartItems) {
        if (this.CartItems.hasOwnProperty(key)) {
          let element = this.getStoreItemsById(key);
          if (element == undefined) {
            element = this.getCatsCachedItem(key);
            if (element == undefined) {
              element = this.getSearchCachedItem(key);
            }
          }
          ans.push(element);
        }
      }
      return ans;
    },
  },
  mounted() {
    this.height = this.getHeight();
  },
};
</script>

<style scoped>
.wrapper {
  display: grid;
  height: 100%;
  width: 100%;
  place-items: center center;
}
.Cart {
  min-height: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  padding-bottom: 150px;
}
.Cart > div:first-child:not(.empty) {
  overflow: scroll;
  max-height: calc(100% - 136px);
}
.CartControls {
  margin: 10px 10px 0px 10px;
  width: calc(100% - 20px);
  border-top: 2px solid #b3b3b3;
  background: #fff;
  position: fixed;
  bottom: 65px;
  left: 0;
}

.CartFlexContainer {
  display: flex;
  justify-content: space-between;
  max-width: 550px;
  margin: auto;
}
.empty {
  display: grid;
  grid-template-rows: 1fr min-content;
  width: 100%;
  place-items: center center;
}
.empty > button {
  margin: 0;
}
.empty > img {
  height: 100%;
  width: auto;
}

@media (max-width: 600px) {
  .empty > img {
    height: auto;
    width: 100%;
  }
  .empty > button {
    position: fixed;
    bottom: 90px;
    width: calc(100% - 20px);
  }
}

@media only screen and (min-width: 600px) {
  .CartControls {
    bottom: 0px;
  }
}

ul {
  list-style: none;
  padding: 0;
}
p {
  margin: 0;
}
span {
  font-weight: bold;
}
button {
  cursor: pointer;
  width: 100%;
  background: #000000;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 6px;
  color: white;
  padding: 19px 0;
  margin: 22px 0;
  text-transform: uppercase;
  font-weight: bold;
}
</style>