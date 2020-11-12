<template>
  <div>
    <p>Tab Tab Ex</p>
    <button @click="handleClick">Click!</button>
  </div>
</template>

<script>
export default {
  name: "TabTabEx",
  inject: ["ping"],
  methods: {
    handleClick() {
      console.log(this.ping);
    },
  },
};
</script>

<style></style>
