<template>
<div>
  <GraphicsComponents />
</div>
</template>

<script>
import GraphicsComponents from "@/components/GraphicsComponents";

export default {
name: "Graphics",
  components: {
    GraphicsComponents,
  },
  metaInfo() {
    return {
      title: 'Gráficos',
    }
  },
}
</script>

<style scoped>

</style>