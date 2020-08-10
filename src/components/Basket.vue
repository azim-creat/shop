<template>
  <div :class="[isEmpty() ? wrapper  : Cart ]">
    <div class="empty" v-if="isEmpty()">
      <img :src="require('../assets/cart_empty.svg')" alt />
      <button @click="goToHome">перейти в магазин</button>
    </div>

    <Products :render_list="renderCartsItemList" v-else />
    <div class="CartControls" v-show="!isEmpty()">
      <div class="CartFlexContainer">
        <div>
          <p>количество:</p>
          <span>{{CART_ITEM_COUNT}} единиц</span>
        </div>
        <div>
          <p>сумма:</p>
          <span>{{TOTAL}}</span>
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
        return Object.keys(this.renderCartsItemList).length == 0 ? true : false;
      },
      Cart: "Cart",
      wrapper: "wrapper",
    };
  },
  methods: {
    goToCheckout() {
      let ans = {};
      for (const key in this.CartItems) {
        if (this.CartItems.hasOwnProperty(key)) {
          const element = this.StoreItems[key];
          ans[key] = element;
        }
      }
      if (Object.keys(ans).length == 0) {
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
  },
  computed: {
    ...mapGetters([
      "CartItems",
      "Total",
      "TotalPrice",
      "StoreItems",
      "getStoreItemsById",
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
          const item_cost = this.$store.state.storeItems[key].price;
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
    // mergedItems: ,
    renderCartsItemList() {
      let ans = {};
      for (const key in this.CartItems) {
        if (this.CartItems.hasOwnProperty(key)) {
          const element = this.StoreItems[key];
          ans[key] = element;
        }
      }

      return ans;
    },
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
}
.Cart > div:first-child:not(.empty) {
  flex: 0;
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
  height: 85vh;
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
@media (max-width: 615px) {
  .empty > img {
    height: auto;
    width: 100%;
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