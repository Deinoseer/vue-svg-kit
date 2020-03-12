module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    let originalOptions = {};
    svgRule.use("file-loader").tap(options => {
      originalOptions = options;
    });
    svgRule.uses.clear();

    svgRule
      .oneOf("inline")
      .resourceQuery(/inline/)
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .options({
        svgo: {
          plugins: [
            {
              removeViewBox: false
            },
            {
              cleanupIDs: {
                minify: false
              }
            }
          ]
        }
      })
      .end()
      .end()
      .oneOf("external")
      .use("file-loader")
      .loader("file-loader")
      .options(originalOptions);
  },
  configureWebpack: {
    resolve: {
      alias: require("./aliases.config").webpack
    }
  }
};
