<template>
  <div>
    <h2>나는 자식 컴포넌트의 제목입니다.</h2>
    <slot>
      제공된 컨텐츠가 없는 경우에만 볼 수 있습니다.
    </slot>
    <footer>
      <slot name="footer" />
    </footer>
    <button @click="logProfile">Click to log Ref's profile</button>
  </div>
</template>

<script>
export default {
  name: "SlotComponent",
  methods: {
    logProfile: function() {
      console.log(this.$parent.$refs);
    },
  },
};
</script>

<style></style>
