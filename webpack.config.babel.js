import path from 'path';
import VueLoaderPlugin from 'vue-loader/lib/plugin'

const dirSrc = path.resolve(__dirname, 'src');

export default {
    entry: {
        "components/dropdown": path.resolve(dirSrc, 'components/dropdown.vue')
    },
    output: {
        path: path.resolve(__dirname + '/dist/'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: '[name]',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader'
            }
            // {
            //     test: /\.css$/,
            //     loader: 'style!less!css'
            // }
        ]
    },
    externals: {
        "@tweenjs/tween.js": "@tweenjs/tween.js"
    },
    plugins:[
        new VueLoaderPlugin()
    ]
};