module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '离线百度地图',
        }
    },
    assetsDir: '',   // 静态文件目录
    lintOnSave: true, // 是否开启编译时是否不符合eslint提示
    filenameHashing: false,
}