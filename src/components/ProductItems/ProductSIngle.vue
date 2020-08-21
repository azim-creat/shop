<template>
  <div class="product-item" v-lazy:background-image="image">
    <div class="overlay">
      <div class="goToProduct" @click="goToProduct">
        <div class="details">
          <div>
            <h3 @click="goTodetail(data.productId)">{{title || "Без названия"}}</h3>
            <p class="price">{{ price|| 'Цена не указана' }} KZT</p>
            <span>#{{articul}}</span>
          </div>
          <div class="tags">
            <span class="tag" v-for="(tag, tag_index) of tags" :key="tag_index">{{tag.title}}</span>
          </div>
        </div>
      </div>
      <div class="controls">
        <input
          class="noSelect"
          v-show="getQuantity()"
          type="button"
          value="-"
          @click="decrease(itemId)"
        />
        <span class="noSelect" v-show="getQuantity()">{{getQuantity()}}</span>
        <input class="noSelect" type="button" value="+" @click="increase(itemId)" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductSingle",
  props: {
    title: String,
    image: String,
    add: Function,
    itemId: [Number, String],
    tags: Object,
    price: Number,
    item: Object,
    articul: String,
    decrease: Function,
    increase: Function,
  },
  data() {
    return { id: this.itemId };
  },
  methods: {
    SET_SIZE(size) {
      const id = this.id;
      this.$store.dispatch("SET_SIZE", { id, size });
    },
    getCurrentSize(sizeToCheck) {
      if (this.CartItems[this.id]) {
        return this.CartItems[this.id].size == sizeToCheck;
      }
    },
    getQuantity() {
      let item_in_cart = this.CartItems[parseInt(this.itemId, 10)];
      if (item_in_cart === undefined) return 0;
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
    goToProduct() {
      this.$router.push({
        name: "product",
        params: { data: this.$props.item },
      });
    },
  },
  computed: { ...mapGetters(["CartItems"]) },
};
</script>


<style scoped>
.product-item {
  display: block;
  position: relative;
  padding: 0;
  min-height: 150px;
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  width: 100%;
  height: auto;
  display: block;
}
.overlay {
  box-sizing: border-box;
  padding: 16px;
  height: 100px;
  margin: auto;
  width: 100%;
  position: absolute;
  bottom: 0;

  color: white;
  background-color: rgba(0, 0, 0, 0.322);

  display: flex;
  align-items: center;
  justify-content: space-between;
}

h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
}

.price {
  font-size: 12px;
  margin-bottom: 0;
}

.details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.size {
  display: inline-block;
  border: 1px white solid;
  margin: 0 5px;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 10px;
}
.size.active {
  background-color: black;
  color: white;
  border: 1px black solid;
}
.controls > * {
  margin: 0 3px;
}
.controls span {
  font-size: 12px;
  margin-bottom: 0;
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

.goToProduct {
  cursor: pointer;
}

@media (max-width: 320px) {
  .size {
    margin: 0 2px;
  }
}
</style>