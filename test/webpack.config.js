const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
    return path.join(__dirname, './', dir)
}

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, './src'),
    entry: './index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            minify: {
                removeComments: true, 
                collapseWhitespace: true, 
                // minifyCSS: true  
            }
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9001,
        hot: true, 
        overlay: true
    }
}