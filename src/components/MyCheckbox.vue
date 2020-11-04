<template>
  <span>
    <input type="checkbox" :value="checked" @change="handleChange" />
  </span>
</template>

<script>
export default {
  name: "MyCheckbox",
  model: {
    prop: "checked",
    model: "change",
  },
  props: {
    checked: Boolean,
    value: String,
  },
  methods: {
    handleChange: function() {
      console.log("checked " + this.checked);
      console.log("value " + this.value);
    },
  },
};
</script>

<style></style>
