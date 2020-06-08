var path = require("path");

module.exports = {
	mode: "development",
	// mode: "production",
	entry: {
		pageA: "./pageA",
		pageB: "./pageB",
		pageC: "./pageC"
	},
	optimization: {
		chunkIds: "named",// 指定打包过程中的chunkId，设为named会生成可读性好的chunkId，便于debug
		splitChunks: {
			minSize: 0,// 默认30000（30kb），但是demo中的文件都很小，minSize设为0，让每个文件都满足大小条件
			// name:false,
			cacheGroups: {
				commons: {
					chunks: "all",//加入按需加载后，设为all将所有模块包括在优化范围内
					// name: "commons",
					minChunks: 2,
					maxInitialRequests: 5, // 默认为3，无法满足我们的分包数量
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					// priority: 10,
					// enforce: true
				}
			}
		}
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].js",
	}
};
