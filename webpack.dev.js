const path = require('path');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const { merge } = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const baseConfig = require('./webpack.config');
const config = require('./config');

const PORT = process.env.PORT && Number(process.env.PORT) || config.dev.port;
const HOST = config.getIP();

const options = {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'), // since we use CopyWebpackPlugin.
    host: HOST,
    open: true,
    historyApiFallback: true,
    stats: 'errors-only', // 加上这一行, 代表: 只打印错误日志
};

const webpackConfig = merge(baseConfig, {
    devServer: {
        disableHostCheck: true,
        https: false,
        overlay: true, // 编译出现错误时，将错误直接显示在页面上
        quiet: true, // 如果使用webpack-dev-server，需要设为true，禁止显示devServer的console信息
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsWebpackPlugin({
            clearConsole: true,
            compilationSuccessInfo: {
                messages: [`Your application is running here: http://${HOST}:${PORT}`],
            },
        }),
    ],
});

webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
const compiler = webpack(webpackConfig);

const server = new webpackDevServer(compiler, options);

server.listen(PORT, HOST, () => {
    console.log('dev server listening on port ', PORT);
});

