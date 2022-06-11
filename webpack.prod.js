const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const baseConfig = require('./webpack.config');

const config = merge(baseConfig, {
    mode: 'production',
    plugins: [
        // new webpack.IgnorePlugin(/\.\/locale/, /moment/), // 以前版本的写法
        new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/,
        }),
        new CleanWebpackPlugin(),
        new OptimizeCssAssetsWebpackPlugin(),
    ],
    watch: false,
});

webpack(config,
    (err, stats) => {
        if (err) {
            throw err
        }
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
            chunks: false,
            chunkModules: false
        }) + '\n\n');

        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'))
            process.exit(1)
        }
    }
)
