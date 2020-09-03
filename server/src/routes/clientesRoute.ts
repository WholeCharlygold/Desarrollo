import {Router} from 'express';
import clientesController from '../controllers/clientesController'

class ClientesRoute{
    

    public router : Router =Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/',clientesController.getAll);
        this.router.post('/',clientesController.add);
        this.router.get('/:id',clientesController.getOne);
        this.router.put('/:id',clientesController.edit);
        this.router.delete('/:id',clientesController.delete);
    }

}

const clientesRoute = new ClientesRoute();
export default clientesRoute.router;