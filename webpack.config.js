const path = require('path');

module.exports = {
    entry: ['./utils.js', './src/app.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            }
            // {
            //     test: /\.es6$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // }
        ]
    }
}