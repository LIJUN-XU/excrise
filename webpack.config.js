module.exports = {
		//1.入口文件;
		entry:"./js/index.js",
		//2.输出路径及文件;
		output:{
			path:__dirname,	//__(两个下划线为当前文件)
			filename:"bundle.js"
		},
		
		//3、依赖模块;
		module:{
			loaders:[
				{	
					test:/\.css$/,loader:"style!css"
					//表示当前的需要调用的css文件配置完成	test是正则的测试类型
				}
			]
		},
		devtool:"source-map",
		devServer:{
			inline:true,
			host:'localhost',
			port:8080
		}
		
	}