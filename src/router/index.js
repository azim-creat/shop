import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home";
import product from "@/components/product";
import basket from "@/components/Basket";
import categoryes from "@/components/categoryes";
import search from "@/components/search";
import info from "@/components/info";
import Checkout from "@/components/Checkout";
import Complete from "@/components/Complete";
import CheckOrder from "@/components/CheckOrder";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/categoryes",
      name: "categoryes",
      component: categoryes
    },
    {
      path: "/basket",
      name: "basket",
      component: basket
    },
    {
      path: "/info",
      name: "info",
      component: info
    },
    {
      path: "/search",
      name: "search",
      component: search
    },
    {
      path: "/product/:id",
      name: "product",
      component: product
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout
    },
    {
      path: "/complete",
      name: " complete",
      component: Complete
    },
    {
      path: "/CheckOrder",
      name: " CheckOrder",
      component: CheckOrder
    }
  ]
});
