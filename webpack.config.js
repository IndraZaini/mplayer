const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname,'/src/index.js'),
    output: {
      path: path.resolve(__dirname,'./dist'),
      filename: 'app.bundled.js',
    },
    devServer: {
      port: 8080,
      hot: false,
      open: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
              loader: "babel-loader",
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader',
          ]
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            'css-loader', 
            'less-loader'
          ]
        },
        {
          test: /\.(png|jp(e*)g|svg|mp3)$/,
          use: [{
            loader: 'file-loader',
            options: {
              limit: 10000,
              name: 'assets/[hash]-[name].[ext]',
              esModule: false,
            }
          }]
        },
      ]
    },
    resolve: {
      alias: {
        'vue$':'vue/dist/vue.esm.js'
      },
      extensions:['*','.js','.vue','.json']
    },
    plugins: [ 
      new HotModuleReplacementPlugin(),
      new VueLoaderPlugin(),
      new HTMLWebpackPlugin({
        showErrors: true,
        cache: true,
        title: 'Vue with Webpack',
        template: path.join(__dirname, 'index.html'),
      })
    ],
  }
  

if (process.env.NODE_ENV === 'production') {

  module.exports.output.publicPath = '/<REPO_NAME>/dist/';

  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    /*new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),*/
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}