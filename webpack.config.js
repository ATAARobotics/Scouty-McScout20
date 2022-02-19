const getConfig = require("@expo/webpack-config");

module.exports = async function(env, argv) {
	const config = await getConfig(env, argv);
	config.devServer = {
	  ...config.devServer,
	  headers: {
	    "Access-Control-Allow-Origin": "*",
	    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
	    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
	  }
	};
	return config;
}
