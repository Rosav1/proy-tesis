<template>
<div>
  <AnalysisComponents />
</div>
</template>

<script>
import AnalysisComponents from "@/components/AnalysisComponents";

export default {
name: "Analysis",
  components: {
    AnalysisComponents
  },
  metaInfo() {
    return {
      title: 'Formulario de análisis',
    }
  },
}
</script>

<style scoped>

</style>