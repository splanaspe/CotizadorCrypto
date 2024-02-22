import {ref, onMounted, computed} from 'vue'

export default function useCripto() {

    const monedas = ref([
        { codigo: 'USD', texto: 'Dolar de Estados Unidos'},
        { codigo: 'MXN', texto: 'Peso Mexicano'},
        { codigo: 'EUR', texto: 'Euro'},
        { codigo: 'GBP', texto: 'Libra Esterlina'},
    ])

    const criptomonedas = ref([])
    const cotizacion = ref({})
    const cargando = ref(false)

    onMounted( () => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(data =>{
            criptomonedas.value=data.Data
            })
    })

    const obtenerCotizacion  = async (cotizar) =>{
        cotizacion.value={}
        cargando.value = true
        const {moneda, criptomoneda} = cotizar
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        
        const respuesta = await fetch(url)
        const data = await respuesta.json()
    
            setTimeout( () => {
            cotizacion.value=data.DISPLAY[criptomoneda][moneda]
            cargando.value = false
            },500)
          // Se indica con [] para hacerlo dinamico y mostrar los valores 
          // se usa . cuando es un nombre fijo, por ejemplo, si siempre fuera BTC, seria data.DISPLAY.BTC[moneda ] y moneda iria cambiando
    }

    const mostrarResultado = computed( () => {
        return Object.values(cotizacion.value).length > 0
    })

    return {
        monedas,
        criptomonedas,
        cargando,
        cotizacion,
        mostrarResultado,
        obtenerCotizacion
    }
}