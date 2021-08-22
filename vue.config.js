module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/variables.sass"`,
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/gerimis/" : "/",
};
