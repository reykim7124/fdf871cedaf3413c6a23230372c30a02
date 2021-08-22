module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/variables.sass"`,
      },
    },
  },
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/fdf871cedaf3413c6a23230372c30a02/"
      : "/",
};
