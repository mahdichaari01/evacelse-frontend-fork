//include fs
const fs = require("fs");
//get path from command line
const path = process.argv[2];
//check if file exists

if (fs.existsSync(path)) {
	//delete file
	fs.unlink(path, (err) => {
		if (err) {
			console.error(err);
			return;
		}

		//file removed
	});
}
