<template>
  <div class="app">
    <div class="main_body">
      <transition name="moveInUp">
        <router-view />
      </transition>
    </div>

    <div class="navbar">
      <div class="nav-item">
        <router-link to="/" class="noSelect">
          <img src="./assets/navbar_icons/home.svg" />
          <span>Главная</span>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to="/categoryes" class="noSelect">
          <img src="./assets/navbar_icons/categoryes.svg" />
          <span>Категории</span>
        </router-link>
      </div>
      <div class="nav-item nav-item-basket ">
        <router-link class="noSelect" to="/services">
          <img src="./assets/navbar_icons/basket.svg" />
          <span></span>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link class="noSelect" to="/search">
          <img src="./assets/navbar_icons/search.svg" />
          <span>Поиск</span>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link class="noSelect" to="/info">
          <img src="./assets/navbar_icons/help.svg" />
          <span>Инфо</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    showAlert() {
      alert(111);
    },
    showAlert2() {
      alert(222);
    },
  },
  computed: {
    FIRST_COMPUTED_VALUE() {
      return this.$store.state.first_value;
    },
  },

  watch: {
    FIRST_COMPUTED_VALUE(val, old_val) {
      console.log(val, old_val);
    },
  },
  mounted() {
    // console.log('component mounted');
    // //this.showAlert();
    // //this.showAlert2();
    // console.log(this.FIRST_COMPUTED_VALUE)
    // this.$store.dispatch("SET_TO",  ["first_value", 23455])
  },
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
.noSelect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
.noSelect:focus {
  outline: none !important;
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
  border-top: 2px solid #b3b3b3;
  align-items: center;
  position: fixed;
  background-color: #fff;
  bottom: 0;
  left: 0;
  padding: 5px 0;
}
.nav-item {
  padding: 10px;
  text-align: center;
}
.nav-item a {
  text-decoration: none;
  font-size: 12px;
  color: #000;
  height: fit-content;
  display: block;
}
.nav-item a:visited {
  color: #000;
}

.nav-item img {
  height: 15px;
}

.nav-item-basket {
  background: linear-gradient(232.84deg, #ff0099 -162.71%, #ff4d00 163.83%);
  border-radius: 100px;
  height: fit-content;
  padding: 10px 20px;
}
.nav-item-basket img {
  height: 25px;
}

router-link {
  display: flex;
  flex-direction: column;
}
</style>
