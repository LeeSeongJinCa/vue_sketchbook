<template>
  <div>
    <div class="tab-bar">
      <button @click="handleClick('posts')">Posts</button>
      <button @click="handleClick('archive')">Archive</button>
    </div>
    <div class="article">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabEx",
  props: {
    current: String,
  },
  methods: {
    handleClick(type) {
      this.$emit("handleTabClick", type);
    },
  },
};
</script>

<style></style>
