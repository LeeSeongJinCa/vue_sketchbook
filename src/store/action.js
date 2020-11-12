export default {
  removeTv(context, amount) {
    if (context.state.totalTvCount >= amount) {
      context.commit("removeTv", amount);
    }
  },
};
