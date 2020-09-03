import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoute from './routes/indexRoute';
import clientesRoute from './routes/clientesRoute'

import bodyParser from 'body-parser';

class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port',process.env.PORT || 3200);
        this.app.use(morgan('dev' ));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended:true
        }));
        
    }
    
    routes():void{
        this.app.use('/',indexRoute);
        this.app.use('/api/desarrollo',clientesRoute);
    
    }
  
    start():void{
        this.app.listen(this.app.get('port'), () => 
        console.log("Server on port "+this.app.get('port')));
    }
}

const server = new Server();
server.start();