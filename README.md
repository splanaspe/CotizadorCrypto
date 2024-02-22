# CotizadorCrypto
Es un proyecto realizado con VueJs el cual permite seleccionar una de las 20 criptomonedas más cotizadas y una moneda: te devuelve mediante la API de CryptoCompare  el valor del mercado actual y distintos parámetros. Datos actualizados.

## Conceptos Técnicos
API de CryptoCompare [URL](https://min-api.cryptocompare.com/documentation?key=Toplists&cat=TopTotalMktCapEndpointFull)

```
const criptomonedas = ref([])

  onMounted( () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(data =>{
        criptomonedas.value=data.Data
      })
  })
```