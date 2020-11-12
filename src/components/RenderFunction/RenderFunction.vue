<template>
  <div class="render-function">
    <div class="demo-1">
      <anchored-heading :level="1">1</anchored-heading>
      <anchored-heading :level="2">2</anchored-heading>
      <anchored-heading :level="3">3</anchored-heading>
      <anchored-heading :level="4">4</anchored-heading>
      <anchored-heading :level="5">5</anchored-heading>
    </div>
  </div>
</template>

<script>
import AnchoredHeading from "./AnchoredHeading.vue";

export default {
  name: "RenderFunction",
  components: {
    "anchored-heading": AnchoredHeading,
  },
};
</script>

<style></style>
