<template>
	<div class="categoryes">
		<h1 class="name_category">Категории</h1>
        <div class="category-item" v-for="(item,index) in products" :key="index">
            <div class="category-item__img" :style="`background-image: url(.${item.image})`"></div>
            <span class="category-item__title">
                <h3>{{item.productTitle}}</h3>
                <h5>{{item.count}} товаров</h5>
            </span>
            <span class="category-item__arrow-right"></span>
        </div>
	</div>
</template>
<script>
	export default{
		name:'categoryes',
		data () {
        return {
            title: 'Home',
            products:[
                {
                    productTitle:"Серьги",
                    count   :   1245,
                    image       : require('../assets/images/product1.png'),
                    productId:1
                },
                {
                    productTitle:"Кольца",
                    count   :   562,
                    image       : require('../assets/images/product2.png'),
                    productId:2
                },
                {
                    productTitle:"Брaслеты",
                    count   :   896,
                    image       : require('../assets/images/product3.png'),
                    productId:3
                }
            ]
        }
    },
	}
</script>
    
<style scoped>
    
    .category-item{
          display:flex;
          justify-content:space-between;
          margin:10px;
          background: #000000;
          border-radius: 12px;
          overflow:hidden;
          height:100px; 
          color:#FFFFFF;
    }
    .category-item__img{
        height: 100%;
        width: 150px;
        background-size: cover;
        background-position: center;
    }
    .category-item span{
        display:flex;
        flex-direction:column;
        margin-left:20px
    }
	.name_category
    {
        margin-top:70px;
        margin-left:20px;
        font-family: 'Comfortaa', cursive;
    }
    .category-item__title{
        font-family: 'Roboto';
        font-style: normal;
        font-size: 18px;
        line-height: 21px;
    }
    .category-item__title h3{
        margin-bottom : 5px;
    }
    .category-item__title h5{
        margin-top : 5px;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
    }
    .category-item__arrow-right{
        display: block;
        width: 20px;
        height: 20px;
        margin-top:10%;
        margin-right:5%;
        border-top: 2px solid #FFFFFF;
        border-left: 2px solid #FFFFFF;
        transform: rotate(135deg);
        text-align:right;
    }
</style>