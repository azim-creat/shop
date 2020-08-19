import Request from "../request/request";
import toLocalStructure from "./utils/toLocalStructure";

export const categoriesModule = {
  state: () => ({ categoryNames: {}, items: [], itemsKeys: [] }),
  mutations: {
    CREATE_CATEGORIES_STORAGE: (state, categories) => {
      state.categoryNames = categories;
    },
    FETCH_FETCH_ITEMS_BY_CAT: (state, newItems) => {
      state.items = newItems.newItems;
      state.itemsKeys = newItems.newItemsKeys;
    },
    CLEAR_CATEGORIES_ITEMS: state => {
      state.items = [];
      state.itemsKeys = [];
    }
  },
  actions: {
    FETCH_CATEGORIES: async ({ commit, state, dispatch, rootState }) => {
      await Request({
        task: "getGroups"
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
          const value = resp.data.value;
          let categoriesClone = {};
          let catId;

          console.log(resp);
          const categoryTemplate = {
            id: "myid",
            full_name: "",
            count: 0,
            parent_id: false,
            image: require("../assets/images/product1.jpg"),
            childs: false
          };

          for (const key in value) {
            if (value.hasOwnProperty(key)) {
              let full_name = value[key].full_name;
              catId = key;
              categoriesClone[catId] = { ...categoryTemplate };
              categoriesClone[catId].id = catId;
              categoriesClone[catId].full_name = full_name;
            }
          }
          commit("CREATE_CATEGORIES_STORAGE", categoriesClone);
        })
        .catch(e => {
          console.error(e);
        });
    },
    FETCH_ITEMS_BY_CAT: async ({ commit, state, rootState }, catId) => {
      await Request({
        task: "profiles.getRows",
        testik: 1,
        type_id: 14,
        fields_ids: "[468,863,865,868,111,866,1000012]",
        limit: JSON.stringify([state.items.length, state.items.length + 50]),
        filter: JSON.stringify([
          {
            field: 863,
            value: catId.toString()
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
          if (resp.data.count != 0) {
            const { newItems, newItemsKeys } = toLocalStructure(
              resp.data.value,
              state
            );
            console.log("[RESP]", resp);
            commit("FETCH_FETCH_ITEMS_BY_CAT", {
              newItems,
              newItemsKeys
            });
          } else {
            commit("FETCH_FETCH_ITEMS_BY_CAT", {
              newItems: ["empty"],
              newItemsKeys: ["empty"]
            });
          }
        })
        .catch(e => console.error(e));
    },
    CATEGORIES_NEXT_PAGE: async ({ commit, state, rootState }, catId) => {
      await Request({
        task: "profiles.getRows",
        testik: 1,
        type_id: 14,
        fields_ids: "[468,863,865,868,111,866,1000012]",
        limit: JSON.stringify([state.items.length, state.items.length + 50]),
        filter: JSON.stringify([
          {
            field: 863,
            value: catId
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
          console.log(resp);
        })
        .catch(e => console.error(e));
    }
  },
  getters: {
    getCategoryNames: state => state.categoryNames,
    getCategoryItems: state => state.items,
    getCategoryItemById: state => id => {
      return state.items[state.itemsKeys.indexOf(id)];
    }
  }
};
