<template>
  <div class="app">      
      <div class="main_body">
       <transition name="moveInUp">
         <router-view/>
       </transition>
      </div>


      <div class="navbar">
            <div class="nav-item">
              <router-link to="/" class="navbar-brand"><img src="./assets/navbar_icons/home.svg"></img><span>Главная</span></router-link>
            </div>
            <div class="nav-item">
              <router-link  to="/categoryes"><img src="./assets/navbar_icons/categoryes.svg"><span>Категории</span></router-link>
            </div>
            <div class="nav-item nav-item-basket">
              <router-link class="nav-link" to="/services"><img src="./assets/navbar_icons/basket.svg"><span></span></router-link>
            </div>
            <div class="nav-item">
             <router-link class="nav-link" to="/search"><img src="./assets/navbar_icons/search.svg"><span>Поиск</span></router-link>
            </div>
            <div class="nav-item">
             <router-link class="nav-link" to="/help"><img src="./assets/navbar_icons/help.svg"><span>Инфо</span></router-link>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data ()
  {
    return {
      
    }
  },
  methods:
  {
    showAlert()
    {
      alert(111)
    },
    showAlert2()
    {
      alert(222)
    }
  },
  computed :{
    FIRST_COMPUTED_VALUE(){
      return this.$store.state.first_value
    }
  },

  watch:{
    FIRST_COMPUTED_VALUE(val,old_val){
      console.log(val,old_val)
    }
  },
  mounted(){
    console.log('component mounted');
    //this.showAlert();
    //this.showAlert2();
    console.log(this.FIRST_COMPUTED_VALUE)
    this.$store.dispatch("SET_TO",  ["first_value", 23455])
  }
}
</script>

<style>
  body{
    margin:0;
    padding:0;
    font-family: 'Roboto', sans-serif;
  }
  .app{
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 100vh;
    overflow: hidden;
  }
  .main_body{
    flex: 2;
    overflow: scroll;
    height: 100px;
    height: -webkit-fill-available;
    height: 100%;
  }
  .navbar{
    flex: 1;
    max-height: 60px;
    min-height: 60px;
    display:flex;
    justify-content:space-around;
    padding:15px 0px;
  }
  .nav-item{
    padding : 10px;
    text-align:center;
    
  }
  .nav-item a{
    text-decoration:none;
  }
  .nav-item img{
    height : 25px;
  }
  .nav-item-basket{
    background: linear-gradient(232.84deg, #FF0099 -162.71%, #FF4D00 163.83%);
    border-radius: 20px;
  }
  router-link{
    display:flex;
    flex-direction:column;
  }
</style>
