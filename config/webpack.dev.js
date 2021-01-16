const commonConfig = require('./webpack.common');
const path = require('path')
const merge =  require('webpack-merge');
module.exports = merge(commonConfig, {
    devtool: 'cheap-module-source-map',
    module:{
        rules:[
         {
             test: /\.scss|css$/,
             use: [
               { loader: "style-loader" },
               { loader: "css-loader" },
               { loader: "postcss-loader"},
               { loader: "sass-loader" }
             ]
           }
        ]
    },
    devServer:{
        port:3001,
        open: true,
        contentBase:path.join(process.cwd(),'docs')
    }
})
