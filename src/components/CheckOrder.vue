<template>
  <div class="container">
    <div class="grid-container">
      <h1>Проверка статуса заказа</h1>
      <div class="input-wrapper">
        <span>№</span>
        <input type="text" placeholder="введите номер заказа" v-model="orderId" />
      </div>
      <button @click="checkOrder">ПРОВЕРИТЬ</button>
    </div>
    <div class="popup" v-show="status">
      <h4>Ваш заказ в {{status}}</h4>
      <button @click="handleOk">OK</button>
    </div>
  </div>
</template> 
    
<script>
export default {
  name: "CheckOrder",
  data() {
    return { orderId: "", status: "" };
  },
  methods: {
    checkOrder() {
      if (this.orderId == "") {
        alert("введите номер заказа");
      } else {
        this.status = "ожидании";
      }
    },
    handleOk() {
      this.status = "";
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;

  height: 100%;
  width: 100%;
}
.grid-container {
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-auto-rows: auto 1fr auto;
  grid-auto-columns: 100%;
  height: 100%;
  width: 100%;
}
h1 {
  font-family: Comfortaa;
  font-weight: bold;
}
.input-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
input {
  width: 79%;
  padding: 12px 17px;
  margin-left: 5px;
  border: solid black 2px;
  font-weight: 600;
}
span {
  font-size: 20px;
  font-weight: bold;
}
button {
  display: block;
  padding: 19px 0;
  margin: 4px 0;
  border: solid black 3px;
  border-radius: 6px;
  text-align: center;
  color: white;
  background-color: black;
}

.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
  text-align: center;
  background-color: white;

  -webkit-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
}
.popup button {
  margin: auto;
  padding: 19px;
  width: 95%;
}
</style>