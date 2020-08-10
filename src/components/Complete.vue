<template>
  <main>
    <h1>Готово</h1>
    <img src="@/assets/Complete/complete.svg" />
    <span>№ 468131384</span>
    <p>в случае возникновения вопросов, сообщите ваш номер заказа оператору</p>
  </main>
</template>

<script>
export default {
  name: "Complete",
  mounted: function () {
    this.$store.commit("CLEAN_CART");
  },
};
</script>

<style scoped>
main {
  text-align: center;
  height: 100%;
  background-color: rgb(255, 255, 255);

  display: grid;
  grid-template-rows: 1fr 2fr 1fr 2fr;
}
h1 {
  font-family: "Comfortaa";
}
img {
  height: 100%;
  width: auto;
  justify-self: center;
}
span {
  display: block;
  font-weight: bold;
  font-size: 1.5em;
  align-self: end;
}

</style>