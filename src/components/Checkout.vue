<template>
  <div class="checkout">
    <h1>Ваши контакты</h1>
    <div class="checkout__inputs">
      <label>
        <span>имя</span>
        <input
          id="name"
          v-model="contacts.name"
          type="text"
          name="name"
          :class="{valid: validateName()}"
        />
      </label>
      <label>
        <span>телефон</span>
        <input type="num" v-model="contacts.phone" :class="{valid: validatePhone()}" />
      </label>
      <label>
        <span>адрес доставки</span>
        <input type="text" v-model="contacts.address" :class="{valid: validateAddress()}" />
      </label>
      <label>
        <span>способ оплаты</span>
        <vSelect
          class="style-chooser"
          :options="paymentOptions"
          v-model="contacts.payment"
          :class="{valid: validatePayment()}"
        />
      </label>

      <button class="save_btn" @click="send()">ОТПРАВИТЬ</button>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
import Request from "../request/request";

name: "Checkout";
export default {
  components: {
    vSelect,
  },
  data() {
    return {
      contacts: {
        name: "",
        phone: "",
        address: "",
        payment: "",
      },
      paymentOptions: ["наличка", "перевод", "карта"],
      orderId: undefined,
      isLoading: undefined,
    };
  },
  methods: {
    validatePhone: function () {
      const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      return re.test(this.contacts.phone);
    },
    validateName: function () {
      if (this.contacts.name == "") {
        return false;
      } else {
        return true;
      }
    },
    validateAddress: function () {
      if (this.contacts.address == "") {
        return false;
      } else {
        return true;
      }
    },
    validatePayment: function () {
      if (this.contacts.payment == "") {
        return false;
      } else {
        return true;
      }
    },
    collectBasket() {
      let basket = this.$store.state.cartItems;
      let all_items = this.$store.state.storeItems;
      let basket_to_send = {};

      for (const key in basket) {
        if (basket.hasOwnProperty(key)) {
          const element = basket[key];

          basket_to_send[key] = {
            count: element,
            full_name: all_items[key].productTitle + " id" + key,
            price: all_items[key].price,
            profile_id: key,
          };
        }
      }
      return basket_to_send;
    },
    sendOrderToServer(data) {
      const self = this;
      let date = new Date();
      date = date.toISOString();
      return Request({
        task: "profiles.append",
        testik: 1,
        user_id: 674,
        key: "mcTnaftuzoHzWJV",
        type_id: 10000,
        full_name: "Заявка от " + data.name + " на " + date, //
        fields: JSON.stringify({
          111: "Заявка от " + data.name + " на " + date, //название заявки
          1001: 64126, // тип сделки: Заявка
          // 58626:  // корзина товаров,
          // 55892
          121: data.phone,
          2: date,
          126: data.address,
          19: { payment_type: data.payment, basket: self.collectBasket() }, //способ оплаты
        }),
      }).then((ans) => {
        return ans.data.new_profile_id;
      });
    },

    send: function () {
      // если все поля заполнены правильно - в массиве будут только true
      const self = this;
      const isGood = [];
      isGood.push(this.validatePhone());
      isGood.push(this.validateName());
      isGood.push(this.validateAddress());
      isGood.push(this.validatePayment());
      // ищем false внутри массива. если не находим - allFilledCorrectly остается undefined
      const allFilledCorrectly = isGood.find((elem) => {
        if (elem == false) {
          return true;
        }
      });
      // если allFilledCorrectly == false - некоторое поле не заполнено правильно
      if (allFilledCorrectly == undefined) {
        self
          .sendOrderToServer(this.contacts)
          .then((new_profile_id) => {
            this.$store.dispatch("CREATE_ORDER", new_profile_id);
            this.$router.push(`/complete/${new_profile_id}`);
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        alert("Вы неправильно заполнили контактные данные");
      }
    },
  },
};
</script>

<style scoped>
.checkout__inputs {
  padding: 5px;
  display: grid;
  gap: 25px;
  justify-items: stretch;
}
h1 {
  font-family: "Comfortaa";
}
label,
.payment-checker {
  position: relative;
}
label > span,
.payment-checker > span {
  padding: 0 5px;
  display: block;
  position: absolute;
  background-color: white;
  z-index: 10;
  left: 5px;
  top: -10px;
}
input,
.payment-checker > div {
  padding: 22px 17px 12px;
  padding-right: 0;
  width: 90%;
  margin: auto;
  border: solid black 2px;
  font-weight: 600;
}
.save_btn {
  display: block;
  padding: 19px 0;
  margin: 4px 0;
  border: solid black 3px;
  border-radius: 6px;
  text-align: center;
  color: white;
  background-color: black;
}
input.valid {
  background-color: rgba(0, 255, 0, 0.26);
}
@media (min-width: 900px) {
  .checkout {
    max-width: 70%;
    margin: auto;
  }
}
</style>

<style>
/* стили для дропдауна */

.vs__search::placeholder,
.style-chooser .vs__dropdown-toggle {
  border: none;
  color: black;
  text-transform: lowercase;
  font-variant: small-caps;
}
.vs__dropdown-toggle {
  padding: 22px 10px 12px;
 padding-right: 7px;
  background: white;
  display: flex;
  justify-content: space-between;
}
#vs1__listbox.vs__dropdown-menu {
  list-style: none;
  padding: 0;
}

#vs1__listbox.vs__dropdown-menu {
  list-style: none;
  margin: 20px 5px;
}
.vs__dropdown-option {
  margin: 10px 0;
}
.vs__search,
.vs__clear {
  display: none;
}
.style-chooser {
  width: 93%;
  border: solid black 2px;
  font-weight: 600;
}
.style-chooser.valid,
.style-chooser.valid > * {
  background-color: #bdffbd;
}
</style>