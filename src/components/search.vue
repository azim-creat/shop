<template>
  <div class="search">
    <h1 class="name_category">Поиск</h1>
    <input
      type="search"
      @keyup="search($event.target.value)"
      class="search__tag"
      :class="{filled:s}"
      id="gsearch"
      name="gsearch"
      placeholder="Поиск товаров"
      v-model="s"
      size="40px"
    />
    <button @click="searchFromServer()">проверить</button>
    <Products :render_list="render_search_list" :showSkeletons="false" />
  </div>
</template>
<script>
import Products from "./Products";
import Request from "../request/request";
export default {
  name: "search",
  components: {
    Products,
  },
  data() {
    return {
      title: "Поиск",
      render_search_list: [],
      s: "",
    };
  },

  methods: {
    search(s) {
      console.log(s);

      function trimString(s) {
        var l = 0,
          r = s.length - 1;
        while (l < s.length && s[l] == " ") l++;
        while (r > l && s[r] == " ") r -= 1;
        return s.substring(l, r + 1);
      }

      var objects = this.$store.state.storeItems;

      function searchFor(toSearch) {
        var results = [];
        toSearch = trimString(toSearch); // trim it
        for (const key in objects) {
          if (objects.hasOwnProperty(key)) {
            const element = objects[key];
            for (var obj_key in element) {
              if (typeof element[obj_key] === "string") {
                if (
                  element[obj_key]
                    .toLowerCase()
                    .indexOf(toSearch.toLowerCase()) != -1
                ) {
                  results.push(objects[key]);
                }
              }
            }
          }
        }

        return results;
      }

      this.render_search_list = this.searchFromServer(s);
    },
    async searchFromServer(s) {
      await Request({
        task: "profiles.getRows",
        testik: 1,
        type_id: 14,
        fields_ids: "[468,863,865,868,111,866,1000012]",
        limit: JSON.stringify([0, 3]),
        search_text: s,
        search_fields: "[111]",
      })
        .then((result) => {
          console.log("[SEARCH]", s, result);
        })
        .catch((e) => console.error(e));
    },
  },
};
</script>


<style scoped>
.search {
}

input {
  border: 2px solid black;
}

.search__tag {
  width: 100%;
  height: 50px;
  font-size: 20px;
  padding-left: 17px;
}
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  cursor: pointer;

  height: 20px;
  width: 20px;
  /* не убирать  */
  background-image: url("../assets/close.svg");
}
input[type="search"]::-ms-clear {
  color: black;
}

input.filled {
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 99.5%;
  background-image: url("data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzODYuNjY3IDM4Ni42NjciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMzg2LjY2NyAzODYuNjY3IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zODYuNjY3IDQ1LjU2NC00NS41NjQtNDUuNTY0LTE0Ny43NyAxNDcuNzY5LTE0Ny43NjktMTQ3Ljc2OS00NS41NjQgNDUuNTY0IDE0Ny43NjkgMTQ3Ljc2OS0xNDcuNzY5IDE0Ny43NyA0NS41NjQgNDUuNTY0IDE0Ny43NjktMTQ3Ljc2OSAxNDcuNzY5IDE0Ny43NjkgNDUuNTY0LTQ1LjU2NC0xNDcuNzY4LTE0Ny43N3oiLz48L3N2Zz4=");
}
</style>