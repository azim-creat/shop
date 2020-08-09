<template>
  <div class="search">
    <h1 class="name_category">Поиск</h1>
    <input
      type="search"
      @keyup="search($event.target.value)"
      class="search__tag"
      id="gsearch"
      name="gsearch"
      placeholder="Поиск товаров"
      size="40px"
    />
    <Products :render_list="render_search_list" />
  </div>
</template>
<script>
import Products from "./Products";

export default {
  name: "search",
  components: {
    Products,
  },
  data() {
    return {
      title: "Поиск",
      render_search_list: {},
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
        var results = {};
        toSearch = trimString(toSearch); // trim it
        for (const key in objects) {
          if (objects.hasOwnProperty(key)) {
            const element = objects[key];
            for (var obj_key in element) {
              if (typeof element[obj_key] === "string") {
                if (element[obj_key].toLowerCase().indexOf(toSearch.toLowerCase()) != -1) {
                  results[key] = objects[key];
                }
              }
            }
          }
        }

        return results;
      }

      this.render_search_list = searchFor(s);
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
}
</style>