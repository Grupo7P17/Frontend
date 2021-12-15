<template>

   <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-secondary">Catalogo</a></li>
          <li><a href="reserva.html" class="nav-link px-2 text-white">Reserva</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Educación</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Salud</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Hospedaje</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Guarderia</a></li>
        </ul>


      </div>
    </div>
  </header>

  <div class="container-fluid !direction">
    <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
      <div class="col-4">

        <div class="container-column">
          <div class="card w-100">
            <div class="card-body">
              <h5 class="card-title" style="text-align: center;">Misión</h5>
              <p class="card-text" style="text-align: center;">
                Nuestra misión es proporcionar servicios de excelente calidad basados en la ética y el respeto hacia los animales. Nuestra especialidad es el cuidado, la educación y el bienestar comportamental de las mascotas para lograr una optima integración dentro de la sociedad.
              </p>
            </div>
          </div>
        </div>

        <div class="container-column">
          <div class="card w-100">
            <div class="card-body">
              <h5 class="card-title" style="text-align: center;">Visión</h5>

              <p class="card-text" style="text-align: center;">
                Somos un grupo de personas que buscan un reconocimiento a nivel regional, en cuanto al cuidados y hospedaje de las mascotas, nuestros mejores amigos, y entregandoles un servicio de calidad y que con el tiempo esperamos que cumplan con nuestras espectativas y las del cliente entregando en un futuro el mejor y completo servicio  abarcando nuevas áreas como el lavado, guardería, venta de productos, etc.,y crear un gran imperio de mascotas dedicado especialmente al cuidado y bienestar de nuestros queridos amigos.
              </p>

            </div>
          </div>
        </div>

      </div>

      <div class="col-8">

        <div class="container-column">
          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src="https://picsum.photos/id/237/600/300" class="d-block w-100" style="height: 70vh" alt="...">
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="https://picsum.photos/id/1/600/300" class="d-block w-100" style="height: 70vh" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://picsum.photos/id/2/600/300" class="d-block w-100" style="height: 70vh" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  </div>



</template>




<script>
import axios from 'axios';

export default {
    name: "LogIn",

    data: function(){
        return {
            user: {
                username:"",
                password:""
            }
        }
    },

    methods: {
        processLogInUser: function(){
            axios.post(
                "https://mision-tic-bank-be.herokuapp.com/login/", 
                this.user,  
                {headers: {}}
                )
                .then((result) => {
                    let dataLogIn = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }
                    
                    this.$emit('completedLogIn', dataLogIn)
                })
                .catch((error) => {
                    
                    if (error.response.status == "401")
                        alert("ERROR 401: Credenciales Incorrectas.");
                    
                });
        }
    }
}
</script>






<style>

    .logIn_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container_logIn_user {
        border: 3px solid  #283747;
        border-radius: 10px;
        width: 25%;
        height: 60%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .logIn_user h2{
        color: #283747;

    }

    .logIn_user form{
        width: 70%;
        
    }

    .logIn_user input{
        height: 40px;
        width: 100%;

        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;

        border: 1px solid #283747;
    }

    .logIn_user button{
        width: 100%;
        height: 40px;

        color: #E5E7E9;
        background: #283747;
        border: 1px solid #E5E7E9;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
    }

    .logIn_user button:hover{
        color: #E5E7E9;
        background: crimson;
        border: 1px solid #283747;
    }

</style>