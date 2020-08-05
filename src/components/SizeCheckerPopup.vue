<template>
  <div class="size-checker__background">
    <div class="size-checker">
      <h2>Выберите вид товара</h2>

      <div class="prod-preview">
        <img :src="item.image" />
        <div class="description">
          <h3>{{ item.title}}</h3>
          <span class="price">{{ item.price}}</span>
        </div>
      </div>

      <div class="size-list">
        <ul>
          <li v-for="(tag, tag_index) of item.tags" :key="tag_index">
            <div class="list-item">
              <span>{{tag.title}}</span>

              <div class="controls">
                <input
                  type="button"
                  value="-"
                  @click="decrease(tag_index)"
                  v-show="getQuantityInCart(tag_index)"
                />
                <span>{{getQuantityInCart(tag_index)}}</span>
                <input type="button" value="+" @click="increase(tag_index)" />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="total-info">
        <p class="total-amount">
          <span class="total-amount__description">количество</span>
          <span class="total-amount__value">{{"totalAmount"}} единиц</span>
        </p>
        <p class="price">
          <span class="total-amount__description">цена</span>
          <span class="total-amount__value">{{"cproduct.price"}} USD</span>
        </p>
        <p class="total-price">
          <span class="total-amount__description">сумма</span>
          <span class="total-amount__value">{{"totalPrice"}} USD</span>
        </p>
      </div>
      <button @click="clousePopUp">ГОТОВО</button>
    </div>
  </div>
</template>

<script>
import QuantityControls from "@/components/QuantityControls";
import { mapGetters, mapActions } from "vuex";
import { store } from "@/store/vuex";
export default {
  name: "SizeChecker",
  props: {
    item: Object,
  },
  components: {
    QuantityControls,
  },
  store: store,
  data() {
    return {
      totalPrice: 0,
    };
  },

  methods: {
    increase(tag_id) {
      this.$store.dispatch("INCREASE_FROM_POP_UP", tag_id);
    },
    decrease(tag_id) {
      this.$store.dispatch("DECREASE_FROM_POP_UP", tag_id);
    },
    clousePopUp() {
      this.$store.dispatch("CLOUSE_POP_UP", {});
    },
    getQuantityInCart(tag_index) {
      if (this.CartItems[this.item.id] === undefined) {
        return 0;
      } else {
        return this.CartItems[this.item.id][tag_index];
      }
    },
  },

  computed: {
    ...mapGetters(["StoreItems", "CartItems"]),
  },
};
</script>

<style scoped>
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

.size-checker__background {
  position: absolute;
  height: 105vh;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s;
  visibility: visible;
  opacity: 1;
}

.size-checker {
  padding: 15px;
  width: 90vw;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0px;
  background-color: rgb(255, 255, 255);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  margin: auto;
}
.size-checker h2 {
  font-family: "Comfortaa";
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
.size-list li::after {
  content: "";
  display: inline-block;
  width: 150px;
  height: 3px;
  background-color: #e5e5e5;
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
button {
  display: block;
  width: 100%;
  padding: 10px 0;
  margin: 4px 0;
  border: solid black 3px;
  border-radius: 6px;
  text-align: center;
  color: white;
  background-color: black;
}
</style>