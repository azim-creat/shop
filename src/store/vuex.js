import Vue from "vue";
import Vuex from "vuex";
import Request from "../request/request";
import { categoriesModule } from "./categories";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cartItems: {},
    storeItems: [],
    storeItemsKeys: [],
    popUpItem: {},
    total: 0,
    totalPrice: 0,
    pagination: { from: 0, to: 200 },
    enable_request: true
  },
  modules: {
    categories: categoriesModule
  },
  getters: {
    CartItems: state => state.cartItems,
    StoreItems: state => state.storeItems,
    Total: state => state.total,
    TotalPrice: state => state.totalPrice,
    getStoreItemsById: state => id => {
      return state.storeItems[state.storeItemsKeys.indexOf(id)];
    },
    getCardItem: state => {
      return () => {};
    },

    enable_request: state => state.enable_request
  },

  mutations: {
    NEW_CART_ITEM: (state, itemId) => {
      let clone = { ...state.storeItems[itemId] };
      state.cartItems[itemId] = clone;
    },
    ADD_TO_CART_FROM_POPUP_mut: (state, newItem) => {
      const itemId = newItem.id;
      let clone = {
        ...newItem
      };
      state.cartItems[itemId] = clone;
      state.total += clone.quantity;
      state.totalPrice = clone.price * clone.quantity;
    },
    REMOVE_CART_ITEM: (state, itemId) => {
      delete state.cartItems[itemId];
      const stateClone = { ...state };
      state = stateClone;
    },
    CLEAN_CART: state => {
      state.cartItems = {};
    },
    INCREASE_ITEM_QUANTITY: (state, itemId) => {
      let clone = { ...state.cartItems };
      if (!clone[itemId].quantity) {
        clone[itemId].quantity = 0;
      }
      clone[itemId].quantity++;
      state.cartItems = clone;
      state.total++;
      state.totalPrice += state.cartItems[itemId].price;
    },
    DECREASE_ITEM_QUANTITY: (state, itemId) => {
      let clone = { ...state.cartItems };
      clone[itemId].quantity--;
      state.cartItems = clone;
      state.total--;
      state.totalPrice -= state.cartItems[itemId].price;
    },
    SET_SIZE: (state, { size, id }) => {
      let clone = { ...state.cartItems };
      clone[id].size = size;
      state.cartItems = clone;
    },

    INCREASE: (state, item) => {
      if (item.tags) {
        state.popUpItem = item;
      } else {
        if (state.cartItems[item.id]) {
          ++state.cartItems[item.id];
        } else {
          state.cartItems[item.id] = 1;
        }
      }
      let clone = { ...state.cartItems };
      state.cartItems = clone;
    },

    DECREASE: (state, item) => {
      if (item.tags) {
        state.popUpItem = item;
      } else {
        if (state.cartItems[item.id]) {
          --state.cartItems[item.id];
        } else {
          state.cartItems[item.id] = 0;
        }
      }
      if (state.cartItems[item.id] == 0) {
        delete state.cartItems[item.id];
      }

      let clone = { ...state.cartItems };
      state.cartItems = clone;
    },
    INCREASE_FROM_POP_UP: (state, tag_id) => {
      let item_in_pop_up = state.popUpItem;

      if (state.cartItems[item_in_pop_up.id]) {
        if (state.cartItems[item_in_pop_up.id][tag_id]) {
          ++state.cartItems[item_in_pop_up.id][tag_id];
        } else {
          state.cartItems[item_in_pop_up.id][tag_id] = 1;
        }
      } else {
        state.cartItems[item_in_pop_up.id] = {};
        state.cartItems[item_in_pop_up.id][tag_id] = 1;
      }
      let clone = { ...state.cartItems };
      state.cartItems = clone;
    },

    DECREASE_FROM_POP_UP: (state, tag_id) => {
      let item_in_pop_up = state.popUpItem;

      if (state.cartItems[item_in_pop_up.id]) {
        if (state.cartItems[item_in_pop_up.id][tag_id]) {
          --state.cartItems[item_in_pop_up.id][tag_id];
        } else {
          state.cartItems[item_in_pop_up.id][tag_id] = 0;
        }
      } else {
        state.cartItems[item_in_pop_up.id] = {};
        state.cartItems[item_in_pop_up.id][tag_id] = 0;
      }
      let clone = { ...state.cartItems };
      state.cartItems = clone;
    },

    CLOUSE_POP_UP: (state, obj) => {
      state.popUpItem = obj;
    },
    CLEAN_EMPTY_CART_ITEMS: (state, object_) => {
      const cloneCartItems = {};

      const clean = obj => {
        let ans = {};
        for (var key in obj) {
          if (obj[key] == "0") {
            delete obj[key];
          } else {
            ans[key] = obj[key];
          }
        }
        if (Object.keys(ans).length === 0) {
          return null;
        } else {
          return ans;
        }
      };

      for (const key in state.cartItems) {
        if (state.cartItems.hasOwnProperty(key)) {
          const element = state.cartItems[key];
          if (typeof element === "number") {
            if (element > 0) {
              cloneCartItems[key] = element;
            }
          } else if (typeof element === "object") {
            let element_obj = clean(element);
            if (element_obj !== null) {
              cloneCartItems[key] = element_obj;
            }
          }
        }
      }
      state.cartItems = cloneCartItems;
    },

    FETCH_FROM_SERVER: (state, arrayFromServer) => {
      const newStoreItems = [...state.storeItems];
      const newStoreItemsKeys = [...state.storeItemsKeys];
      // 468 цена
      // 863 группа
      // 865 подгруппа / тип
      // 868 размер
      // 111
      // 866 цвет
      // 1000012 проба
      // full_name - назание

      for (const key in arrayFromServer) {
        if (arrayFromServer.hasOwnProperty(key)) {
          const newItem = {};
          const objectFromServer = arrayFromServer[key];

          newItem.categoryCode = objectFromServer.field_863;
          newItem.id = objectFromServer.profile_id;
          newItem.price = parseInt(objectFromServer.field_468, 10);
          newItem.productTitle =
            objectFromServer.full_name || objectFromServer.field_111;
          newItem.image = require("../assets/images/product3.jpg");
          newItem.product_img = [
            require("../assets/images/product3.jpg"),
            require("../assets/images/product1.jpg"),
            require("../assets/images/product3.jpg"),
            require("../assets/images/product4.jpg")
          ];
          newItem.description = [
            newItem.field_868 || "-",
            newItem.field_866 || "-",
            newItem.field_1000012 || "-"
          ];
          newStoreItems.push(newItem);
          newStoreItemsKeys.push(newItem.id);
        }
      }

      state.storeItems = newStoreItems;
      state.storeItemsKeys = newStoreItemsKeys;
    }
  },

  actions: {
    ADD_CART_ITEM: ({ commit }, payload) => {
      commit("NEW_CART_ITEM", payload);
    },
    DELETE_CART_ITEM: (context, payload) => {
      context.commit("REMOVE_CART_ITEM", payload);
    },

    INCREASE_ITEM_QUANTITY: ({ commit, getters }, itemId) => {
      // добавляем новый товар при отсутствии его в корзине
      if (!getters.CartItems[itemId]) {
        commit("NEW_CART_ITEM", itemId);
      }
      commit("INCREASE_ITEM_QUANTITY", itemId);
    },
    DECREASE_ITEM_QUANTITY: ({ commit, getters }, itemId) => {
      if (!getters.CartItems[itemId]) {
        return;
      }
      commit("DECREASE_ITEM_QUANTITY", itemId);
      if (getters.CartItems[itemId].quantity == 0) {
        commit("REMOVE_CART_ITEM", itemId);
      }
    },
    SET_SIZE: ({ commit, getters }, { size, id }) => {
      // если элемента нет в корзине - добавляем
      if (!getters.CartItems[id]) {
        commit("NEW_CART_ITEM", id);
        commit("INCREASE_ITEM_QUANTITY", id);
      }
      commit("SET_SIZE", { size, id });
    },

    INCREASE: ({ commit, getters }, itemId) => {
      const item = getters.getStoreItemsById(itemId);
      commit("INCREASE", item);
    },
    DECREASE: ({ commit, getters }, itemId) => {
      const item = getters.getStoreItemsById(itemId);
      commit("DECREASE", item);
    },
    INCREASE_FROM_POP_UP: ({ commit, getters }, tagId) => {
      commit("INCREASE_FROM_POP_UP", tagId);
    },
    DECREASE_FROM_POP_UP: ({ commit, getters }, tagId) => {
      commit("DECREASE_FROM_POP_UP", tagId);
    },

    CLOUSE_POP_UP: ({ commit, dispatch }, obj) => {
      commit("CLOUSE_POP_UP", obj);
      commit("CLEAN_EMPTY_CART_ITEMS", {});
    },

    FETCH_FROM_SERVER: async ({ commit, state, dispatch }) => {
      if (state.enable_request == false) return;

      state.enable_request = false;
      await Request({
        task: "profiles.getRows",
        testik: 1,
        //user_id: 674,
        // key: "mcTnaftuzoHzWJV",
        type_id: 14,
        fields_ids: "[468,863,865,868,111,866,1000012]",

        limit: JSON.stringify([
          state.storeItems.length,
          state.storeItems.length + 50
        ]),
        filter: JSON.stringify([
          {
            field: 111,
            cond: "[FULL]"
          }
        ])
        // 468 цена
        // 863 группа
        // 865 подгруппа тип
        // 868 размер
        // 111
        // 866 цвет
        // 1000012 проба
        // full_name - назание
      })
        .then(resp => {
          state.enable_request = true;

          const ans = resp.data.value;
          commit("FETCH_FROM_SERVER", ans);
        })
        .catch(e => {
          state.enable_request = true;
          console.log(e);
        });
    },
    CREATE_ORDER: (state, orderId) => {
      const dateOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        timezone: "UTC",
        hour: "numeric",
        minute: "numeric"
      };
      const all_orders = JSON.parse(localStorage.getItem("orders"));
      const new_order = {
        date: new Date().toLocaleString("ru", dateOptions),
        orderId
      };
      if (!all_orders) {
        const all_orders = [];
        all_orders.unshift(new_order);
        localStorage.setItem("orders", JSON.stringify(all_orders));
      } else {
        all_orders.unshift(new_order);
        localStorage.setItem("orders", JSON.stringify(all_orders));
      }
    },
    NEXT_PAGE: ({ commit, state, dispatch }) => {
      const paginationClone = { ...state.pagination };
      console.log(paginationClone);
      paginationClone.from += 50;
      paginationClone.to += 50;
      console.log("[FETCHING]");
      dispatch("FETCH_FROM_SERVER");
    }
  }
});
