var path = require('path')

module.exports = {
    entry: { MTQ: "./src/index.js" },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: "[name].bundle.js",
        library: "[name]",
        libraryTarget: "var"
    }
};
