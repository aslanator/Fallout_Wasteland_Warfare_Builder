import {Express} from 'express-serve-static-core';
import RoutesResolver from './router/RoutesResolver';
import ItemController from './controllers/ItemController';
import UnitController from './controllers/UnitController';

export default function routes(app: Express) {
    const routesResolver = new RoutesResolver(app);

    const itemController = new ItemController();
    const unitController = new UnitController();
    routesResolver.get('/api/items', itemController.index);
    routesResolver.get('/api/units', unitController.index);
    routesResolver.get('/api/units/refill', unitController.refill);
}
