<script>
export default {
  name: "AnchoredHeading",
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  render: function(createElement) {
    return createElement("h" + this.level, this.$slots.default);
  },
};
</script>

<style></style>
