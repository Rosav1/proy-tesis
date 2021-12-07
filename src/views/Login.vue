<template>
  <div>
  <LoginComponents />
  </div>
</template>

<script>
import LoginComponents from '../components/LoginComponents'
export default {
name: "Login",
  components: {
    LoginComponents
  },
  metaInfo() {
    return {
      title: 'Iniciar sesión',
    }
  },
}
</script>

<style scoped>

</style>