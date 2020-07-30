<template>
  <div class="Cart">
    <ul>
      <li v-for="(data,index) in CartItems" :key="index">
        <ProductList
          :title="data.productTitle"
          :image="data.image"
          :itemId="data.id"
          :price="data.price"
          :size="data.size"
          :quantity="data.quantity"
          :increase="increaseQuantity"
          :decrease="decreaseQuantity"
        />
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
    increaseQuantity(itemId) {
      this.$store.dispatch("INCREASE_ITEM_QUANTITY", itemId);
    },
    decreaseQuantity(itemId) {
      this.$store.dispatch("DECREASE_ITEM_QUANTITY", itemId);
    },
  },
  computed: mapGetters(["CartItems", "Total", "TotalPrice"]),
};
</script>

<style scoped>
.Cart {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
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