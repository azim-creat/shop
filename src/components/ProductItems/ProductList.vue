<template>
  <div class="product-item">
    <router-link to="/product">
      <img :src="image" />
    </router-link>
    <div class="description">
      <div class="description-text">
        <h3>{{ title }}</h3>
        <span class="price">{{price || '1000' }}</span>
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
</template>

<script>
export default {
  name: "ProductList",
  props: { title: String, image: String }
};
</script>

<style scoped>
.product-item {
  max-height: 100px;
  height: 100px;
  display: flex;
  margin: 10px 0;
  align-items: center;
  justify-content: space-between;
}
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 3px;
}
h3 {
  margin: 0;
  font-weight: bold;
}

.description {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.size {
  display: inline-block;
  border: 1px black solid;
  margin: 0 5px;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 10px;
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
.controls > * {
  margin: 0 3px;
}
.controls span {
  font-size: 12px;
}

@media (max-width: 320px) {
  .size {
    margin: 0 2px;
  }
}
</style>

