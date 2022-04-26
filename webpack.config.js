const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/black_jack_front/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "./src/black_jack_front/dist")
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/black_jack_front/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            "@babel/preset-react",
                            {
                                plugins: ["@babel/plugin-proposal-class-properties"],
                            },
                        ],

                    },
                },
            },

            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
        ],
    },
    devServer: {
        static: path.join(__dirname, 'dist_old'),
        port: 3000,
        open: true,
    }
};