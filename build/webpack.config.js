var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var vueLoaderConfig = require('./vue-loader.conf');

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的main.js文件
    // entry: ['webpack-hot-middleware/client', path.resolve(__dirname, './../src/main.js')],
    entry: {
        index: [
            path.resolve(__dirname, './../src/main.js')
        ],
        vue: ['vue'],
        axios: ['axios'],
        jquery: ['jquery']
    },
    output: {
        // 输出路径是 ./dist
        path: path.resolve(__dirname, './../dist'),
        //公共路径，需要加‘.’，要不然插入到html的js应用会找不到，路径应该是：./main[hash].js(可以省略)
        // publicPath: './',
        filename: './static/js/[name].[hash].js',
        chunkFilename: './static/js/[id].[chunkhash].js'
    },
    module: {
        //webpack2.0的加载器不能省略-loader。
        rules: [{
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/img/[name].[ext]?[hash:7]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/fonts/[name].[hash:7].[ext]'
                }
            },
            //可以省略
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
    ],
    //运行时构建不包含模板编译器，因此不支持 template 选项，只能用 render 选项，但即使使用运行时构建，在单文件组件中也依然可以写模板，因为单文件组件的模板会在构建时预编译为 render 函数。运行时构建比独立构建要轻量30%，只有 17.14 Kb min+gzip大小。上面一段是官方api中的解释。就是说，如果我们想使用template，我们不能直接在客户端使用npm install之后的vue。此时，再去看查vue模块，添加以下几行，再运行，没错ok了。
    resolve: {
        extensions: ['.js', '.vue', '.json', '.css', '.scss'],
        alias: {
            'vue': 'vue/dist/vue.js',
            jquery: path.resolve(__dirname, './../src/plugin/jquery.min.js')
            // jquery: '/source/spa-boilerplate/src/plugin/jquery.min.js'
        }
    }
}
