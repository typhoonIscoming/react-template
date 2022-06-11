const path = require('path');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.config');
const config = require('./config');

const PORT = process.env.PORT && Number(process.env.PORT) || config.dev.port;

const options = {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'), // since we use CopyWebpackPlugin.
    host: 'localhost',
    open: true,
    historyApiFallback: true, // 缺少该配置，会出现上面的错误
};

const webpackConfig = merge(baseConfig, {
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});

webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
const compiler = webpack(webpackConfig);

const server = new webpackDevServer(compiler, options);

server.listen(PORT, 'localhost', () => {
    console.log('dev server listening on port ', PORT);
});

