const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const getStyleLoaders = (pre) => {
    return [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: ['postcss-preset-env']
                }
            }
        },
        pre
    ].filter(Boolean)
}

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/js/[name].[contenthash:10].js',
        chunkFilename: 'static/js/[name].[contenthash:10].chunk.js',
        assetModuleFilename: 'static/media/[hash:10][ext][query]',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: getStyleLoaders()
            },
            {
                test: /\.less$/,
                use: getStyleLoaders('less-loader')
            },
            {
                test: /\.s[ac]ss$/,
                use: getStyleLoaders('sass-loader')
            },
            {
                test: /\.styl$/,
                use: getStyleLoaders('stylus-loader')
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                }
            },
            {
                test: /\.(woff2?|ttf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, './src'),
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    cacheCompression: false,
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        }),
        new ESLintPlugin({
            context: path.resolve(__dirname, './src'),
            exclude: "node_modules",
            cache: true,
            cacheLocation: path.resolve(__dirname, './node_modules/.cache/.eslintcache')
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/[name].[contenthash:10].css",
            chunkFilename: "static/css/[name].[contenthash:10].chunk.css"
        }),
        new CopyPlugin({
            patterns: [
                { 
                    from: path.resolve(__dirname, './public'), 
                    to: path.resolve(__dirname, './dist'), 
                    globOptions: {
                        ignore: ["**/index.html"]
                    }
                },
            ],
        }),
        // 请确保引入这个插件！
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: false,
            __VUE_PROD_DEVTOOLS__: false
        })
    ],
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vue: {
                    test: /[\\/]node_modules[\\/]vue(.*)?[\\/]/,
                    name: 'chunk-vue',
                    priority: 40,
                },
                elementPlus: {
                    test: /[\\/]node_modules[\\/]element-plus(.*)?[\\/]/,
                    name: 'chunk-element-plus',
                    priority: 30,
                },
                libs: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'chunk-libs',
                    priority: 20,
                }
            }
        },
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}.js`
        },
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                  implementation: ImageMinimizerPlugin.imageminGenerate,
                  options: {
                    // Lossless optimization with custom option
                    // Feel free to experiment with options for better result for you
                    plugins: [
                      ["gifsicle", { interlaced: true }],
                      ["jpegtran", { progressive: true }],
                      ["optipng", { optimizationLevel: 5 }],
                      // Svgo configuration here https://github.com/svg/svgo#configuration
                      [
                        "svgo",
                        {
                          plugins: [
                            "preset-default",
                            "prefixIds",
                            {
                                name: "sortAttrs",
                                params: {
                                    xmlnsOrder: "alphabetical"
                                }
                            }
                          ]
                        },
                      ],
                    ],
                  },
                },
            }),
        ]
    },
    resolve: {
        extensions: ['.vue', '.js', '.json'],
    }
}