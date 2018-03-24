// TODO: This is the main entrypoint for webpack
import webpack from "webpack";
import webpackConfig from "./webpack.config.mjs"
const compiler = webpack(webpackConfig);
compiler.run((err, stats) => {
    console.log(JSON.stringify(webpackConfig));
	console.log("Welp we ran");
});