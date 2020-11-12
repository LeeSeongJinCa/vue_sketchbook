<template>
  <div class="custom-directives">
    <div class="demo-1">
      <input type="text" v-focus />
    </div>
    <div class="demo-2">
      <p>Scroll down the page.</p>
      <p v-pin="200">Stick me 200px from the top of page.</p>
    </div>
    <div class="demo-3">
      <div v-switch-color="{ color: 'red', text: 'hello!' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomDirective",
  directives: {
    focus: {
      inserted(el) {
        el.focus();
        // console.log(el, binding, vnode, oldVNode);
      },
    },
    pin: {
      bind(el, binding) {
        el.style.position = "fixed";
        el.style.top = binding.value + "px";
      },
    },
    "switch-color": function(el, binding) {
      el.textContent = binding.value.text;
      el.style.color = binding.value.color;
    },
  },
};
</script>

<style></style>
