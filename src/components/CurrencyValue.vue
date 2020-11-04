<template>
  <span>
    <input
      type="text"
      ref="input"
      :value="value"
      @input="updateValue($event.target.value)"
    />
  </span>
</template>

<script>
export default {
  name: "CurrencyValue",
  props: ["value"],
  methods: {
    updateValue: function(value) {
      const formattedValue = value
        .trim()
        .slice(
          0,
          value.indexOf(".") === -1 ? value.length : value.indexOf(".") + 3
        );

      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue;
      }
      this.$emit("input", Number(formattedValue));
    },
  },
};
</script>

<style></style>
