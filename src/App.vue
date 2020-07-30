<template>
  <div class="app">
    <div class="main_body">
      <router-view />
    </div>
    <div class="navbar">
      <div
        class="nav-item"
        :class="{'active':(acive_menu_item === 'home') }"
        @click="setActive('home')"
        id="home"
      >
        <router-link to="/" class="noSelect">
          <img src="./assets/navbar_icons/home.svg" />
          <span>Главная</span>
        </router-link>
      </div>
      <div
        class="nav-item"
        :class="{'active':(acive_menu_item === 'categoryes') }"
        @click="setActive('categoryes')"
        id="categoryes"
      >
        <router-link to="/categoryes" class="noSelect">
          <img src="./assets/navbar_icons/categoryes.svg" />
          <span>Категории</span>
        </router-link>
      </div>
      <div
        class="nav-item nav-item-basket"
        :class="{'active':(acive_menu_item === 'basket') }"
        @click="setActive('basket')"
        id="basket"
      >
        <router-link class="noSelect" to="/basket">
          <img src="./assets/navbar_icons/basket.svg" />
          <span>{{46}}</span>
        </router-link>
      </div>
      <div
        class="nav-item"
        :class="{'active':(acive_menu_item === 'search') }"
        @click="setActive('search')"
        id="search"
      >
        <router-link class="noSelect" to="/search">
          <img src="./assets/navbar_icons/search.svg" />
          <span>Поиск</span>
        </router-link>
      </div>
      <div
        class="nav-item"
        :class="{'active':(acive_menu_item === 'info') }"
        @click="setActive('info')"
        id="info"
      >
        <router-link class="noSelect" to="/info">
          <img src="./assets/navbar_icons/help.svg" />
          <span>Инфо</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Basket from "@/components/Basket";

export default {
  name: "App",
  components: {
    Basket,
  },
  data() {
    return {
      acive_menu_item: "categoryes",
    };
  },
  methods: {
    setActive(id) {
      const self = this;
      let element = document.querySelector(`#${self.acive_menu_item}`);
      element.classList.add("active-out");

      // element.classList.remove('active')

      setTimeout(() => {
        self.acive_menu_item = id;
      }, 200);
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
  // import func from "../../vue-temp/vue-editor-bridge";
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

*::-webkit-scrollbar {
  display: none;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
  overflow: hidden;
  padding: 5px;
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
  width: 100%;
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
.nav-item a span {
  position: relative;
  display: block;
}
.nav-item.active a span:before {
  display: block;
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(232.84deg, #ff0099 -162.71%, #ff4d00 163.83%);
  bottom: -4px;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 2px;
  animation: nav-item-in 0.4s forwards;
  /* animation: nav-item-out .4s forwards; */
}

.nav-item.active-out a span:before {
  animation: nav-item-out 0.4s forwards;
}

@keyframes nav-item-in {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
@keyframes nav-item-out {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}

.nav-item-basket {
  background: linear-gradient(232.84deg, #ff0099 -162.71%, #ff4d00 163.83%);
  border-radius: 100px;
  height: fit-content;
  padding: 10px 20px;
  position: relative;
}
.nav-item-basket img {
  height: 25px;
}
.nav-item-basket span {
  position: absolute !important;
  background-color: #fff;
  border-radius: 15px;
  padding: 2px 3px;
  font-weight: 600;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
}

router-link {
  display: flex;
  flex-direction: column;
}
</style>
