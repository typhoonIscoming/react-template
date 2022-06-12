const path = require('path');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.config');
const config = require('./config');

const PORT = process.env.PORT && Number(process.env.PORT) || config.dev.port;
const HOST = `localhost`;

const options = {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'), // since we use CopyWebpackPlugin.
    host: HOST,
    open: true,
    historyApiFallback: true,
};

const webpackConfig = merge(baseConfig, {
    devServer: {
        disableHostCheck: true,
        https: false,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});

webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
const compiler = webpack(webpackConfig);

const server = new webpackDevServer(compiler, options);

server.listen(PORT, HOST, () => {
    console.log('dev server listening on port ', PORT);
});

