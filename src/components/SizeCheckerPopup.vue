<template>
  <div class="size-checker__background">
    <div class="size-checker">
      <h2>Выберите вид товара</h2>
      <button @click="setShow">закрыть</button>
      <button @click="ADD_CART_ITEM(cproduct.id)">в корзину</button>
      <div class="prod-preview">
        <img :src="cproduct.image" />
        <div class="description">
          <h3>{{ cproduct.title }}</h3>
          <span class="price">{{cproduct.price || '1000' }} USD</span>
        </div>
      </div>

      <div class="size-list">
        <ul>
          <li v-for="(item, index) in cproduct.sizes" :key="index">
            <div class="list-item">
              <span>{{item.size}} размер кольца</span>
              <div class="controls">
                <input
                  type="button"
                  value="-"
                  @click="decrease(item.size)"
                  v-show="item.quantity !== 0"
                />
                <span>{{item.quantity}}</span>
                <input type="button" value="+" @click="increase(item.size)" />
              </div>
            </div>
            <hr class="list-item-divider" width="150px" color="#E5E5E5" />
          </li>
        </ul>
      </div>
      <hr width="100%" color="#E5E5E5" />

      <div class="total-info">
        <p class="total-amount">
          <span class="total-amount__description">количество</span>
          <span class="total-amount__value">{{totalAmount}} единиц</span>
        </p>
        <p class="price">
          <span class="total-amount__description">цена</span>
          <span class="total-amount__value">{{cproduct.price}} USD</span>
        </p>
        <p class="total-price">
          <span class="total-amount__description">сумма</span>
          <span class="total-amount__value">{{totalPrice}} USD</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { store } from "@/store/vuex";
export default {
  name: "SizeChecker",
  props: {
    currentId: Number || Null,
    cproduct: Object,
    setShow: Function,
  },
  store: store,
  data() {
    return {
      product: {
        title: "Diamond rings",
        price: 15000,
        image: require("../assets/images/product3.png"),
        id: 10,
        sizes: {
          // amount of each size
          23: { size: 23, quantity: 0 },
          24: { size: 24, quantity: 0 },
          25: { size: 25, quantity: 0 },
        },
      },

      totalAmount: 0,
      totalPrice: 0,
    };
  },

  methods: {
    increase(size) {
      this.cproduct.sizes[size].quantity++;
      this.totalAmount++;
      this.totalPrice += this.cproduct.price;
    },
    decrease(size) {
      this.cproduct.sizes[size].quantity--;
      this.totalAmount--;
      this.totalPrice -= this.cproduct.price;
    },
    getStore() {
      return this.$store;
    },
    ...mapActions(["ADD_CART_ITEM"]),
  },

  computed: {
    ...mapGetters["StoreItems"],
  },
};
</script>

<style scoped>
.size-checker__background {
  position: absolute;
  height: 105vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.212);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s;
}
.size-checker__background.active {
  visibility: visible;
  opacity: 1;
}
.size-checker {
  height: 300px;
  padding: 5px;
  width: 90vw;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 152px;
  background-color: rgb(255, 255, 255);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  margin: auto;
}
img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 3px;
}

.prod-preview {
  display: flex;
  align-items: center;
}
.prod-preview h3 {
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 10px;
  font-weight: bold;
  font-size: 12px;
}

.list-item {
  display: flex;
  justify-content: space-between;
}
.list-item-divider {
  float: left;
  margin: 0;
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
.controls > * {
  margin: 0 3px;
}
.controls span {
  font-size: 12px;
}
.total-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: red;
}
p span {
  display: block;
}

.total-amount__description {
  font-size: 10px;
}
.total-amount__value {
  font-weight: bold;
  font-size: 14px;
}
</style>