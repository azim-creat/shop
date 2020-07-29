<template>
  <div class="info">
    <div class="info_container">
      <div
        class="info_container__img"
        :style="{'background-image': `url(.${company_info.company_image})`}"
      ></div>
      <h3 class="company_name">{{company_info.company_name}}</h3>
      <h5 class="company_address">{{company_info.company_address}}</h5>
    </div>
    <div class="info_btns">
      <div class="info_container__btn">
        <a class="info_container__numb info_btn_black noSelect" :href="`tel:${company_info.company_tel}`">
          <i class="fa 2x fa-phone" style="transform:rotate(90deg);margin-right:10px;color:white"></i>
          <span>{{company_info.company_tel}}</span>
        </a>
        <a
          class="info_container__whatsapp noSelect"
          :href="`https://api.whatsapp.com/send?phone=${company_info.company_wp_tel}&text=${getUrlMessageText(company_info.company_wp_message_text)}`"
        >
          <i class="fa fa-whatsapp" style="color:white"></i>
        </a>
      </div>
      <div>
        <a
          class="info_container__addrBtn noSelect"
          :href="`geo:${company_info.company_geo.lat},${company_info.company_geo.long};u=35`"
        >
          <i class="fa fa-map-marker" style="color:black;margin-right:10px"></i>
          <span>{{company_info.company_address}}</span>
        </a>
      </div>
    </div>
    <div class="info_images">
      <div class="info_images__item" v-for="(data,index) in products" :key="index">
        <img :src="data.image" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "info",
  data() {
    return {
      title: "Info",
      company_info: {
        company_name: "AlmaGold",
        company_address: "Г.АЛМАТЫ, УЛ. АБАЯ 1",
        company_wp_tel: "77074218438",
        company_wp_message_text:
          "Я заинтересован(-а) в покупке вашего товара на сайте OnlainVitrina",
        company_tel: "+7 777 777 77 77",
        company_geo: { lat: "43.238949", long: "76.889709" },
        company_image: require("../assets/company_icon/company_icon.svg"),
        company_tel_icon: require("../assets/company_icon/company_tel_icon.svg"),
      },
      products: [
        {
          productTitle: "ABCN",
          image: require("../assets/images/product1.png"),
          productId: 1,
        },
        {
          productTitle: "KARMA",
          image: require("../assets/images/product2.png"),
          productId: 2,
        },
        {
          productTitle: "Tino",
          image: require("../assets/images/product3.png"),
          productId: 3,
        },
        {
          productTitle: "EFG",
          image: require("../assets/images/product4.png"),
          productId: 4,
        },
        {
          productTitle: "MLI",
          image: require("../assets/images/product5.png"),
          productId: 5,
        },
        {
          productTitle: "Banans",
          image: require("../assets/images/product6.png"),
          productId: 6,
        },
      ],
    };
  },
  methods: {
    getUrlMessageText(text) {
      text.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
      return text.replace(" ", "%20");
    },
  },
};
</script>
    
<style scoped>

.info {
  margin: 0px 20px;
}
.info_container {
  width: 100%;
  height: 300px;
  text-align: center;
}
.info_container__img {
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: auto;
  height: 50%;
  width: 150px;
  background-size: cover;
  background-position: center;
}
.info_btns a {
  color: #000;
  text-decoration: none;
}
.info_btns a:visited {
  color: #000;
}
a.info_btn_black {
  color: #fff;
}
a:visited.info_btn_black {
  color: #fff;
}

.company_name {
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: -0.015em;
  margin-bottom: 10px;
}
.company_address {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-top: 5px;
}
.info_container__btn {
  width: 100%;
  justify-content: space-between;
  display: flex;
}
.info_container__whatsapp {
  display: block;
  display: flex;
  background: #000000;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 6px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  width: 44px;
  height: 44px;
  color: #ffffff;
  align-items: center;
  justify-content: center;
}
.info_container__whatsapp i {
  font-size: 20px;
}

.info_container__numb {
  display: flex;
  background: #000000;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 6px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  height: 44px;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-right: 10px;
}
.info_container__addrBtn {
  display: block;
  display: flex;
  width: 100%;
  height: 44px;
  text-align: center;
  margin-top: 20px;
  background: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 6px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
}
.info_images {
  display: flex;
  flex-wrap: wrap;
  padding: 16px 0;
}
.info_images__item {
  max-height: 60vh;
  overflow: hidden;
  display: flex;
  width: 100%;
  flex: 0 48%;
  padding-bottom: 10px;
}
.info_images__item:nth-child(2n + 1) {
  margin-right: 10px;
}
.info_images__item img {
  margin-left: -50%;
  min-height: 100% !important;
}
</style>