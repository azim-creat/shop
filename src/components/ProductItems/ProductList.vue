<template>
  <div class="product-item">
    <router-link :to="`/product/${itemId}`">
      <img :src="image" />
    </router-link>
    <div class="description">
      <div class="description-text">
        <h3>{{ title }}</h3>
        <span class="price">{{price || '1000' }}</span>
      </div>
      <div class="tags">
        <span class="tag" v-for="(tag, tag_index) of tags" :key="tag_index">{{tag.title}}</span>
      </div>
    </div>
    <div class="controls">
      <input v-show="getQuantity()" type="button" value="-" @click="decrease(itemId)" />
      <span v-show="getQuantity()">{{getQuantity()}}</span>
      <input type="button" value="+" @click="increase(itemId)" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductList",
  props: {
    title: String,
    image: String,
    add: Function,
    itemId: Number,
    price: Number,
    tags: Object,
    decrease: Function,
    increase: Function,
  },
  data() {
    return { id: this.itemId };
  },
  methods: {
    getCurrentSize(sizeToCheck) {
      if (this.CartItems[this.id]) {
        return this.CartItems[this.id].size == sizeToCheck;
      }
    },
    getQuantity() {
      let item_in_cart = this.CartItems[parseInt(this.itemId, 10)];
      if (typeof item_in_cart === "number") {
        return item_in_cart;
      } else if (typeof item_in_cart === "object") {
        var sum = 0;
        for (var el in item_in_cart) {
          if (item_in_cart.hasOwnProperty(el)) {
            sum += parseFloat(item_in_cart[el]);
          }
        }
        return sum;
      }
    },
    increaseQuantity(itemId) {
      this.currentId = itemId;
      this.show_modal = true;
    },
    decreaseQuantity(itemId) {
      this.currentId = itemId;
      this.show_modal = true;
    },
    ...mapActions({
      increace: "INCREASE_ITEM_QUANTITY",
      decreace: "DECREASE_ITEM_QUANTITY",
    }),
  },
  computed: {
    ...mapGetters(["CartItems"]),
  },
};
</script>

<style scoped>
.product-item {
  max-height: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
img {
  flex: 0;
  margin-right: 10px;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 12px;
  display: block;
}
h3 {
  margin: 0;
  font-weight: bold;
}

.description {
  height: 100%;
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: center;
}

.tags .tag:first-child {
  margin-left: 0;
}
.tag {
  display: inline-block;
  border: 1px black solid;
  margin: 0 5px;
  padding: 2px 5px;
  border-radius: 6px;
  font-size: 10px;
}

input {
  height: 30px;
  width: 30px;
  border-radius: 26px;
  border: none;
}
input[value="-"] {
  background-color: #dadada;
  color: black;
}
input[value="+"] {
  background: linear-gradient(246.58deg, #ff0099 -162.71%, #ff4d00 163.83%);
  color: white;
}
.controls {
  flex: 1;
  display: flex;
  align-items: baseline;
  justify-content: center;
}
.controls > * {
  margin: 0 3px;
}
.controls span {
  font-size: 12px;
}

@media (max-width: 320px) {
  .tag {
    margin: 0 2px;
  }
}
</style>

