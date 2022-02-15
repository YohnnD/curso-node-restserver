require('dotenv').config();//Traer env
const Server = require('./models/server');


const server = new Server();

server.listen();


