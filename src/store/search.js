import Request from "../request/request";
import toLocalStructure from "./utils/toLocalStructure";

export const searchModule = {
  state: () => ({ items: [], itemsKeys: [], pending: false, cache: {} }),
  mutations: {
    DO_SEARCH: (state, results) => {
      state.items = results.newItems;
      state.itemsKeys = results.newItemsKeys;
    },
    CLEAR_SEARCH_RESULTS: state => {
      state.items = [];
      state.itemsKeys = [];
    },
    ADD_SEARCH_ITEM_TO_CACHE: (state, itemToCache) => {
      state.cache[itemToCache.id] = itemToCache;
    }
  },
  actions: {
    DO_SEARCH: async ({ state, commit }, s) => {
      state.pending = true;
      commit("CLEAR_SEARCH_RESULTS");
      await Request({
        task: "profiles.getRows",
        testik: 1,
        type_id: 14,
        fields_ids: "[468,863,865,868,111,866,1000012]",
        limit: JSON.stringify([0, 50]),
        search_text: s,
        search_fields: "[111]"
      })
        .then(ans => {
          state.pending = false;
          const result = ans.data.value;
          if (result.length > 0) {
            const formattedResults = toLocalStructure(result, state);
            console.log("[SEARCH]", s, result);
            commit("DO_SEARCH", formattedResults);
          } else {
            commit("DO_SEARCH", {
              newItems: ["no results"],
              newItemsKeys: ["no results"]
            });
          }
        })
        .catch(e => {
          state.pending = false;
          console.error(e);
        });
    },
    ADD_SEARCH_ITEM_TO_CACHE: ({ commit }, item) => {
      commit("ADD_SEARCH_ITEM_TO_CACHE", item);
    }
  },
  getters: {
    searchResults: state => state.items,
    getSearchItemById: state => id => {
      return state.items[state.itemsKeys.indexOf(id)];
    },
    isSearchPending: state => state.pending,
    getSearchCachedItem: state => id => {
      return state.cache[id];
    }
  }
};
