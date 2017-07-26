//可是我们直接修改了 webpack.config.js 文件，这就意味着当我们执行 构建命令 的时候，配置变了，那么我们的构建也跟着变了，所以，一个好的方式是，不去修改webpack.config.js文件，我们在build目录下新建一个 webpack.dev.conf.js文件，意思是开发模式下要读取的配置文件,这样，我们在dev环境下的配置文件中覆盖了基本配置文件

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
// 引入基本配置
var config = require('./webpack.config');

//开发的时候路径不能加‘.’，可以直接省略
// config.output.publicPath = '/';

config.plugins = [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    new HtmlWebpackPlugin({
        //打包后的html文件
        filename: 'index.html',
        //获取到的html文件
        template: path.resolve(__dirname, './../src/index.html'),
        inject: true,
        minify: {
            //去掉注释
            removeComments: true,
            //去掉空格
            collapseWhitespace: false
        }
    }),
    
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vue', 'axios', 'jquery'],
        minChunks: Infinity
        // filename: 'vendors.js',
    }),

    new CopyWebpackPlugin([{
        from: path.resolve(__dirname, './../static'),
        to: './static',
        ignore: ['.*']
    }])
];

// 动态向入口配置中注入 webpack-hot-middleware/client
// var devClient = 'webpack-hot-middleware/client';
var devClient = './build/dev-client';
Object.keys(config.entry).forEach(function (name, i) {
    var extras = [devClient];
    config.entry[name] = extras.concat(config.entry[name]);
});

module.exports = config;
