const path = require('path');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const modeProduction = process.env.NODE_ENV === 'production';

module.exports = {
    mode: modeProduction ? 'production' : 'development',
    entry: ['babel-polyfill', './src/index.js'],
    devtool: !modeProduction && 'source-map',
    output: {
        publicPath: '/',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({template: path.resolve( __dirname, 'public', 'index.html')}),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        port: 3000,
        open: true,
        inline: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {loader: 'babel-loader'},
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader",],
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                exclude: /gltf/,
                loader: 'url-loader'
            },
            {
                test: /\.mp4$/i,
                loader: 'file-loader',
            },
        ]
    }
};