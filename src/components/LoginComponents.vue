<template>
<div>
 <Navbar />
  <div class="container login-background">
    <h2 class="title-login text-center">Bienvenido al sistema de Análisis de Sentimiento</h2>
    <div class="login-center">
      <div class="login-container">
        <div class="login-center logo-container">
          <img src="../assets/heydru.svg" alt />
        </div>
          <input type="email" class="title-form input-options" placeholder="Correo electrónico">
      <div class="form-container">
        <input :type="password_type" class="title-form input-options" placeholder="Contraseña">
      </div>
        <div class="reset-password-container">
          <router-link to="/reset_password"><u class="reset-password">Reestablecer contraseña</u></router-link>
        </div>
        <div>
          <router-link to="/analysis-data"><button class="button login-button">Ingresar</button></router-link>
        </div>
      </div>
     </div>
  </div>
</div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
name: "Login",
  components: {
  Navbar
  },
  data() {
  return {
    password_type: 'password',
    password_icon: 'eye'
  }
  },
  methods: {
    discount() {

    }
  }
}
</script>

<style scoped>
.login-background {
  /*background-image: url('~assets/images/login-background.png');
  background-position:center;
  background-size:cover;*/
  background-color: #ffffff;
  max-width: 100%;
  width: 800px;
  margin: auto;
}
.title-login {
  margin-top: 142px;
  font-family: 'MBold';
  font-size: 40px;
}
.red-text {
  color: var(--peid-red)
}
.login-center {
  display: flex;
  justify-content: center;
}
.login-container {
  width: 501px;
  height: 528px;
  border-radius: 20px;
  margin-top: 62px;
  /*box-shadow:
    inset 0 -3em 3em rgba(250, 250, 250, 0.0),
    0 0  0 2px rgba(255, 252, 252, 0.3),
    0.3em 0.3em 1em rgba(0,0,0,0.3);*/
  box-shadow: 6px 3px 20px 4px rgba(0, 0, 0, 0.10);
  padding: 40px;
  margin-bottom: 5em;
}
.logo-container {
  margin-bottom: 47px;
}
.input-options {
  margin-bottom: 30px;
}
.reset-password {
  font-size: 12px;
  /*font-weight: bold;*/
  font-family: 'QMedium';
  color: var(--peid-black)
}
.link-register {
  font-size: 12px;
  /*font-weight: bold;*/
  font-family: 'QMedium';
  color: var(--peid-black)
}
.reset-password-container {
  margin-bottom: 30px;
}
.field-icon {
  float: right;
  margin-left: -35px;
  margin-right: 25px;
  margin-top: -64px;
  position: relative;
  z-index: 2;
  color: var(--peid-dar-grey)
}
.field-icon:hover {
  color: var(--peid-black);
  cursor: pointer;
}
.login-button {
  width: 100%;
  background: var(--heydru);
  color: white
}
.login-button:hover {
  transition: all 0.5s ease-out;
  border-radius-color: var(--heydru);
  background: black
}
.register-link-container {
  margin-top: 20px;
}
@media (max-width: 576px) {
  .title-login {
    margin-top: 150px;
    /*font-size: 40px;*/
  }
  .input-options {
    margin-bottom: 20px;
  }
  .login-container {
    width: 90%;
    height: 420px;
    margin-top: 30px;
    background-color: white;
  }
  img {
    display: none;
  }
  .logo-container {
    margin-bottom: 0px;
  }
  .field-icon {
    float: right;
    margin-left: -35px;
    margin-right: 25px;
    margin-top: -54px;
    z-index: 2;
    color: var(--peid-dar-grey)
  }
}
</style>
