import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const types = {
  ADD_CART_ITEM: "ADD_CART_ITEM"
};

export const store = new Vuex.Store({
  state: {
    cartItems: {
      1: {
        id: 1,
        productTitle: "ABCN",
        image: require("../assets/images/product1.png"),
        productCode: 2,
        size: "xxxxl",
        price: 14,
        quantity: 0
      },
      2: {
        id: 2,
        productTitle: "dgngr",
        image: require("../assets/images/product2.png"),
        productCode: 3,
        size: "l",
        price: 333,
        quantity: 0
      },
      3: {
        id: 3,
        productTitle: "shvsrtghbvca",
        image: require("../assets/images/product3.png"),
        productCode: 4,
        size: "s",
        pridgngrce: 107,
        quantity: 0
      },
      4: {
        id: 4,
        productTitle: "htresdfgt",
        image: require("../assets/images/product4.png"),
        productCode: 5,
        type: "red",
        price: 355262,
        quantity: 0
      }
    },
    // общее количество товаров в корзине и их цена
    total: 0,
    totalPrice: 0
  },

  getters: {
    CartItems: state => state.cartItems,
    Total: state => state.total,
    TotalPrice: state => state.totalPrice
  },

  // похож на reducer
  // мутирует стейт. не дергается на прямую
  mutations: {
    NEW_CART_ITEM: (state, payload) => {
      state.cartItems(payload);
      state.total++;
      state.totalPrice += payload.price;
    },
    REMOVE_CART_ITEM: (state, payload) => {
      state.cartItems.push(payload);
      state.total--;
      state.totalPrice = payload.price;
    },
    INCREASE_ITEM_QUANTITY: (state, itemId) => {
      state.cartItems[itemId].quantity++;
      state.total++;
      state.totalPrice += state.cartItems[itemId].price;
    },
    DECREASE_ITEM_QUANTITY: (state, itemId) => {
      if (state.cartItems[itemId].quantity == 0) {
        return;
      }
      state.cartItems[itemId].quantity--;
      state.total--;
      state.totalPrice -= state.cartItems[itemId].price;
    }
  },

  // штуки для управления стейтом. дергает мутации, закидывает в них пейлоады
  actions: {
    ADD_CART_ITEM: (context, payload) => {
      context.commit("NEW_CART_ITEM", payload);
    },
    DELETE_CART_ITEM: (context, payload) => {
      context.commit("REMOVE_CART_ITEM", payload);
    },
    INCREASE_ITEM_QUANTITY: (context, itemId) => {
      context.commit("INCREASE_ITEM_QUANTITY", itemId);
    },
    DECREASE_ITEM_QUANTITY: (context, itemId) => {
      context.commit("DECREASE_ITEM_QUANTITY", itemId);
    }
  }
});
