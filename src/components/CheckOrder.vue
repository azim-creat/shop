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
      <div>
        <h4>Статус Вашего заказа:</h4>
        <h2>{{status}}</h2>
      </div>
      <button @click="handleOk">OK</button>
    </div>
  </div>
</template> 
    
<script>
import Request from "../request/request";


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
        this.status = "в ожидании";
      }
    },
    handleOk() {
      this.status = "";
      this.checkOrderStatus();
    },

    checkOrderStatus() {
      const self = this;
      

      return Request({
        task: "profiles.getRows",
        testik: 1,
        user_id: 674,
        key: "mcTnaftuzoHzWJV",
        type_id: 10000,
        profiles_ids: 64207, //номер заказа

        fields_ids: "[55892]",
      })
        .then((ans) => {
          console.log(ans);
        })
        .catch((error) => {
          console.error(error);
        });
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
  border: solid black 3px;
  border-radius: 6px;
  text-align: center;
  color: white;
  background-color: black;
}

.popup {
  position: absolute;
  display: grid;
  place-items: center;
  top: 50%;
  left: 50%;
  height: 50%;
  min-width: 50%;
  transform: translate(-50%, -50%);
  padding: 5px 15px;
  text-align: center;
  background-color: white;

  -webkit-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
}
.popup button {
  /* margin: auto; */
  padding: 19px;
  width: 100%;
}
.popup h4 {
  margin: 0;
  color: #54595c;
}
</style>