const path = require('path');

module.exports = {
    entry: "./src/hello-react.tsx",
    output: {
        filename: "hello-react.js",
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    watch: true,    
    mode: "development"
}