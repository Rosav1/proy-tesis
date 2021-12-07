<template>
  <div>
    <nav class="menu row">
      <div class="container-logo">
        <img src="../assets/logo-01.svg"   alt />
      </div>
      <div class="container-pages row">
        <p>
          <router-link to="/">Presentación</router-link>
        </p>
        <p>
          <router-link to="/login" class="selected-login">Iniciar Sesión</router-link>
        </p>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarLogin"
}
</script>

<style lang="scss" >

</style>