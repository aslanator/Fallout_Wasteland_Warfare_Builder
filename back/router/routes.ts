import {Express} from 'express-serve-static-core';
import RoutesResolver from './router/RoutesResolver';
import ItemController from './controllers/ItemController';

export default function routes(app: Express) {
    const routesResolver = new RoutesResolver(app);

    const itemController = new ItemController();
    routesResolver.get('/api/items', itemController.index);
}
