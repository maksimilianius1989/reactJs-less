let path = require('path');

let conf = {
    entry: './src/main.js', // откуда
    output: { // куда
        path: path.resolve(__dirname, './dist/'), // абсолютный путь к файлу
        filename: "main.js", // сам файл
        publicPath: "dist/" // что бы система в режиме dev понимала, где лежит js файл
    },
    module: {
        rules: [
            {
                test: /\.js$/, // если система видет файл, то применяется bable-loader
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ["@babel/plugin-transform-react-jsx"]
                    }
                }
            }
        ]
    }
};

module.exports = conf;