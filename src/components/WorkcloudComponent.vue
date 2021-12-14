<template>
  <div id="app">
    <wordcloud
      :data="defaultWords"
      nameKey="name"
      valueKey="value"
      :color="myColors"
      :showTooltip="true"
      :wordClick="wordClickHandler"
    >
    </wordcloud>
  </div>
</template>

<script>
import wordcloud from "vue-wordcloud";

export default {
  name: "app",
  components: {
    wordcloud,
  },
  methods: {
    wordClickHandler(name, value, vm) {
      console.log("wordClickHandler", name, value, vm);
    },
  },
  data() {
    if (localStorage.getItem("Heydru_keyword") == "startup") {
      return {
        myColors: ["#F0216C", "#F7518D", "#FC9DBF", "#F8D2DF"],
        defaultWords: [
          {
            name: "start up",
            value: 102,
          },
          {
            name: "logic pro",
            value: 45,
          },
          {
            name: "Iniciar un negocio",
            value: 29,
          },
          {
            name: "lean startup",
            value: 20,
          },
          {
            name: "ideas de startup",
            value: 14.5,
          },
          {
            name: "trabajos startup",
            value: 11,
          },
          {
            name: "gerente startup",
            value: 11,
          },
          {
            name: "500 startups",
            value: 9,
          },
          {
            name: "start up business",
            value: 7,
          },
          {
            name: "startup weekend",
            value: 7,
          },
          {
            name: "programas startup",
            value: 5.8,
          },
          {
            name: "compañías start up",
            value: 4,
          },
          {
            name: "compañía startup",
            value: 4,
          },
          {
            name: "negocio start up",
            value: 3.3,
          },
          {
            name: "startups tecnológicas",
            value: 3.3,
          },
          {
            name: "fondos startup",
            value: 3.3,
          },
          {
            name: "startup noticias",
            value: 3.3,
          },
          {
            name: "series startup",
            value: 3.3,
          },
          {
            name: "como iniciar un startup",
            value: 3.5,
          },
          {
            name: "como iniciar una compañía",
            value: 3.3,
          },
          {
            name: "startup podcast",
            value: 3.3,
          },
        ],
      };
    } else if (localStorage.getItem("Heydru_keyword") == "digitalizacion") {
      return {
        myColors: ["#F0216C", "#F7518D", "#FC9DBF", "#F8D2DF"],
        defaultWords: [
          {
            name: "internet",
            value: 26,
          },
          {
            name: "transformación digital",
            value: 19,
          },
          {
            name: "globalizacion",
            value: 18,
          },
          {
            name: "social media",
            value: 6,
          },
          {
            name: "big data",
            value: 15,
          },
          {
            name: "industria 4.0",
            value: 9,
          },
          {
            name: "e-commerce",
            value: 9,
          },
          {
            name: "desarrollo",
            value: 9,
          },
          {
            name: "automatización",
            value: 6,
          },
          {
            name: "tecnología",
            value: 15,
          },
          {
            name: "comunicación",
            value: 15,
          },
          {
            name: "data",
            value: 9,
          },
          {
            name: "iot",
            value: 9,
          },
          {
            name: "networking",
            value: 9,
          },
          {
            name: "network",
            value: 16,
          },
          {
            name: "seguridad",
            value: 9,
          },
          {
            name: "privacidad",
            value: 6,
          },
          {
            name: "integridad de datos",
            value: 15,
          },
          {
            name: "regulaciones",
            value: 15,
          },
          {
            name: "latencia",
            value: 9,
          },
          {
            name: "almacenamiento",
            value: 9,
          },
          {
            name: "energia",
            value: 9,
          },
          {
            name: "estandarización",
            value: 6,
          },
        ],
      };
    } else if (localStorage.getItem("Heydru_keyword") == "coronavirus") {
      return {
        myColors: ["#F0216C", "#F7518D", "#FC9DBF", "#F8D2DF"],
        defaultWords: [
          { name: "covid-19", value: 456 },
          { name: "diagnostico confirmado", value: 319 },
          { name: "caso", value: 318 },
          { name: "mascarilla", value: 316 },
          { name: "epidemia", value: 335 },
          { name: "startup", value: 109 },
          { name: "primer caso", value: 159 },
          { name: "neumonia", value: 149 },
          { name: "paciente", value: 226 },
          { name: "muerte", value: 416 },
          { name: "eliminar", value: 326 },
          { name: "salir de hospital", value: 219 },
          { name: "causa desconocida", value: 318 },
          { name: "wuhan", value: 236 },
          { name: "virus", value: 415 },
          { name: "identificacion", value: 329 },
          { name: "infeccion", value: 309 },
          { name: "expresion", value: 259 },
          { name: "sistema central nervioso", value: 276 },
          { name: "gen", value: 215 },
          { name: "enfermedad", value: 265 },
          { name: "anticuerpos", value: 249 },
          { name: "secuencia del genoma", value: 169 },
          { name: "proteina", value: 89 },
          { name: "hogar", value: 315 },
          { name: "yo me quedo en casa", value: 269 },
          { name: "receptor", value: 329 },
          { name: "hong kong", value: 159 },
          { name: "replicacion", value: 236 },
        ],
      };
    } else if (localStorage.getItem("Heydru_keyword") == "machine learning") {
      return {
        myColors: ["#F0216C", "#F7518D", "#FC9DBF", "#F8D2DF"],
        defaultWords: [
          {
            name: "ML",
            value: 26,
          },
          {
            name: "modelamiento de datos",
            value: 19,
          },
          {
            name: "evaluacion",
            value: 18,
          },
          {
            name: "ingenieria de software",
            value: 16,
          },
          {
            name: "analisis de datos",
            value: 15,
          },
          {
            name: "datos",
            value: 29,
          },
          {
            name: "interpretacion",
            value: 9,
          },
          {
            name: "diseño de sistema",
            value: 9,
          },
          {
            name: "algoritmos",
            value: 26,
          },
          {
            name: "librerias",
            value: 6,
          },
          {
            name: "tecnicas",
            value: 26,
          },
          {
            name: "analisis predictivo",
            value: 19,
          },
          {
            name: "mineria de datos",
            value: 18,
          },
          {
            name: "web scrapping",
            value: 6,
          },
          {
            name: "python",
            value: 15,
          },
          {
            name: "r",
            value: 9,
          },
          {
            name: "pandas",
            value: 9,
          },
          {
            name: "typescript",
            value: 9,
          },
          {
            name: "tensorflow",
            value: 6,
          },
          {
            name: "scala",
            value: 15,
          },
          {
            name: "regex",
            value: 15,
          },
          {
            name: "js",
            value: 9,
          },
          {
            name: "solidity",
            value: 9,
          },
          {
            name: "informatica",
            value: 9,
          },
        ],
      };
    } else if (
      localStorage.getItem("Heydru_keyword") == "atencion al cliente"
    ) {
      return {
        myColors: ["#F0216C", "#F7518D", "#FC9DBF", "#F8D2DF"],
        defaultWords: [
          { name: "administracion de cuentas", value: 26 },
          { name: "administracion", value: 19 },
          { name: "Bookkeeping", value: 18 },
          { name: "gestion de la marca", value: 16 },
          { name: "gestion de call center", value: 15 },
          { name: "gestion de casos", value: 29 },
          { name: "apoyo administrativo", value: 9 },
          { name: "resolucion de quejas", value: 9 },
          { name: "negociaciones de contrato", value: 26 },
          { name: "comunicaciones corporativas", value: 6 },
          { name: "control de costos", value: 26 },
          { name: "comunicaciones con el cliente", value: 19 },
          { name: "relaciones con el cliente", value: 18 },
          { name: "retencion del cliente", value: 6 },
          { name: "satisfaccion del cliente", value: 15 },
          { name: "encuestas de clientes", value: 9 },
          { name: "gestion de datos", value: 9 },
          { name: "operaciones archivadas", value: 9 },
          { name: "programas incentivos", value: 6 },
          { name: "gestion de asuntos", value: 15 },
          { name: "programas de fidelizacion", value: 15 },
          { name: "relaciones con los medios", value: 9 },
          { name: "comercionalizacion", value: 9 },
          { name: "necesita valoracion", value: 9 },
          { name: "Networking", value: 15 },
          { name: "procesando orden", value: 9 },
          { name: "Politicas y procedimientos", value: 9 },
          { name: "soporte post-venta", value: 9 },
          { name: "soporte pre-venta", value: 6 },
          { name: "resolucion de problema", value: 15 },
          { name: "mejora de proceso", value: 15 },
          { name: "desarrollo de producto", value: 9 },
          { name: "gestion de producto", value: 15 },
          { name: "gestion de programa", value: 9 },
        ],
      };
    } else if (localStorage.getItem("Heydru_keyword") == "aeropuerto") {
      return {
        myColors: ["#F0216C", "#F7518D", "#FC9DBF", "#F8D2DF"],
        defaultWords: [
          { name: "aerolinea", value: 26 },
          { name: "llegadas", value: 19 },
          { name: "reclamo de equipaje", value: 18 },
          { name: "a abordar", value: 16 },
          { name: "pasaje", value: 15 },
          { name: "tiempo de vuelo", value: 29 },
          { name: "reserva", value: 9 },
          { name: "equipaje", value: 9 },
          { name: "registro", value: 26 },
          { name: "personalizado", value: 6 },
          { name: "demorado", value: 26 },
          { name: "salidas", value: 19 },
          { name: "salon de salidas", value: 18 },
          { name: "Domestico", value: 6 },
          { name: "vuelo", value: 15 },
          { name: "Fragile", value: 9 },
          { name: "porton", value: 9 },
          { name: "Identificacion", value: 9 },
          { name: "ultima llamada", value: 6 },
          { name: "equipacion", value: 15 },
          {
            name: "vuelo de larga distancia",
            value: 6,
          },
          { name: "a tiempo", value: 9 },
          { name: "de una sola mano", value: 9 },
          { name: "sobredimensionado", value: 9 },
          { name: "bolsa con sobrepeso", value: 15 },
          { name: "Prioridad de embarque", value: 9 },
          { name: "escala", value: 9 },
          { name: "Terminal", value: 9 },
          { name: "carretilla", value: 6 },
          { name: "actualizar", value: 15 },
          { name: "Visa", value: 25 },
        ],
      };
    } else {
      return {};
    }
  },
};
</script>