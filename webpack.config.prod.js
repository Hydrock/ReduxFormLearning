const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: 'index.js',
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.scss$/,
                use:['style-loader','css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ]
            }
        ]
    },
    resolve: {
        alias: {
            Templates: path.resolve(__dirname, 'src/templates/'),
            Src: path.resolve(__dirname, 'src/'),
            Components: path.resolve(__dirname, 'src/components/')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/templates/index.html")
        })
    ]
}