var ExtractTextPlugin = require('extract-text-webpack-plugin');
var isProduction = process.env.NODE_ENV === 'production';

function cssLoaders(options) {
    options = options || {}

    var cssLoader = {
        loader: 'css-loader'
    }
    // generate loader string to be used with extract text plugin
    function generateLoaders(loader) {
        var loaders = [cssLoader]
        if (loader) {
            loaders.push({
                loader: loader + '-loader'
            })
        }

        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader'
            })
        } else {
            return ['vue-style-loader'].concat(loaders)
        }
    }

    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', {
            indentedSyntax: true
        }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    }
}

module.exports = {
    loaders: cssLoaders({
        extract: isProduction
    })
}
