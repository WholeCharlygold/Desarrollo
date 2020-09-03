import {Router} from 'express';
import {indexController} from '../controllers/indexController'


class IndexRoute{

    public route:Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.route.get('/',indexController.index);
        this.route.post('/',indexController.login);
    }
}

const index = new IndexRoute();

export default index.route;