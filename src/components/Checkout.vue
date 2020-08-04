<template>
  <div class="checkout">
    <h1>Ваши контакты</h1>
    <div class="checkout__inputs">
      <label>
        <span>имя</span>
        <input type="text" />
      </label>
      <label>
        <span>телефон</span>
        <input type="text" />
      </label>
      <label>
        <span>адрес доставки</span>
        <input type="text" />
      </label>
      <label>
        <span>способ оплаты</span>
        <input type="text" />
      </label>
      <button class="save_btn">ОТПРАВИТЬ</button>
    </div>
  </div>
</template>

<script>
name: "Checkout";
export default {};
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
  width: 85%;
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
</style>