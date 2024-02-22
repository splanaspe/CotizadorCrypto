<script setup>
  import {ref, reactive} from 'vue'
  import Alerta from './components/Alerta.vue'
  import Spinner from './components/Spinner.vue'
  import useCripto from  './composables/useCripto'
  import Cotizacion from './components/Cotizacion.vue'

  const { 
    monedas, 
    criptomonedas, 
    cargando, 
    cotizacion, 
    obtenerCotizacion,
    mostrarResultado} = useCripto()

  const cotizar = reactive({
    moneda: '',
    criptomoneda: ''
  })
  
  const error = ref('')

  const cotizarCripto = () =>{
    //Validar que cotizar esté lleno
    if(Object.values(cotizar).includes('')){
      error.value="Todos los campos son obligatorios"
      return
    }
    error.value=""
    obtenerCotizacion(cotizar)
  }

</script>

<template>
  <div class="contenedor"> 
      <h1 class="titulo"> Cotizador de <span> Criptomonedas</span> </h1>
      <div class="contenido">

        <Alerta v-if="error"> 
          {{ error }}
        </Alerta>

        <form 
          class="formulario"
          @submit.prevent="cotizarCripto"  
        >

          <!-- Label de moneda--> 
          <div class="campo">
              <label for="moneda"> Moneda:  </label>
              <select id="moneda"
              v-model="cotizar.moneda">
                <option value=""> -- Selecciona --</option>
                <option v-for="moneda in monedas" :value="moneda.codigo"> {{moneda.texto}} </option>
              </select>
          </div>

          <!-- Label de cripto--> 
          <div class="campo">
              <label for="criptomoneda"> Criptomoneda:  </label>
              <select id="criptomoneda"
                v-model="cotizar.criptomoneda"
              >
                <option value=""> -- Selecciona --</option>
                <option 
                  v-for="criptomoneda in criptomonedas" 
                  :value="criptomoneda.CoinInfo.Name"> 
                  {{criptomoneda.CoinInfo.FullName}} 
                </option>
              </select>
          </div>
          <input type="submit" value="Cotizar"> 
        </form>

        <!-- MOSTRAR RESULTADO-->
        <Spinner v-if="cargando"> </Spinner>
        <Cotizacion
          v-if="mostrarResultado"
          :cotizacion="cotizacion"
        /> 

        
      </div>
  
  </div>
</template>

<style scoped>
.alerta {
        text-align: center;
        margin-bottom: 2rem;
        color: var(--blanco);
        background-color: rgb(174, 0, 0);
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.4rem;
        padding: .5rem
    }
</style>
