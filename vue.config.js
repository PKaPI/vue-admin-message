const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/crm": {
        target: "http://192.168.20.182:8080",
        changeOrigin: true
      }
    }
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  parallel: require("os").cpus().length > 1, //默认
  configureWebpack: config => {
    const plugins = [];
    let dllPath = path.join(__dirname, "public/dll");
    let files = fs.readdirSync(dllPath);
    files.forEach(val => {
      if (/\.js$/.test(val)) {
        plugins.push(
          new AddAssetHtmlPlugin({
            filepath: `${dllPath}/${val}`
          })
        );
      }
      if (/\.json$/.test(val)) {
        plugins.push(
          new webpack.DllReferencePlugin({
            manifest: `${dllPath}/${val}`
          })
        );
      }
    });
    if (isProduction) {
      plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ["console.log"] //移除console
            }
          },
          sourceMap: false,
          parallel: true
        })
      );
    }
    config.plugins = [...config.plugins, ...plugins];
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", resolve("/src"))
      .set("assets", resolve("/src/assets"))
      .set("components", resolve("/src/components"))
      .set("public", resolve("/public"));
    // 生产环境配置
    if (isProduction) {
      // 删除预加载
      config.plugins.delete("preload");
      config.plugins.delete("prefetch");
      // 压缩代码
      config.optimization.minimize(true);
      config.optimization.runtimeChunk = "single";
        // 分割代码
      config.optimization.splitChunks({
          chunks: "all",
          maxInitialRequests: Infinity,
          minSize: 0,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];

                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace("@", "")}`;
              }
            }
          }
      });
    }
  }
};
