import Application from "./Application.mjs";
import http from "http";
let express = new Application();
// TODO: Normailize port
express.app.set("port", '3000');
let server = http.createServer(express.app);
server.listen("3000");
let onError = function(error){
		if (error.syscall !== 'listen') {
			throw error;
		}

		let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

		// handle specific listen errors with friendly messages
		switch (error.code) {
			case 'EACCES':
				console.error(bind + ' requires elevated privileges');
				process.exit(1);
				break;
			case 'EADDRINUSE':
				console.error(bind + ' is already in use');
				process.exit(1);
				break;
			default:
				throw error;
		}
}
let onListening = function(){
		let addr = server.address();
		let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
}

server.on('error', onError);
server.on('listening', onListening);
