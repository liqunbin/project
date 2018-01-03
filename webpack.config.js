const path = require('path');
const htmlWebpackPlugin  = require('html-webpack-plugin');

const webpack_conf = {
    name: 'client',
    target: 'web',
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, './src'),
            'node_modules'
        ]
    },
    module: {},
};

webpack_conf.entry = ['babel-polyfill','./src/app.js'];//babel-polyfill 据说用于兼容浏览器;

webpack_conf.output = {
    path:path.resolve(__dirname, 'dist'),//输出的文件的路径，__dirname node相对运行命令的决定路径
    filename: 'js/[name]-bundle.js',
    // chunkFilename: debug? '[name].js':'[name].[chunkhash].js',
};

webpack_conf.module.rules = [
    {
        test:/\.js$/,
        exclude: /node_modules/,
        include: [
            path.resolve(__dirname, "src")//定义只解析SRC下的js文件
        ],
        use:{
          loader:'babel-loader',
          options:{
            presets:['env'],//新版本的babel，支持解析ES6、ES7、ES8语法
            plugins:['transform-runtime'],//对一些公共使用的方法模块建立一个独立模块引用，从而避免的重复引用，一定成都加快的打包速度
          }
        }
    },
    {
        test: /\.(less|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
    }, {
        test: /\.(png|jpg|gif|md)$/,
        use: ['url-loader?limit=10000&name=images/[md5:hash:base64:10].[ext]']
    }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: ['url-loader?limit=10000&mimetype=image/svg+xml']
    }
];
//
// webpack_conf.plugins = [
//   new htmlWebpackPlugin({
//     template:'index.html',
//     title:'webpack is good',
//     data: new Date(),
//     minify:{
//       removeComments:true,//去掉注释
//       // collapseWhitespace:true,//去掉空格
//     },
//     // chunks:['main'],//仅加载哪些js模块
//   })
// ];

module.exports = webpack_conf;

// module.exports = {
//   entry:'./src/app.js'
//   // {
//     // main:'./src/js/main.js',
//     // hello:'./src/js/hello.js'
//
//   // }
//   ,
//   output:{
//     path:path.resolve(__dirname, "./dist"),//输出的文件的路径，__dirname node相对运行命令的决定路径
//     filename:'js/[name][hash]-bundle.js',
//     // publicPath:'http://baidu.cn/'//如果要上线地址，给js加的前缀
//   },
//   module:{
//     loaders:[
//       {
//         test:/\.js$/,
//         // exclude:/node_modules/,
//         include:path.resolve(__dirname,'src'),//定义只解析SRC下的js文件
//         exclude:path.resolve(__dirname,'node_modules'),//用node Api方法取路径地址
//         use:{
//           loader:'babel-loader',
//           options:{
//             presets:['env'],//新版本的babel，支持解析ES6、ES7、ES8语法
//             plugins:['transform-runtime'],//对一些公共使用的方法模块建立一个独立模块引用，从而避免的重复引用，一定成都加快的打包速度
//           }
//         }
//       },{
// 				test: /\.css$/,
// 				use: ExtractTextPlugin.extract({
// 					fallback: "style-loader",
// 					use: "css-loader"
// 				})
// 			}
//     ]
//   },
//   plugins:[new htmlWebpackPlugin({
//     template:'index.html',
//     title:'webpack is good',
//     data: new Date(),
//     minify:{
//       removeComments:true,//去掉注释
//       // collapseWhitespace:true,//去掉空格
//     },
//     // chunks:['main'],//仅加载哪些js模块
//   })]
// }
