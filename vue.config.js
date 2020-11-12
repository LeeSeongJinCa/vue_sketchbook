module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Vue Scratch Book for Vueginner!";
      return args;
    });
  },
  runtimeCompiler: true,
};
