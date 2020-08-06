import Vue from "vue";
import Vuex from "vuex";
import Request from "../request/request";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cartItems: {
      2: {
        23: 2,
        24: 6
      }
    },
    storeItems: {
      1: {
        id: 1,
        productTitle: "ABCN",
        image: require("../assets/images/product1.png"),
        productCode: 2,
        size: "",
        price: 14,
        quantity: 0,
        product_img: [
          require("../assets/images/product3.png"),
          require("../assets/images/product2.png"),
          require("../assets/images/product3.png"),
          require("../assets/images/product2.png"),
          require("../assets/images/product3.png"),
          require("../assets/images/product2.png"),
          require("../assets/images/product3.png"),
          require("../assets/images/product2.png")
        ],
        description: [
          "Описание подтягивется из store",
          "Каждый пункт -- отдельная строка в массиве",
          "серьги женские",
          "цвет металла: красное золото, вставка белое золото",
          "10 брилиантов 0,02 карата, 2 брилианта 0,095 карат",
          "вес 2,7 гр",
          "производитель Россия",
          "проба 585 "
        ]
      },
      2: {
        id: 2,
        productTitle: "dgngr",
        image: require("../assets/images/product2.png"),
        productCode: 3,
        size: "",
        price: 333,
        tags: {
          // amount of each size
          23: { title: 23, quantity: 0 },
          24: { title: 24, quantity: 0 },
          25: { title: 25, quantity: 0 }
        },
        quantity: 0,
        product_img: [
          require("../assets/images/product3.png"),
          require("../assets/images/product1.png"),
          require("../assets/images/product3.png"),
          require("../assets/images/product4.png")
        ],
        description: [
          "серьги женские",
          "цвет металла: красное золото, вставка белое золото",
          "10 брилиантов 0,02 карата, 2 брилианта 0,095 карат",
          "вес 2,7 гр",
          "производитель Россия",
          "проба 585 "
        ]
      },
      3: {
        id: 3,
        productTitle: "shvsrtghbvca",
        image: require("../assets/images/product3.png"),
        productCode: 4,
        size: "",
        price: 107,
        tags: {
          // amount of each size
          23: { title: 23, quantity: 0 },
          24: { title: 24, quantity: 0 },
          25: { title: 25, quantity: 0 }
        },
        quantity: 0,
        product_img: [
          require("../assets/images/product3.png"),
          require("../assets/images/product3.png"),
          require("../assets/images/product3.png"),
          require("../assets/images/product3.png")
        ],
        description: [
          "серьги женские",
          "цвет металла: красное золото, вставка белое золото",
          "10 брилиантов 0,02 карата, 2 брилианта 0,095 карат",
          "вес 2,7 гр",
          "производитель Россия",
          "проба 585 "
        ]
      },
      4: {
        id: 4,
        productTitle: "htresdfgt",
        image: require("../assets/images/product4.png"),
        productCode: 5,
        size: "",
        price: 3562,
        tags: {
          // amount of each size
          23: { title: 23, quantity: 0 },
          24: { title: 24, quantity: 0 },
          25: { title: 25, quantity: 0 }
        },
        quantity: 0,
        product_img: [
          require("../assets/images/product2.png"),
          require("../assets/images/product3.png"),
          require("../assets/images/product1.png"),
          require("../assets/images/product3.png")
        ],
        description: [
          "серьги женские",
          "цвет металла: красное золото, вставка белое золото",
          "10 брилиантов 0,02 карата, 2 брилианта 0,095 карат",
          "вес 2,7 гр",
          "производитель Россия",
          "проба 585 "
        ]
      },
      5: {
        id: 5,
        productTitle: "ABCN",
        image: require("../assets/images/product1.png"),
        productCode: 2,
        size: "",
        price: 14,
        quantity: 0,
        product_img: [
          require("../assets/images/product3.png"),
          require("../assets/images/product2.png"),
          require("../assets/images/product3.png"),
          require("../assets/images/product2.png"),
          require("../assets/images/product3.png"),
          require("../assets/images/product2.png"),
          require("../assets/images/product3.png"),
          require("../assets/images/product2.png")
        ],
        description: [
          "Описание подтягивется из store",
          "Каждый пункт -- отдельная строка в массиве",
          "серьги женские",
          "цвет металла: красное золото, вставка белое золото",
          "10 брилиантов 0,02 карата, 2 брилианта 0,095 карат",
          "вес 2,7 гр",
          "производитель Россия",
          "проба 585 "
        ]
      },
      6: {
        id: 6,
        productTitle: "dgngr",
        image: require("../assets/images/product2.png"),
        productCode: 3,
        size: "",
        price: 333,
        tags: {
          // amount of each size
          23: { title: 23, quantity: 0 },
          24: { title: 24, quantity: 0 },
          25: { title: 25, quantity: 0 }
        },
        quantity: 0,
        product_img: [
          require("../assets/images/product3.png"),
          require("../assets/images/product1.png"),
          require("../assets/images/product3.png"),
          require("../assets/images/product4.png")
        ],
        description: [
          "серьги женские",
          "цвет металла: красное золото, вставка белое золото",
          "10 брилиантов 0,02 карата, 2 брилианта 0,095 карат",
          "вес 2,7 гр",
          "производитель Россия",
          "проба 585 "
        ]
      },
      7: {
        id: 7,
        productTitle: "shvsrtghbvca",
        image: require("../assets/images/product3.png"),
        productCode: 4,
        size: "",
        price: 107,
        tags: {
          // amount of each size
          23: { title: 23, quantity: 0 },
          24: { title: 24, quantity: 0 },
          25: { title: 25, quantity: 0 }
        },
        quantity: 0,
        product_img: [
          require("../assets/images/product3.png"),
          require("../assets/images/product3.png"),
          require("../assets/images/product3.png"),
          require("../assets/images/product3.png")
        ],
        description: [
          "серьги женские",
          "цвет металла: красное золото, вставка белое золото",
          "10 брилиантов 0,02 карата, 2 брилианта 0,095 карат",
          "вес 2,7 гр",
          "производитель Россия",
          "проба 585 "
        ]
      },
      8: {
        id: 8,
        productTitle: "htresdfgt",
        image: require("../assets/images/product4.png"),
        productCode: 5,
        size: "",
        price: 3562,
        tags: {
          // amount of each size
          23: { title: 23, quantity: 0 },
          24: { title: 24, quantity: 0 },
          25: { title: 25, quantity: 0 }
        },
        quantity: 0,
        product_img: [
          require("../assets/images/product2.png"),
          require("../assets/images/product3.png"),
          require("../assets/images/product1.png"),
          require("../assets/images/product3.png")
        ],
        description: [
          "серьги женские",
          "цвет металла: красное золото, вставка белое золото",
          "10 брилиантов 0,02 карата, 2 брилианта 0,095 карат",
          "вес 2,7 гр",
          "производитель Россия",
          "проба 585 "
        ]
      }
    },
    // общее количество товаров в корзине и их цена
    popUpItem: {},
    total: 0,
    totalPrice: 0
  },

  getters: {
    CartItems: state => state.cartItems,
    StoreItems: state => state.storeItems,
    Total: state => state.total,
    TotalPrice: state => state.totalPrice,
    getStoreItemsById: state => id => {
      return state.storeItems[id];
    }
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

    INCREASE: (state, id) => {
      let item = state.storeItems[id];
      if (item.tags) {
        state.popUpItem = item;
      } else {
        if (state.cartItems[id]) {
          ++state.cartItems[id];
        } else {
          state.cartItems[id] = 1;
        }
      }
      let clone = { ...state.cartItems };
      state.cartItems = clone;
    },

    DECREASE: (state, id) => {
      let item = state.storeItems[id];
      if (item.tags) {
        state.popUpItem = item;
      } else {
        if (state.cartItems[id]) {
          --state.cartItems[id];
        } else {
          state.cartItems[id] = 0;
        }
      }
      if (state.cartItems[id] == 0) {
        delete state.cartItems[id];
      }

      let clone = { ...state.cartItems };
      state.cartItems = clone;
    },
    INCREASE_FROM_POP_UP: (state, tag_id) => {
      let item_in_pop_up = state.popUpItem;

      if (state.cartItems[item_in_pop_up.id]) {
        debugger
        if (state.cartItems[item_in_pop_up.id][tag_id]) {
          ++state.cartItems[item_in_pop_up.id][tag_id];
        } else {
          state.cartItems[item_in_pop_up.id][tag_id] = 1;
        }
      } else {
        debugger
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
      const cloneCartItems = {}


      const clean = (obj) => {
        let ans = {};
        for (var key in obj) {
          if (obj[key] == "0") {
            delete obj[key];
          }
          else {
            ans[key] = obj[key]
          }
        }
        if (Object.keys(ans).length === 0) {
          return null
        }
        else {
          return ans
        }
      }

      for (const key in state.cartItems) {
        if (state.cartItems.hasOwnProperty(key)) {
          const element = state.cartItems[key];
          if (typeof element === "number") {
            if (element > 0) {
              cloneCartItems[key] = element
            }
          }
          else if (typeof element === "object") {
            let element_obj = clean(element)
            if (element_obj !== null) {
              debugger
              cloneCartItems[key] = element_obj
            }
          }
        }
      }
      state.cartItems = cloneCartItems
    },

    FETCH_FROM_SERVER: (state, data) => {
      // синхронизируем ключи объекта и profile_id
      const newObj = {};
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const newId = data[key].profile_id;
          newObj[newId] = data[key];
        }
      }
      state.storeItems = newObj;
      console.log("FETCH_FROM_SERVER", newObj);
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
      commit("INCREASE", itemId);
    },
    DECREASE: ({ commit, getters }, itemId) => {
      commit("DECREASE", itemId);
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

    FETCH_FROM_SERVER: async ({ commit }) => {
      const resp = await Request({
        task: "profiles.getRows",
        testik: 1,
        user_id: 674,
        key: "mcTnaftuzoHzWJV",
        type_id: 14,
        fields_ids: "[468,863,865,868,111,866,1000012]",
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
      }).then(resp => {
        const entries = Object.values(resp.data.value);
        const accumulator = [];
        for (let index = 0; index <= 10; index++) {
          accumulator.push(entries[index]);
        }

        return Object.assign({}, accumulator);
      });
      commit("FETCH_FROM_SERVER", resp);
    }
  }
});
