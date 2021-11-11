const {VueLoaderPlugin} = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Components = require('unplugin-vue-components/webpack')
const path = require('path')
const {ElementPlusResolver} = require("unplugin-vue-components/resolvers");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    target: 'web',
    devtool: false,
    mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, '../packages/index.ts'),
    externals: {
        vue: 'vue',
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../lib'),
        library: 'CyberCloudUI',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json', '.mjs'],
        alias: {
            '@': path.resolve(__dirname, '../packages'),
        },
        mainFiles: ["index"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            exclude: /node_modules/,
                        }
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
                test: /\.mjs$/i,
                resolve: {byDependency: {esm: {fullySpecified: false}}}
            },
            {
                test: /\.js$/, //正则匹配.js后缀文件,使用babel-loader进行解析
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader', options: {
                        exclude: /node_modules/,
                    }
                }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        // element 按需加载
        // Components({
        //     resolvers : [ElementPlusResolver()]
        // }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "/styles/[name].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin()
    ]
}
