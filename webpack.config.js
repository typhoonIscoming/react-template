const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const resolve = (relativePath) => path.resolve(__dirname, relativePath);

const appDirectory = fs.realpathSync(process.cwd());
console.log("appDirectory", appDirectory);

module.exports = {
    mode: "development",
    devtool: process.env.NODE_ENV === 'development' ? 'cheap-module-source-map' : false,
    entry: "./src/index.js",
    output: {
        filename: "[name].bundle.js",
        path: resolve("dist"),
        clean: true,
        publicPath: "./",
    },
    resolve: {
        alias: {
            '@': resolve('src')
        },
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Tse's zone",
            filename: "index.html",
            template: "./index.html",
            inject: true,
            minify: {
                removeComments: false,
                collapseWhitespace: false,
                removeAttributeQuotes: false,
                // more options: https://github.com/kangax/html-minifier#options-quick-reference
            },
        }),
    ],
    optimization: {
        /**
         * 将 optimization.runtimeChunk 设置为 true 或 'multiple'，会为每个入口添加一个只含有 runtime 的额外 chunk
         *  runtimeChunk: { name: (entrypoint) => `runtime~${entrypoint.name}` }
         */
        /**
         * 值 "single" 会创建一个在所有生成 chunk 之间共享的运行时文件。此设置是如下设置的别名
         * runtimeChunk: { name: 'runtime' }
         * 
         * 默认值是 false：每个入口 chunk 中直接嵌入 runtime
         * 对于每个 runtime chunk，导入的模块会被分别初始化，因此如果你在同一个页面中引用多个入口起点，请注意此行为。
         * 你或许应该将其设置为 single，或者使用其他只有一个 runtime 实例的配置
         */
        // runtimeChunk: "single",
        sideEffects: true,
        splitChunks: { // 分割代码块,把公共的分离出来
            cacheGroups: { // 缓存组
                common: { // 公共模块   公共模块满足的条件就进行抽离
                    minSize: 61200, // 大于0字节
                    minChunks: 1, // 公共模块被引入多少次，就单独抽离出来
                    /**
                     * 这表明将选择哪些 chunk 进行优化。当提供一个字符串，有效值为 all，async 和 initial。设置为 all 可能特别强大，
                     * 因为这意味着 chunk 可以在异步和非异步 chunk 之间共享
                     */
                    chunks: 'initial', // 从哪里开始就抽离代码，还有异步模块
                    maxSize: 102400,
                    // name: false,
                    /**
                     * name: false, 拆分 chunk 的名称。设为 false 将保持 chunk 的相同名称，因此不会不必要地更改名称。这是生产环境下构建的建议值。
                     * 如果你选择指定一个函数，则可能会发现 chunk.name 和 chunk.hash 属性（其中 chunk 是 chunks 数组的一个元素）在选择 chunk 名时特别有用
                     */
                    name(module, chunks, cacheGroupKey) {
                        // const moduleFileName = module
                        //   .identifier()
                        //   .split('/')
                        //   .reduceRight((item) => item);
                        const allChunksNames = chunks.map((item) => item.name).join('~');
                        return `${cacheGroupKey}-${allChunksNames}`;
                    },
                },
                vendor: { // 第三方 第三方的模块也单独抽离出来
                    priority: 1, // 设置权重，先抽取第三方的模块 
                    // 当 webpack 处理文件路径时，它们始终包含 Unix 系统中的 / 和 Windows 系统中的 \。
                    // 这就是为什么在 {cacheGroup}.test 字段中使用 [\\/] 来表示路径分隔符的原因
                    test: /[\\/]node_modules[\\/]/, // 只要引用了node_modules中的文件，就单独抽离出来
                    minSize: 0, // 大于0字节
                    minChunks: 2, // 公共模块被引入多少次，就单独抽离出来
                    chunks: 'initial', // 从哪里开始就抽离代码，还有异步模块
                    name: false,
                },
            },
        },

        minimizer: [
            new TerserPlugin({
                extractComments: false, // 去除模块中的LICENSE.txt文件
            })
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/preset-env", { modules: "commonjs" }],
                            "@babel/preset-react",
                        ],
                        plugins: ["@babel/plugin-transform-runtime"],
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};
