<template>
  <div class="app">
    <div class="main_body">
      <transition name="moveInUp">
        <router-view />
        <Basket />
      </transition>
    </div>

    <div class="navbar">
      <div class="nav-item">
        <router-link to="/" class="navbar-brand">
          <img src="./assets/navbar_icons/home.svg" />
          <span>Главная</span>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to="/categoryes">
          <img src="./assets/navbar_icons/categoryes.svg" />
          <span>Категории</span>
        </router-link>
      </div>
      <div class="nav-item nav-item-basket">
        <router-link class="nav-link" to="/services">
          <img src="./assets/navbar_icons/basket.svg" />
          <span></span>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link" to="/search">
          <img src="./assets/navbar_icons/search.svg" />
          <span>Поиск</span>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link" to="/info">
          <img src="./assets/navbar_icons/help.svg" />
          <span>Инфо</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import func from "../../vue-temp/vue-editor-bridge";
import { types } from "@/store/vuex.js";
import Basket from "@/components/Basket";

export default {
  name: "App",
  components: {
    Basket
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  box-sizing: border-box;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
  overflow: hidden;
}
.main_body {
  flex: 2;
  overflow-y: scroll;
  height: 100px;
  height: -webkit-fill-available;
  height: 100%;
}
.navbar {
  flex: 0;
  max-height: fit-content;
  height: fit-content;
  display: flex;
  justify-content: space-around;
}
.nav-item {
  padding: 10px;
  text-align: center;
}
.nav-item a {
  text-decoration: none;
  font-size: 14px;
  color: #000;
}
.nav-item a:visited {
  color: #000;
}

.nav-item img {
  height: 25px;
}

.nav-item-basket {
  background: linear-gradient(232.84deg, #ff0099 -162.71%, #ff4d00 163.83%);
  border-radius: 100px;
  height: fit-content;
  padding: 10px 20px;
}

router-link {
  display: flex;
  flex-direction: column;
}
</style>
