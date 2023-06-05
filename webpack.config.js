const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    output: {
        filename: "properties.js"
    },
    plugins: [
        new CleanWebpackPlugin(["dist"])
    ],
    resolve: {
        modules: ["src", "node_modules"]
    }
};