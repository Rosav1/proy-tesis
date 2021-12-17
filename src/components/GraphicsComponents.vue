<template>
<div class="main">
 <!-- <h1>graficos</h1>

  <h2> para {{ valores }}</h2>
  <LineComponent/>-->

<section id="sideMenu">
  <nav>
    <a href="#" class="active"><img src="../assets/heydru.svg" alt /></a>
    <a href="https://www.kaggle.com/datasets" target="_blank"><i class="fa fa-sticky-note-o" aria-hidden="true"></i> What's New</a>
    <a href="#" @click="generateReport" ><i class="fa fa-calendar-check-o" aria-hidden="true"></i> Reporte</a>
    <a href="#"><i class="fa fa-user-circle-o" aria-hidden="true"></i> Comunidad</a>
    <router-link to="/analysis-data"><i class="fa fa-cog" aria-hidden="true"></i> Salir</router-link>
  </nav>
</section>

<header>
  <div class="search-area">
    <i class="fa fa-search" aria-hidden="true"></i>
    <input type="text" v-model="input" id="valor">
  </div>
  <div class="user-area">
    <a href="#">+ Add</a>
    <a href="#" class="notification"><i class="fa fa-bell-o" aria-hidden="true"></i>
 <span class="circle">3</span></a>
    <a href="#">
      <div class="user-img"></div>
      <i class="fa fa-caret-down" aria-hidden="true"></i>
    </a>
  </div>
</header>
<div>

<!-- :paginate-elements-by-height="1400" -->
  <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="Reporte"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="1000px"
 
        @progress="onProgress($event)"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
    >
<div slot="pdf-content">
   <div class="row">
   <div class="column">
     <center> <h4>Cantidad de Usuarios </h4> </center>
<UsuariosComponent/>
   </div>
   <div class="column">

   </div>
 </div><br>
 <div class="row">
   <div class="column">
     <center> <h4>Opiniones Negativas y Positivas (Millones/Mes)  </h4> </center><br>
<LineComponent/>
   </div>
   <div class="column">
      <center> <h4>Cantidad de Opiniones (Mes) </h4> </center> <br>
<BarComponent/>
   </div>
 </div><br><br><br>
 <div class="row">
   <div class="column">
      <center> <h4>Total de Opiniones Negativas y Positivas</h4> </center> <br>
<PieComponent/>
   </div>
   <div class="column">
      <center> <h4>Emoción denotada</h4> </center> <br>
     <!-- https://3.bp.blogspot.com/-pSDak_BLlew/X2iP_cAhwaI/AAAAAAAAH3M/YAXFIp29Z0MPYl2pypftOupO6Ff7Oe-lQCLcBGAsYHQ/s1600/Explica%2Bmediante%2Bun%2Btexto%2Bescrito%2Bla%2Bmanera%2Ben%2Bque%2Blos%2Bconflictos%2Bque%2Bexperimentamos%2Ben%2Bla%2Bvida%2Bafectan%2Blas%2Bemociones%2Bel%2Bcomportamiento%2By%2Bla%2Bsalud%2Bde%2Blas%2Bpersonas.png -->
<RadarComponent/>
   </div>
 </div>
  <div class="row">
   <div class="column">
      <center> <h4>Palabras más encontradas</h4> </center> <br>
<WorkcloudComponent/>
   </div>
   <div class="column">
      <center> <h4>Países con mayor interacción frente al caso</h4> </center> <br>
     <div class="vue-world-map">
<MapComponent /> 
     </div>
   </div>
 </div>
  

</div>
    </vue-html2pdf>
   </div>
<article slot="pdf-content">
   <div class="row">
   <div class="column">
     <center> <h4>Cantidad de Usuarios </h4> </center>
<UsuariosComponent/>
   </div>
   <div class="column">

   </div>
 </div><br>
 <div class="row">
   <div class="column">
     <center> <h4>Opiniones Negativas y Positivas (Millones/Mes)  </h4> </center><br>
<LineComponent/>
   </div>
   <div class="column">
      <center> <h4>Cantidad de Opiniones (Mes) </h4> </center> <br>
<BarComponent/>
   </div>
 </div>
 <div class="row">
   <div class="column">
      <center> <h4>Total de Opiniones Negativas y Positivas</h4> </center> <br>
<PieComponent/>
   </div>
   <div class="column">
      <center> <h4>Emoción denotada</h4> </center> <br>
     <!-- https://3.bp.blogspot.com/-pSDak_BLlew/X2iP_cAhwaI/AAAAAAAAH3M/YAXFIp29Z0MPYl2pypftOupO6Ff7Oe-lQCLcBGAsYHQ/s1600/Explica%2Bmediante%2Bun%2Btexto%2Bescrito%2Bla%2Bmanera%2Ben%2Bque%2Blos%2Bconflictos%2Bque%2Bexperimentamos%2Ben%2Bla%2Bvida%2Bafectan%2Blas%2Bemociones%2Bel%2Bcomportamiento%2By%2Bla%2Bsalud%2Bde%2Blas%2Bpersonas.png -->
<RadarComponent/>
   </div>
 </div>
  <div class="row">
   <div class="column">
      <center> <h4>Palabras más encontradas</h4> </center> <br>
