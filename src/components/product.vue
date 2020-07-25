<template>
	<div class="product">
		<h1 class="product_title">{{product_info.product_title}}</h1>
        <h4 class="product_price">{{product_info.product_price}} $</h4>
        <div class="product_img" :style="`background-image: url(.${main_image || product_info.product_image[0]})`"></div>
        <div class="product_add_images">
            <div class="product_add_img" v-for="(product_img, index) in product_info.product_image" :key="index" :style="`background-image: url(.${product_img})`"></div>
        </div>
        <div class="product_choose">
            <div class="product_choose_size">
                <div class="product_choose_size__items">
                    <span class="product_choose_size__item" v-for="(item_size, index) in product_info.product_item_sizes" :key="index">{{item_size}}</span>
                </div>
                <div class="product_choose_item__count">
                    <span class="product_choose_item_count__minus">-</span>
                    <span class="product_choose_item_count__number">1</span>
                    <span class="product_choose_item_count__plus">+</span>
                </div>
            </div>
        </div>
        <div class="product_description">
            <h4 style="margin-bottom:16px">ХАРАКТЕРИСТИКИ</h4>
            <ul>
                <li v-for="(descrip, index) in product_info.description" :key="index">{{descrip}}</li>
            </ul>       
        </div>  
    </div>
    
</template>
<script>
	export default{
		
		data () {
            return {
                main_image      :   false,
                product_info:
                {
                    product_title   :   'Boble earring',
                    product_id      :   456,
                    product_price   :   15000,
                    
                    description     :   ['серьги женские','цвет металла : красное золото','10 брилиантов 0,002 карата'],
                    product_image   :   [
                                            require('../assets/images/product3.png'),
                                            require('../assets/images/product3.png'),
                                            require('../assets/images/product3.png'),
                                            require('../assets/images/product3.png'),
                                            require('../assets/images/product3.png'),
                                            require('../assets/images/product3.png')
                                        ], 
                    product_item_sizes  :   ['S','M','L','XL']   
                },
                
            }
        },
        
        methods : {
            setParent(item,index){
                this.parent = item
                this.childs = item.childs
            },
            backToParent(item,index)
            {

            }
        },
        mounted(){
            
        }
	}
</script>
    
<style scoped>
    .product_title{
        font-family: 'Comfortaa';
        font-style: normal;
        font-weight: bold;
    }
    .product_price{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
    }
    .product{
        height:100%;
        width:100%;
        margin: 10px 16px;
    }
    .product_img{
        height: 60vw;
        width:  calc(100vw - 36px);
        background-size: cover;
        background-position: center;
        border-radius: 12px;
    }
    .product_add_images{
        margin-top : 16px;
        height: 20vw;
        width:  calc(100vw - 36px);
        display:flex;
        overflow-x:scroll;
        justify-content:space-between;
    }
    .product_add_img{
        height: 20vw;
        width:  30%;
        background-size: cover;
        background-position: center;
        border-radius: 12px;
    }
    .product_choose_size{
        
        margin-top  : 16px;
        display:flex;
        justify-content:space-between; 
    }
    .product_choose_size__items{
        width : auto;
        display : flex;
        justify-content:space-between;
    }
    .product_choose_item__count{
        width:auto;
        display:flex;
        justify-content:space-between;
    }
    .product_choose_size__item{
        
        padding :   5px;
        border : 1px solid #000000;
        border-radius: 4px; 
    }
    .product_choose_item_count__minus{
        width:5vw;
        text-align:center;
        padding : 5px;
        border-radius:30px;
        background-color : #DADADA;
    }
    .product_choose_item_count__plus{
        width:5vw;
        text-align:center;
        padding : 5px;
        border-radius:30px;
        background : linear-gradient(246.58deg, #FF0099 -162.71%, #FF4D00 163.83%);
    }
</style>