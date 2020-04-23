const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    resolve: {
        modules: ["src", "node_modules"]
    }
};