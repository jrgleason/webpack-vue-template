import path from "path";
let __dirname = path.resolve();
export default {
    entry: "./src/main/javascript/index.js",
	output: {
	    filename: "lib.js",
	    path: path.resolve(__dirname, "out")
	}
}