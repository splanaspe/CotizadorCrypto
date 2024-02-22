<script setup>
  import {ref, onMounted} from 'vue'

  const monedas = ref([
      { codigo: 'USD', texto: 'Dolar de Estados Unidos'},
      { codigo: 'MXN', texto: 'Peso Mexicano'},
      { codigo: 'EUR', texto: 'Euro'},
      { codigo: 'GBP', texto: 'Libra Esterlina'},
  ])

  const criptomonedas = ref([])

  onMounted( () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(data =>{
        criptomonedas.value=data.Data
      })
  })

</script>

<template>
  <div class="contenedor"> 
      <h1 class="titulo"> Cotizador de <span> Criptomonedas</span> </h1>
      <div class="contenido">
        <form class="formulario">

          <!-- Label de moneda--> 
          <div class="campo">
              <label for="moneda"> Moneda:  </label>
              <select id="moneda">
                <option value=""> -- Selecciona --</option>
                <option v-for="moneda in monedas" :value="moneda.codigo"> {{moneda.texto}} </option>
              </select>
          </div>

          <!-- Label de cripto--> 
          <div class="campo">
              <label for="criptomoneda"> Criptomoneda:  </label>
              <select id="criptomoneda">
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
      </div>
  
  </div>
</template>

<style scoped>

</style>
