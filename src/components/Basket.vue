<template>
  <div class="Cart">
    <ul>
      <li v-for="(data,index) in CartItems" :key="index">
        <ProductList
          :title="data.productTitle"
          :image="data.image"
          :itemId="data.id"
          :quantity="data.quantity"
          :price="data.price"
          :increase="increaseQuantity"
          :decrease="decreaseQuantity"
        />
      </li>
    </ul>
    <div>
      <h3>общее кол-во элементов {{Total}}</h3>
      <button @click="addItem(products[1])">Добавить Товар</button>
      <h3>Цена корзины {{TotalPrice}}</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductList from "@/components/ProductItems/ProductList";

export default {
  name: "Basket",
  components: {
    ProductList
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
    }
  },
  computed: mapGetters(["CartItems", "Total", "TotalPrice"])
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
button {
  background-color: blueviolet;
  height: 100px;
}
ul {
  list-style: none;
  padding: 0;
}
</style>