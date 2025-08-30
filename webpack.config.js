const path = require("path");
// export default {
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src','app'),
    output: {
        path: path.resolve(__dirname,'dist'),//this is where all the build finished files goes 
        filename: 'bundle.js',
        publicPath: '/',//which is where our code expects to find 
    },
    resolve: {
        extensions: ['.js','.jsx'] // extensions which we want our webpack to process
    },
    devServer: {
        historyApiFallback: true // this is a setting that you have to enable to use react router
    },
    module: { // it describes how do we want our app to be compiled 
        rules: [{
            test: /\.jsx?/,
            loader:'babel-loader'
        }]
    }
}