const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "168.12.2.1",
        changeOrigin: true,
        pathRewrite: {
          "/api": ""
        }
      }
    }
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('vue$','vue/dist/vue.esm.js' )
      .set("@", resolve("/src"))
      .set("assets", resolve("/src/assets"))
      .set("components", resolve("/src/components"))
      .set("public", resolve("/public"));
  }
};