<WorkcloudComponent/>
   </div>
   <div class="column">
      <center> <h4>Países con mayor interacción frente al caso</h4> </center> <br>
     <div class="vue-world-map">
<MapComponent /> 
     </div>
   </div>
 </div>
  
</article>

</div>
</template>



<script>
import LineComponent from "./LineComponent.vue";
import BarComponent from "./BarComponents.vue";
import PieComponent from "./PieComponent.vue";
import RadarComponent from "./RadarComponent.vue";
import WorkcloudComponent from "./WorkcloudComponent.vue";
///////
import MapComponent from "./MapComponent.vue";
import chroma from 'chroma-js';
import {
  getDynamicMapCss,
  getBaseCss,
  getCombinedCssString,
} from './dynamic-map-css';
import UsuariosComponent from "./UsuariosComponent.vue";
import VueHtml2pdf from 'vue-html2pdf';

export default {
  name: "GraphicsComponents",
  components: {
    LineComponent,
    BarComponent,
    PieComponent,
    RadarComponent,
    WorkcloudComponent,
    MapComponent,
    UsuariosComponent,
    VueHtml2pdf
  },
  watch: {
        countryData() {
      this.renderMapCSS();
    },
  },
    props: {
    lowColor: {
      type: String,
      default: '#fde2e2',
    },
    highColor: {
      type: String,
      default: '#d83737',
    },
    countryData: {
      type: Object,
      required: true,
    },
    defaultCountryFillColor: {
      type: String,
      default: '#dadada',
    },
    countryStrokeColor: {
      type: String,
      default: 'black',
    },
  },
  data() {
    return {
    valores: '',
    node: document.createElement('style'),
    chromaScale: chroma.scale([this.$props.lowColor, this.$props.highColor]),
    input: ''
    }
  },
  methods: {
    renderMapCSS() {
      const baseCss = getBaseCss(this.$props);
      const dynamicMapCss = getDynamicMapCss(this.$props.countryData, this.chromaScale);
      this.$data.node.innerHTML = getCombinedCssString(baseCss, dynamicMapCss);
    },
    generateReport () {
      this.$refs.html2Pdf.generatePdf()
    }
  },
  mounted() {
    document.getElementById("valor").value = localStorage.getItem('Heydru_keyword');
    document.body.appendChild(this.$data.node);
    this.renderMapCSS();
    this.input = JSON.parse(localStorage.getItem('Heydru_keyword'))
    if(localStorage.getItem('Heydru_keyword') == 'startup'){
      this.valores = 'Startup'
    }else if(localStorage.getItem('Heydru_keyword') == 'digitalizacion'){
      this.valores = 'Digitalizacion'
    }else if(localStorage.getItem('Heydru_keyword') == 'coronavirus'){
      this.valores = 'Coronavirus'
    }else {
      this.valores = 'Random'
    }
  },

}
</script>

<style scoped lang="scss">

@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

$greyLight: #f2f5fa;
$greyDark: #e7eaf4;
$purpleLight: #F0216C;
$purpleDark: white;
$neonGreen: #062825;


.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
}
.span-col-2{grid-column: span 2 / auto;}

* {
  box-sizing: border-box;
}

article {
  margin-left: 400px;
  border: 2px solid black;
  width: 72%;
  height: 800px;
  max-height: 800px;
  overflow-y: scroll;
}

.column {
  float: left;
  width: 100%;
  padding: 10px;

}

body {
  font-family: 'Roboto', sans-serif;
  background: $greyLight;
}
#sideMenu {
  background: $purpleLight;
  width: 340px;
  position: absolute;
  top: 0;
  bottom: 0;
  transition: 1s;
}
nav {
  a {
    display: block;
    padding: 15px;
    border-left: 5px solid transparent;
    color: $greyDark;
    font-family: 'MBold';
    //font-weight: 300;
    transition: all 1s;
    &.active {
      background: $purpleDark;
      border-left: 5px solid $neonGreen;
    }
    &:hover {
      background: $purpleDark;
      border-left: 5px solid $neonGreen;
      text-decoration: none;
      color: black;
    }
    .fa {
      color: $neonGreen;
      //display: inline-block;
      width: 30px;
    }
  }
}

header {
  background: #fff;
  padding: 10px;
  margin-left: 340px;
  .search-area {
    display: inline-block;
    .fa {
      color: $greyDark;
      font-size: 25px;
    }
    input[type="text"] {
      background: transparent;
      border: 1px solid black;
      //border-bottom: 1px solid $greyLight;
      color: $neonGreen;
      padding: 18px 20px;
      width: 300px;
      margin-left: 10px;
      //width: 60%;
      &:hover {
        background: $greyLight;
        border: 1px solid $purpleLight;
      }
    }
  }
  .user-area {
    display: inline-block;
    float: right;
    padding: 8px;
    a {
      display: inline-block;
      padding-right: 20px;
      color: #062825;
      &:hover {
        text-decoration: none;
      }
      &.notification {
        position: relative;
        .circle {
          background: $neonGreen;
          color: $greyLight;
          width: 12px;
          height: 12px;
          display: inline-block;
          border-radius: 50%;
          font-size: 9px;
          text-align: center;
          position: absolute;
          top: -5px;
          left: 5px;
        }
      }
    }
  }
}

.vue-world-map {
  height: 100%;
}
#map-svg {
  height: 100%;
}

</style>