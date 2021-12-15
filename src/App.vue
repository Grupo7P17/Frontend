<template>
  <div id="app" class="app">

    <div class="header">

      <h1> PET HOSE CLUB </h1>
      <nav>
        <button v-if="is_auth" v-on:click="loadHome"> Inicio </button>
        <button v-if="is_auth" v-on:click="loadMascotas"> Cuenta </button>
        <button v-if="is_auth" v-on:click="logOut"> Cerrar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadLogIn" > Iniciar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadReserva" > Reservas </button>
      </nav>
    </div>
    

    <div class="main-component">
      <router-view  
        v-on:completedLogIn="completedLogIn"
        v-on:completedReserva="completedReserva"
        v-on:logOut="logOut"
      >
      </router-view>
    </div>
    

  

  </div>
</template>




<script>
export default {
  name: 'App',

  data: function(){
      return{
        is_auth: false
      }
  },

  components: {
  },

  methods:{
    verifyAuth: function() {
      this.is_auth = localStorage.getItem("isAuth") || false;
		
			if (this.is_auth == false)
        this.$router.push({ name: "logIn" });
      else
        this.$router.push({ name: "home" });
    },

    loadLogIn: function(){
      this.$router.push({name: "logIn"})
    },

    loadReserva: function(){
      this.$router.push({name: "Reserva"})
    },

    completedLogIn: function(data) {
			localStorage.setItem("isAuth", true);
			localStorage.setItem("username", data.username);
			localStorage.setItem("token_access", data.token_access);
			localStorage.setItem("token_refresh", data.token_refresh);
			alert("Autenticación Exitosa");
			this.verifyAuth();
    },

    completedReserva: function(data) {
			alert("Registro Exitoso");
			this.completedLogIn(data);
    },

    loadHome: function() {
      this.$router.push({ name: "home" });
    },

    loadMascotas: function () {
			this.$router.push({ name: "Mascotas" });
		},

    logOut: function () {
			localStorage.clear();
			alert("Sesión Cerrada");
			this.verifyAuth();
		},
  },

  created: function(){
    this.verifyAuth()
  }

}
</script>






<style>

  body{
    margin: 0 0 0 0;
  }

  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh; 
    min-height: 100px;

    background-color: #62885a ;
    color:#E5E7E9  ;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header h1{
    width: 20%;
    text-align: center;
  }

  .header nav {
    height: 100%;
    width: 20%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 20px;
  }

  .header nav button{
    color: #E5E7E9;
    background: #62885a;
    border: 1px solid #E5E7E9;

    border-radius: 5px;
    padding: 10px 20px;
  }

  .header nav button:hover{
    color: #62885a;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }

  
  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;

    background: #FDFEFE ;
  }

 
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px; 

    background-color: #283747;
    color: #E5E7E9;

  }

  .footer h2{
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
