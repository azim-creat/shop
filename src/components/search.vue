<template>
	<div class="search">
		<h1 class="name_category">Поиск</h1>
		<input type="search" class="search__tag" id="gsearch" name="gsearch" placeholder="Поиск товаров" size="40px">			
	</div>
</template>
<script>
	export default{
		name:'search',
		data (){
			return{
				title:'Поиск'
			}
		}
	}
</script>

<style scoped>
    .search{
        margin-left:20px;
        margin-right:20px;
    }
	.name_category
    {
        margin-top:70px;
        font-family: 'Comfortaa', cursive;
    }	
    .search__tag{
        width:100%;
        height:50px;
        font-size:20px;
    }
</style>