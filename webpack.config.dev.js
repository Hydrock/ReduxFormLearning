const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'index.js',
        // publicPath: '/assets/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                // include: [
                //     path.resolve(__dirname, 'src')
                // ],
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 8080,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/template/index.html")
        })
    ]
}