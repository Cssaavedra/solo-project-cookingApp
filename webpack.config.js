const path = require('path');
const webpack = require( 'webpack' );


module.exports =  {
    
    entry: './client/index.js',
    mode: 'development',
    output: {
        filename: 'webpack-bundle.js',
        path: path.resolve(__dirname, 'build/'),
        publicPath: '/build/'
        },
        watch: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        
    module: {
        rules: [
            {
            test: /\.(jsx|js)$/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['react', 'env']
                }
            }
            },
            {
            test: /\.css$/,
            use: [
                {loader: "style-loader"},
                {loader: "css-loader"},
            ]
            }
        ]
        },

};