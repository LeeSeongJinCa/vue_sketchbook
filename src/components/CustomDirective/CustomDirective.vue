<template>
  <div class="custom-directives">
    <div class="demo-1">
      <input type="text" v-focus />
    </div>
    <div class="demo-2">
      <p>Scroll down the page.</p>
      <p v-pin="200">Stick me 200px from the top of page.</p>
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
  },
};
</script>

<style></style>
