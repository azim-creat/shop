<template>
  <div class="app ios-fix">
    <div class="main_body">
      <!-- <Checkout /> -->
      <transition name="fade">
        <router-view />
      </transition>
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
          <span>{{CART_ITEM_COUNT}}</span>
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

    <SizeCheckerPopup :item="POP_UP_ITEM" v-show="Object.entries(POP_UP_ITEM).length" />
  </div>
</template>

<script>
import SizeCheckerPopup from "@/components/SizeCheckerPopup";
import Request from "./request/request";
import Checkout from "@/components/Checkout";
export default {
  name: "App",
  components: {
    Checkout,
    SizeCheckerPopup,
  },
  data() {
    return {
      acive_menu_item: "categoryes",
    };
  },
  methods: {
    setActive(id) {
      const self = this;

      console.log(self.acive_menu_item, this.$router.currentRoute.fullPath);
      if (self.acive_menu_item === "home" && id == "home") return;
      if (
        this.$router.currentRoute.fullPath.indexOf(self.acive_menu_item) != 1 ||
        self.acive_menu_item === "home"
      ) {
        let element = document.querySelector(`#${self.acive_menu_item}`);
        element.classList.add("active-out");
        setTimeout(() => {
          self.acive_menu_item = id;
        }, 200);
      } else {
      }
    },
  },
  computed: {
    FIRST_COMPUTED_VALUE() {
      return this.$store.state.first_value;
    },
    POP_UP_ITEM() {
      return this.$store.state.popUpItem;
    },
    CART_ITEM_COUNT() {
      const cart = this.$store.state.cartItems;
      let ans = 0;
      const calcCountTypes = (obj) => {
        var sum = 0;

        for (var el in obj) {
          if (obj.hasOwnProperty(el)) {
            sum += parseFloat(obj[el]);
          }
          return sum;
        }
      };

      for (const key in cart) {
        if (cart.hasOwnProperty(key)) {
          const element = cart[key];
          if (typeof element === "number") {
            ans += element;
          } else if (typeof element === "object") {
            ans += calcCountTypes(element);
          }
        }
      }

      return ans;
    },
  },

  watch: {
    FIRST_COMPUTED_VALUE(val, old_val) {
      console.log(val, old_val);
    },
  },
  mounted() {
    this.$store.dispatch("FETCH_FROM_SERVER");
    this.$store.dispatch("FETCH_CATEGORIES");
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
* {
  -webkit-overflow-scrolling: auto !important;
}
.ios_fix {
  -webkit-overflow-scrolling: auto !important;
}
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  box-sizing: border-box;
}
* {
  scrollbar-width: none;
}
.name_category {
  margin-top: 25px;
  font-family: "Comfortaa", cursive;
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
.isNotVisible {
  display: none;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
  overflow: hidden;
  padding: 0 10px;
}
.main_body {
  flex: 2;
  overflow-y: scroll;
  height: 100px;
  height: -webkit-fill-available;
  height: 100%;
  padding-bottom: 90px;
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
  flex: 1;
  overflow: hidden;
  max-width: fit-content;
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
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
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
  max-width: fit-content;
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

@media only screen and (min-width: 600px) {
  .app {
    max-width: 900px;
    margin: 0 auto;
    padding: 5px;
  }
  .main_body {
    padding-bottom: 20px;
    padding-top: 70px;
  }
  .navbar {
    bottom: unset;
    top: 0;
    border-top: 0;
    border-bottom: 2px solid #b3b3b3;
  }
  .nav-item-basket {
    order: 5;
  }
}
</style>
