var path = require('path')

module.exports = {
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
        publicPath: '.dist'
    },
    module:{
        rules:[
            {
                test:'\.css$/',
                user:[
                        'style-loader',
                        'css-loader'
                ]
            }
        ]
    }
}; 