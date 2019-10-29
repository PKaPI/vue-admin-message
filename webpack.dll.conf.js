const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  //清除

const vendor = [
    "vue-router/dist/vue-router.esm.js",
    "vuex/dist/vuex.esm.js",
    "axios",
    "nprogress",
    "element-ui",
    "vue-schart"
];
var groupVendor = {};
let num = 2; //分组个数
let key = 1;
for(var i=0;i<vendor.length;i+=num){
    groupVendor['vendor'+key]  = vendor.slice(i,i+num);
    key +=1;
}
module.exports = {
  entry: groupVendor,
  output: {
    path: path.join(__dirname, "public/dll"),
    filename: "[name].dll.js",
    library: "[name]_[hash]" // vendor.dll.js中暴露出的全局变量名
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.join(__dirname, "public/dll", "[name]-manifest.json"),
      name: "[name]_[hash]",
      context: process.cwd()
    })
  ]
};