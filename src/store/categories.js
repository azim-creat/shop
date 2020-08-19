import Request from "../request/request";

export const categoriesModule = {
  state: () => ({ categoryItems: {} }),
  mutations: {
    CREATE_CATEGORIES_STORAGE: (state, categories) => {
      state.categoryItems = categories;
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

          //console.log(rootState);
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
  },
  getters: {}
};
// filter: JSON.stringify([
//   {
//     field: 863,
//     value: "10528"
//   }
// ]);
