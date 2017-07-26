var path = require('path');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');
// 引入基本配置
var config = require('./webpack.config');

var webpackConfig = merge(config, {
    plugins: [
        //删除dist文件夹
        new CleanWebpackPlugin(['dist'], {
            root: '/source/spa-boilerplate',
            verbose: true,
            dry: false,
            //exclude: ['shared.js']
        }),
        // extract css into its own file
        new ExtractTextPlugin({
            filename: './static/css/[name].[contenthash].css'
        }),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // 压缩代码
        new webpack.optimize.UglifyJsPlugin({
        	comments: false,
            compress: {
                warnings: false
            }
        }),

        //提取公共文件
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vue', 'axios', 'jquery'],
            minChunks: Infinity
            // filename: 'vendors.js',
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './../src/index.html'),
            inject: true,
            minify: {
                //去掉注释
                removeComments: true,
                //去掉空格
                collapseWhitespace: true
            }
        }),

        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, './../static'),
            to: './static',
            ignore: ['.*']
        }])
    ]
})

module.exports = webpackConfig;
