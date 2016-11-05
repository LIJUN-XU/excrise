module.exports = {
		//1.入口文件;
		entry:"./js/index.js",
		//2.输出路径及文件;
		output:{
			path:__dirname,	//__(两个下划线为当前文件)
			//path：__dirname+"dist"		//因为在引入字体文件，less后会有新生产的文件都会和bundle在同一目录下，所以将bundle.js放在dist文件夹下（dist也可以自动生成）
			filename:"bundle.js"
		},
		
		//3、依赖模块;
		module:{
			loaders:[
				{test:/\.css$/,loader:"style!css"
					//表示当前的需要调用的css文件配置完成	test是正则的测试类型
				},
				{test:/\.(png|jpg)$/,loader:'url-loader?limit=10000'},
				{test:/\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,loader:'file-loader?name=[name].[ext]'}
			]
		},
		devtool:"source-map",
		devServer:{
			inline:true,
			host:'localhost',
			port:8080
		}
		
	}