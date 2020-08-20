import Request from "../request/request";
import toLocalStructure from "./utils/toLocalStructure";

export const searchModule = {
  state: () => ({ items: [], itemsKeys: [], pending: false }),
  mutations: {
    DO_SEARCH: (state, results) => {
      state.items = results.newItems;
      state.itemsKeys = results.newItemsKeys;
    },
    CLEAR_SEARCH_RESULTS: state => {
      state.items = [];
      state.itemsKeys = [];
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
    }
  },
  getters: {
    searchResults: state => state.items,
    isSearchPending: state => state.pending
  }
};
