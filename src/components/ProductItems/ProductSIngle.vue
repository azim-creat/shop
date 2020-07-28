<template>
    <div class="product-item grid-item">
            <img :src="data.image" />
            <div class="product-title list-item">
              <h3 @click="goTodetail(data.productId)">{{data.productTitle}}</h3>
            </div>
          </div>
</template>