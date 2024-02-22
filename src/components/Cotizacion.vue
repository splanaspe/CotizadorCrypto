<script setup> 
    defineProps({
        cotizacion:{
            type: Object,
            required: true
        }
    })
</script>
<template>

        <div class="contenedor-resultado" >
          <h2> Cotización</h2>
          <div class="resultado"> 
            <img :src="'https://cryptocompare.com/'+cotizacion.IMAGEURL">
            <div> 
              <p> El precio es de: <span> {{ cotizacion.PRICE }}</span></p>
              <p> Precio más alto del día: <span> {{ cotizacion.HIGHDAY }}</span></p>  
              <p> Precio más bajo del día: <span> {{ cotizacion.LOWDAY }}</span></p>
              <p> Vaciación últimas 24 horas: <span> {{ cotizacion.CHANGEPCT24HOUR }} % </span></p>
              <p> Última Actualización: <span> {{ cotizacion.LASTUPDATE }}</span></p>
            </div>
          </div>
        </div>
</template>