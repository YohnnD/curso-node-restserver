const express = require('express'); //Servidor  Express
const cors = require('cors'); 


class Server{

    constructor () {
        this.app = express();
        this.port = process.env.PORT;


        //PathRouter
         this.userPathRoute = '/api/usuarios'


        //Middleware
        this.middlewares();

        this.routes();
    }


    middlewares () {
        this.app.use(cors());

        this.app.use(express.json());
        
        this.app.use( express.static('public') );
    }

    routes () {
        this.app.use(this.userPathRoute, require('../routes/usuarios'));
    }



    listen (){
        this.app.listen(this.port, () => {
            console.log("corriendo servidor en puerto", this.port);
        })
    }


}



module.exports = Server;