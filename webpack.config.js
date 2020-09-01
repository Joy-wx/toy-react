module.exports = {
    entry: {
        main: "./main.js"
    },
    module:{
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'], // 转换旧语法
                    plugins: [['@babel/plugin-transform-react-jsx', {pragma: 'creatElement'}]] // 改变名称
                }
            }
        }]
    },
    mode: "development",
    optimization: {
        minimize: false
    }
}
