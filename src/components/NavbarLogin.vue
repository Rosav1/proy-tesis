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
@import '../assets/styles/config.scss';

/**
  * Breakpoints
  *
  * for media-queries
  */
$peid-small: 575.98px;
$peid-medium: 767.98px;
$peid-large: 991.98px;

.c-sesion:hover{
  cursor: pointer;
}
.menu {
  top: 0;
  left: 0;
  overflow: hidden;
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 1000;
  padding: 1.6em 1.6em 1.6em 7.2em;
  justify-content: space-between;
  align-items: center;
  @media (max-width: $peid-small ) {
    padding: 1.25em 0em;
    justify-content: center;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: $peid-medium ) {
    padding: 1.25em 3em;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  }
  .container-logo {
    img {
      width: 6.2em;
      height: auto;
      @media (max-width: $peid-small ) {
        width: 7.5em;
      }
    }
  }
  .container-pages {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (max-width: $peid-small ) {
      display: none;
    }
    p {
      font-size: 1em;
      font-family: 'MRegular';
      margin: 0em 1.9rem;
      a {
        padding-bottom: 4px;
        color:black;
      }
      .nuxt-link-exact-active{
        border-bottom: 4px solid var(--peid-red);
      }
    }
    svg {
      margin-left: 0.8em;
      width: 2em;
      height: auto;
    }
  }
}

.selected-login {
  text-decoration: underline #F0216C;
  text-decoration-style: wavy;
}
</style>