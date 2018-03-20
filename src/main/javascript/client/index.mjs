// TODO: This is the main entrypoint for webpack
import webpack from "webpack";
import webpackConfig from "./webpack.config.mjs"
const compiler = webpack({
});
compiler.run((err, stats) => {
	console.log("Welp we ran");
});