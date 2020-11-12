<template>
  <div>
    <div class="tab-bar">
      <button @click="handleClick('posts')">Posts</button>
      <button @click="handleClick('archive')">Archive</button>
      <tab-tab-ex></tab-tab-ex>
    </div>
    <div class="article">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import TabTabEx from "./TabTabEx";

export default {
  name: "TabEx",
  components: {
    "tab-tab-ex": TabTabEx,
  },
  props: {
    current: String,
  },
  methods: {
    handleClick(type) {
      console.log(this.ping);
      this.$emit("handleTabClick", type);
    },
  },
  inject: ["ping"],
};
</script>

<style></style>
