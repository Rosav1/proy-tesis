<template>
<div>
  <Navbar />
  <div class="container register-background">
    <h3 class="text-center register-title">Bienvenido al sistema de Análisis de Sentimiento</h3>
    <div class="container row">
      <form>
      <div class="container-form">
        <input type="text"  class="title-form" placeholder="Consumer key">
        <input type="text"  class="title-form" placeholder="Consumer Secret">
        <input type="text"  class="title-form" placeholder="Consumer Secret">
        <input type="text"  class="title-form" placeholder="Access Token">
        <input type="text"  class="title-form" placeholder="Access Token Secret">
        <input type="text" v-model="keyword"  class="title-form" placeholder="Keyword">
        <div class="container row" id="finished">
          <!-- style="color: white" -->
   
          <router-link to="/analysis-graphics" style="color: white; width: 100%; " >
          <button class="button proccess" v-on:click="procesar" > Procesar sentimiento</button>
          </router-link>
        </div>
       </div>
      </form>

    <div class="container-image">
      <img src="../assets/g10.svg" alt />
    </div>
  </div>
  </div>
</div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "AnalysisComponents",
  components: {
    Navbar
  },data() {
    return {
      keyword: this.value
    }
  },methods: {
    procesar() {
      //alert(this.keyword)
      
      localStorage.setItem('Heydru_keyword',this.keyword);
    }
  }
}
</script>

<style scoped>
.proccess {
  background-color: #F0216C;
  color: white;
  width: 100%;
}
.register-background {
  background-position:center;
  background-size:cover;
}
.register-title {
  padding-top: 2.0em;
  padding-left: 2.4em;
  margin-top: 90px;
  padding-bottom: 1.0em;
  text-align: center;
  font-size: 46px;
}
.red-text {
  color: var(--peid-red)
}
.vue-tel-input:focus-within {
  box-shadow: none;
}
.container-image {
  margin-left: -30px;
}

.container-image img {
  width: auto;
  height: auto;
  margin-right: 70px;
}
.vue-tel-input {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border: 2px solid #C8C8C8;
  border: 2px solid var(--peid-border-color-input);
  text-align: left;
}
.container-form {
  padding: 2em 5.4em 7.4em 3.4em;
}
#mini_finished {
  display: none;
}
#finished {
  margin-top: 45px;
  text-align: left;
}
/************************************************ */
/************************************************ */
/************************************************ */
@media (max-width: 576px) {
  img{
    display: none;
  }
  .register-title {
    padding-top: 30px;
    font-size: 30px;
    font-weight: normal;
    text-align: center;
    padding-left: 0px;
  }
  .container-form {
    padding: 0px 0px 0px 0px;
    text-align: center;
    width: 90%;
    margin: auto;
  }
  /*.vue-tel-input {
    border: 2px solid #C8C8C8;
    border: 2px solid var(--peid-border-color-input);
    text-align: center;
  }*/
  /* .vue-tel-input {
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   border: 2px solid #C8C8C8;
   border: 2px solid var(--peid-border-color-input);
   text-align: center;
 }*/
  .vue-tel-input {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border: 2px solid #C8C8C8;
    border: 2px solid var(--peid-border-color-input);
    text-align: left;
  }
  .button {
    width: 100%;
  }
  #finished{
    margin-top: 15px;
    display: none;
  }
  #mini_finished {
    display: block;
    margin-top: 14px;
    /*width: 70%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;*/
  }
  #mini_finished .button{
    margin-top: 20px;
    margin-bottom: 25%;
    width: 60%;
    height: 10vh;
    border-radius: 30px;
    font-size:20px;
  }
  .vue-tel-input:focus-within {
    box-shadow: none;
  }
  .vue-tel-input {
    border-radius: 25px;
  }
  /* .small-text {
     margin-left: 10%;
   }*/
}
</style>