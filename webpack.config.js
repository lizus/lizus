const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const baseJSConfig={
  mode:'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            plugins: ['ramda'],
            presets:['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,//缓冲
        parallel: true, //并发打包,一次打包多个
        sourceMap:true,//源码调试
        uglifyOptions:{
          ie8:true
        }
      })
    ]
  },
  watchOptions: {
    poll:1000,//监测修改的时间(ms)
    aggregateTimeout:500, //防止重复按键，500毫米内算按键一次
    ignored:/node_modules/,//不监测
  }
};

module.exports = [
{
  ...baseJSConfig,
  entry: {
    web: './src/test.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'dist/js')
  },
},
];
