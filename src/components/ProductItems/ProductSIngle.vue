<template>
  <div class="product-item">
    <img :src="image" />
    <div class="overlay">
      <div class="details">
        <div>
          <h3 @click="goTodetail(data.productId)">{{title}}</h3>
          <span class="price">{{price || '1000' }} USD</span>
        </div>
        <div class="sizes">
          <span class="size">S</span>
          <span class="size">M</span>
          <span class="size">L</span>
          <span class="size">XL</span>
        </div>
      </div>
      <div class="controls">
        <input type="button" value="-" />
        <span>1</span>
        <input type="button" value="+" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSingle",
  props: { title: String, image: String }
};
</script>


<style scoped>
.product-item {
  position: relative;
  padding: 0;
}

img {
  width: 100%;
  height: auto;
}
.overlay {
  box-sizing: border-box;
  padding: 16px;
  height: 100px;
  margin: auto;
  width: 100%;
  position: absolute;
  bottom: 0;

  color: white;
  background-color: rgba(0, 0, 0, 0.322);

  display: flex;
  align-items: center;
  justify-content: space-between;
}

h3 {
  margin: 0;
  font-size: 14px;
  font-weight: bold;
}

.price {
  font-size: 12px;
}

.details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.size {
  display: inline-block;
  border: 1px white solid;
  margin: 0 5px;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 10px;
}

.controls > * {
  margin: 0 3px;
}
.controls span {
  font-size: 12px;
}
input {
  height: 30px;
  width: 30px;
  border-radius: 26px;
  border: none;
}
input[value="-"] {
  background-color: #dadada;
  color: black;
}
input[value="+"] {
  background: linear-gradient(246.58deg, #ff0099 -162.71%, #ff4d00 163.83%);
  color: white;
}

@media (max-width: 320px) {
  .size {
    margin: 0 2px;
  }
}
</style>