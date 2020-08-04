<template>
  <div class="controls">
    <input type="button" value="-" @click="decrease(size)" v-show="toIncrease" />
    <span>{{toIncrease}}</span>
    <input type="button" value="+" @click="increase(size)" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "QuantityControls",
  props: {
    increase: Function,
    decrease: Function,
    toIncrease: Number,
    size: Number,
    itemId: Number,
  },
  computed: {
    ...mapGetters(["StoreItems"]),
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
</style>
