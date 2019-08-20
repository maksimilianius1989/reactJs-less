let path = require('path');

let conf = {
    entry: './src/main.js', // откуда
    output: { // куда
        path: path.resolve(__dirname, './dist/'), // абсолютный путь к файлу
        filename: "main.js", // сам файл
        publicPath: "dist/" // что бы система в режиме dev понимала, где лежит js файл
    }
};

module.exports = conf;