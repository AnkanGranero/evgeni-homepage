module.exports = {
  publicPath: "/evgeni-homepage/",
    css: {
      loaderOptions: {
        sass: {
          data: `@import "@/styles/_variables.scss";`
        }
      }
    }
  };