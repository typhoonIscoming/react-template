// https://www.webpackjs.com/loaders/css-loader

/**
 * [root]: 解析 URL 的路径，以 / 开头的 URL 不会被转译
 * [url]: 启用/禁用 url() 处理
 * [alias]: 创建别名更容易导入一些模块
 * [import]: 启用/禁用 @import 处理
 * [modules]: 启用/禁用 CSS 模块
 * [minimize]: 启用/禁用 压缩
 * [sourceMap]: 启用/禁用 Sourcemap
 * [camelCase]: 以驼峰化式命名导出类名
 * [imporLoaders]: 在 css-loader 前应用的 loader 的数量
 * [localIdentName]: 配置生成的标识符(ident)
 */
/**
 * {
    loader: 'css-loader',
    options: { root: '.' }
   }
   url(/image.png) => require('./image.png')
   不建议使用'相对根路径'的 url。你应该只将其用于旧版 CSS 文件。
 */

/**
 * alias: {
        "../fonts/bootstrap": "bootstrap-sass/assets/fonts/bootstrap"
    }
*/

/**
 * modules 会启用 CSS 模块规范。
 * 默认情况下，这将启用局部作用域 CSS。（你可以使用 :global(...) 或 :global 关闭选择器 and/or 规则
 * CSS 将所有的类名暴露到全局的选择器作用域中。样式可以在局部作用域中，避免全局作用域的样式。
 * 语法 :local(.className) 可以被用来在局部作用域中声明 className。局部的作用域标识符会以模块形式暴露出去。
 * 使用 :local（无括号）可以为此选择器启用局部模式。:global(.className) 可以用来声明一个明确的全局选择器。
 * 使用:global（无括号）可以将此选择器切换至全局模式。loader 会用唯一的标识符(identifier)来替换局部选择器。
 * 所选择的唯一标识符以模块形式暴露出去。
 * :local(.className) { background: red; } -> ._23_aKvs-b8bW2Vg3fwHozO { background: red; }
 * :local .className .subClass :global(.global-class-name) { color: blue; }
 * -> ._23_aKvs-b8bW2Vg3fwHozO ._13LGdX8RMStbBE9w-t0gZ1 .global-class-name { color: blue; }
 */

module.exports = {
    loader: 'css-loader',
    options: {
        modules: {
            // 生成的类名的模式'[path][name]_[local]--[hash:base64:5]'
            // [path]当前文件的路径(基于src:[src-views-home])
            // [name]当前文件的名字
            // [local]当前类名(className='Home')
            // [hash:base64:5]基于base64的hash字符串截取5字符
            localIdentName: '[local]--[hash:base64:5]',
        },
    },
}
