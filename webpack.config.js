module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
        libraryTarget: 'umd',
        globalObject: 'this',
        // libraryExport: 'default',
        library: 'webpackNumbers'
    }
}