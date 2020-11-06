<template>
  <ol class="left">
    <li>{{ root.type === "folder" ? "folder" : "file" }} - {{ root.name }}</li>
    <li v-for="(r, i) in root.children" :key="i">
      <folder :root="r" />
    </li>
  </ol>
</template>

<script>
export default {
  name: "folder",
  props: ["root"],
  data() {
    return {};
  },
  methods: {
    logRoot: function() {
      console.log(this.root);
    },
  },
};
</script>

<style>
.left {
  text-align: left;
}
li {
  padding-left: 10px !important;
}
</style>
