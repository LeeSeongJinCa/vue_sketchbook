<template>
  <div class="vuex">
    <div class="customer">
      <h1>I'm a customer</h1>
      <p>I see {{ totalTvCount }} Tvs!</p>
      <p v-show="happyStaff">The staff seems happy!</p>
      <p v-show="!totalTvCount">I can't buy any...</p>
      <button :disabled="!totalTvCount" @click="buyTv">
        Buy Tv
      </button>
      <button :disabled="totalTvCount < 2" @click="buyTwoTv">
        Buy Two Tv
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Vuex",
  methods: {
    ...mapActions(["removeTv"]),
    buyTv() {
      this.removeTv(1);
    },
    buyTwoTv() {
      this.removeTv(2);
    },
  },
  computed: {
    ...mapState(["totalTvCount"]),
    ...mapGetters(["happyStaff"]),
  },
};
</script>

<style scoped></style>
