<template>
  <main>
    <h1>Готово</h1>
    <img src="@/assets/Complete/Complete.svg" />
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
}
h1 {
  font-family: "Comfortaa";
}
img {
  margin: 37px auto;
}
span {
  display: block;
}
</style>