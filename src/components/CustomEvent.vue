<template>
  <div>
    <button @click="customEvent">Click Me!</button>
  </div>
</template>

<script>
export default {
  name: "CustomEvent",
  methods: {
    customEvent: function() {
      this.$emit("myEvent");
    },
  },
};
</script>

<style></style>
