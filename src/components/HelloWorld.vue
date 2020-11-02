<template>
  <div v-if="seen">
    Hello!
    <button v-on:click="seen = !seen">destory</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      seen: true,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 20px;
}
</style>
