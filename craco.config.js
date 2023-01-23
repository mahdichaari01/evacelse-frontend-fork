// craco.config.js (in root)
const path = require("path");
module.exports = {
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src/"),
		},
	},
};
