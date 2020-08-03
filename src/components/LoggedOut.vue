<template>
  <main>
    <div class="main">
      <img src="@/assets/LoggedOut/LoggedOut.svg" />
      <h2>
        <span>ОНЛАЙН ВИТРИНЫ,</span>
        <span>И ВЫ ВСЕГДА ОТКРЫТЫ</span>
      </h2>
    </div>
    <div class="buttons">
      <a>АДМИН ПАНЕЛЬ</a>
      <a>ОТКРЫТЬ</a>
    </div>

    <div class="logos">
      <span>build with</span>
      <img src="@/assets/LoggedOut/zoomia.svg" />
    </div>
  </main>
</template>

<script>
export default {
  name: "LoggedOut",
};
</script>

<style scoped>
main {
  width: 95%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  justify-content: space-around;
}
.main {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.main img {
  align-self: center;
}
h2 {
  margin: auto;
  margin-top: 30px;
  text-align: center;
  font-size: 1.2em;
}
h2 span {
  display: block;
}

.buttons {
  width: 100%;
  font-size: 13px;
}
.buttons :first-child {
  color: white;
  background-color: black;
}

a {
  display: block;
  padding: 19px 0;
  margin: 4px 0;
  border: solid black 3px;
  border-radius: 6px;
  text-align: center;
  flex-basis: 100%;
}

.logos {
  display: flex;
  align-items: center;
  font-size: 13px;
}
.logos > * {
  margin: 0 5px;
}
</style>