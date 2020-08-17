<template>
  <div class="container">
    <div class="grid-container">
      <h1>Проверка статуса заказа</h1>
      <div class="input-wrapper">
        <span>№</span>
        <input type="text" placeholder="введите номер заказа" v-model="orderId" />
      </div>
      <ul class="orders">
        <!-- ДОБАВИТЬ СКРОЛЛ -->
        <li class="orders-item" v-for="order in ordersFromStorage" :key="order.orderId">
          <div class="orders-item_column">
            <span>Заказ №{{order.orderId}}</span>
            {{order.date}}
          </div>
          <button class="orders-item_button" @click="checkOrderStatus(order.orderId)">ПРОВЕРИТЬ</button>
        </li>
      </ul>
      <button @click="checkOrder">ПРОВЕРИТЬ</button>
    </div>
    <div class="popup" v-show="status.showStatus">
      <div>
        <h4>Статус Вашего заказа:</h4>
        <h2>{{status.sts}}</h2>
        <p>{{status.full_name}}</p>
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
    return {
      orderId: "",
      status: {
        full_name: "",
        sts: "",
        showStatus: false,
      },
      ordersFromStorage: JSON.parse(localStorage.getItem("orders")),
    };
  },
  methods: {
    checkOrder() {
      if (this.orderId == "") {
        alert("введите номер заказа");
      } else {
        this.checkOrderStatus(this.orderId);
      }
    },
    handleOk() {
      this.status.showStatus = false;
    },

    checkOrderStatus(orderId) {
      const self = this;

      return Request({
        task: "profiles.getRows",
        testik: 1,
        user_id: 674,
        key: "mcTnaftuzoHzWJV",
        type_id: 10000,
        profiles_ids: orderId, //номер заказа
        fields_ids: "[55892]",
      })
        .then((ans) => {
          const dateOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
            timezone: "UTC",
            hour: "numeric",
            minute: "numeric",
          };
          const ISOregexp = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;

          const value = ans.data.value[orderId];
          let full_date = value.full_name;
          const date = full_date.match(ISOregexp)[0];
          const frendlyDate = new Date(date).toLocaleString("ru", dateOptions);
          full_date = full_date.replace(ISOregexp, frendlyDate);

          this.status.showStatus = true;
          this.status.sts =
            value.field_55892 == null ? "Неподтверждено" : value.field_55892;
          this.status.full_name = full_date;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {},
};
</script>

<style scoped>
.container {
  position: relative;

  height: 78vh;
  width: 100%;
}
.grid-container {
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-rows: auto 1fr 1fr auto;
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
  cursor: pointer;
}

.orders {
  padding: 0;
  list-style: none;
  max-height: 95%;
  overflow-x: scroll;
}
.orders-item {
  max-width: 500px;
  margin: 5px auto;
  display: flex;
  justify-content: space-between;
}
.orders-item_column {
  display: flex;
  width: fit-content;
  flex-direction: column;
  justify-content: space-between;
}
.orders-item_button {
  padding: 5px 10px;
  outline: none;
  font-size: 10px;
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