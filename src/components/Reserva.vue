<template>

    <div class="container-fluid !direction !spacing">

    <header>
      <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}" style="padding: 10px 20px;">
        <div class="col-8">

          <a href="index.html">Home</a> > Reserva

        </div>
        <div class="col-4 d-flex flex-row" style="justify-content: flex-end;">
          <i class="fab fa-facebook-f fa-2x"></i>
          <div style="margin: 5px;"></div>
          <i class="fab fa-instagram fa-2x"></i>
          <div style="margin: 5px;"></div>
          <i class="fab fa-twitter fa-2x"></i>
        </div>
      </div>
    </header>


    <div class="row">

      <div class="col d-flex" style="min-width: 320px; margin-bottom: 15px;">
        <div id="cont1"></div>
        <div class="w-100" style="padding: 10px; border: 3px solid black;">

          <p style="text-align: center;">Tus datos</p>

          <div class="mb-3 d-flex flex-row" style="align-items: flex-end;">
            <label for="exampleInputEmail1" class="form-label">Nombre</label>
            <div style="margin: 5px;"></div>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="mb-3 d-flex flex-row" style="align-items: flex-end;">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <div style="margin: 5px;"></div>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>

          <p style="text-align: center;">Miembro de la guarderia</p>

          <div class="mb-3 d-flex flex-row" style="align-items: flex-end;">
            <label for="exampleInputEmail1" class="form-label">Nombre</label>
            <div style="margin: 5px;"></div>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="mb-3 d-flex flex-row" style="align-items: flex-end;">
            <label for="exampleInputEmail1" class="form-label">Edad</label>
            <div style="margin: 5px;"></div>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>

          <p style="text-align: center;">¿Algún cuidado especial?</p>

          <div class="mb-3 d-flex flex-row" style="align-items: flex-end;">
            <label for="exampleInputEmail1" class="form-label">¿Cuál?</label>
            <div style="margin: 5px;"></div>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>

        </div>
      </div>

      <div class="col d-flex" style="min-width: 320px; margin-bottom: 15px;">
        <div class="w-100" style="padding: 10px; border: 3px solid black;">

          <p style="text-align: center;">Datos de la estancia</p>

          <div class="mb-3 d-flex flex-row" style="align-items: flex-end;">
            <label for="exampleInputEmail1" class="form-label">Entrada</label>
            <div style="margin: 5px;"></div>
            <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="mb-3 d-flex flex-row" style="align-items: flex-end;">
            <label for="exampleInputEmail1" class="form-label">Salida</label>
            <div style="margin: 5px;"></div>
            <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>

          <p style="text-align: center; margin-bottom: 5px;">Servicio de ruta</p>
          <p style="text-align: center;">¿Dónde se encuentra?</p>

          <div class="mb-3 d-flex flex-row" style="align-items: flex-end;">
            <label for="exampleInputEmail1" class="form-label">Dirección</label>
            <div style="margin: 5px;"></div>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>

        </div>
      </div>

      <div class="col d-flex" style="min-width: 320px; margin-bottom: 15px;">
        <div class="w-100" style="padding: 10px; border: 3px solid black;">
          <p style="text-align: center;">Servicios</p>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="1" id="check_1" checked>
            <label class="form-check-label" for="flexCheckChecked">
              Ruta puerta a puerta
            </label>
          </div>


          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="2" id="check_2" checked>
            <label class="form-check-label" for="flexCheckChecked">
              Rutina individual supervisada
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="3" id="check_3" >
            <label class="form-check-label" for="flexCheckDefault">
              Jornada de natación supervisada
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="4" id="check_4" >
            <label class="form-check-label" for="flexCheckDefault">
              Terapia física
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="5" id="check_5" checked>
            <label class="form-check-label" for="flexCheckChecked">
              Rehabilitación
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="check_6" >
            <label class="form-check-label" for="flexCheckIndeterminate">
              Baño antipulgas
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="7" id="check_7" checked>
            <label class="form-check-label" for="flexCheckChecked">
              Cena dieta raza-edad
            </label>
          </div>

        </div>
      </div>

    </div>

    <div class="d-flex" style="justify-content: flex-end; margin-top: 10px; margin-bottom: 10px;">
      <button type="submit" class="btn btn-outline-success btn-lg">Enviar</button>
    </div>

  </div>



</template>




<script>
import axios from 'axios';

export default {
    name: "Reserva",

    data: function(){
        return {
            user: {
                username: "",
                password: "",
                name: "",
                email: "",
                Mascotas: {
                    lastChangeDate: (new Date()).toJSON().toString(),
                    balance: 0,
                    isActive: true
                }
            }
        }
    },

    methods: {
        processReserva: function(){
            axios.post(
 
                {headers: {}}
            )
                .then((result) => {
                    let dataReserva = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }
                    
                    this.$emit('completedReserva', dataReserva)
                })
                .catch((error) => {
                    console.log(error)
                    alert("ERROR: Fallo en el registro.");  
                });
        }
    }
}
</script>






<style>

    .Reserva_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container_Reserva_user {
        border: 3px solid  #283747;
        border-radius: 10px;
        width: 25%;
        height: 60%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .Reserva_user h2{
        color: #283747;

    }

    .Reserva_user form{
        width: 70%;
        
    }

    .Reserva_user input{
        height: 40px;
        width: 100%;

        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;

        border: 1px solid #283747;
    }

    .Reserva_user button{
        width: 100%;
        height: 40px;

        color: #E5E7E9;
        background: #283747;
        border: 1px solid #E5E7E9;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0 25px 0;
    }

    .Reserva_user button:hover{
        color: #E5E7E9;
        background: crimson;
        border: 1px solid #283747;
  
    }
    .cont1{

    }

</style>