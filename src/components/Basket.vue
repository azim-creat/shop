<template>
  <div class="Cart">
    <ul>
      <li v-for="(data, index) in Object.entries(CartItems)" :key="index">
        {{data}}
        {{getStoreItemsById(data[0])}}
        <!-- <ProductList
          :title="getStoreItemsById(data[0]).productTitle"
          :image="getStoreItemsById(data[0]).image"
          :itemId="parseInt(data[0], 10) "
          :price="getStoreItemsById(data[0]).price"
          :size="getStoreItemsById(data[0]).size"
          :increase="function (){increaseItem(data[0])}"
          :decrease="function (){decreaseItem(data[0])}"
        />-->
      </li>
    </ul>
    <hr color="#DADADA" width="100%" />
    <div class="CartControls">
      <div class="CartFlexContainer">
        <div>
          <p>количество:</p>
          <span>{{Total}} единиц</span>
        </div>
        <div>
          <p>сумма:</p>
          <span>{{TotalPrice}}</span>
        </div>
      </div>
      <button>Заказать</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductList from "@/components/ProductItems/ProductList";

export default {
  name: "Basket",
  components: {
    ProductList,
  },
  methods: {
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
    ...mapGetters(["CartItems", "Total", "TotalPrice", "getStoreItemsById"]),
    // mergedItems: ,
  },
};
</script>

<style scoped>
.Cart {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.CartControls {
  padding: 20px;
}
.CartFlexContainer {
  display: flex;
  justify-content: space-between;
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