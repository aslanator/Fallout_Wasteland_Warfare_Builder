import {Express} from 'express-serve-static-core';
import { NotSupportedMethodError } from './RouterResolver.errors';
import {HTTP_METHODS, RouterResolverOptions} from './RouterResolver.types';
import {RequestHandler} from 'express';

export default class RoutesResolver {
    private app: Express;

    constructor(app: Express) {
        this.app = app;
    }

    add(method: HTTP_METHODS, route: string, func: RequestHandler) {
        switch (method) {
            case HTTP_METHODS.GET: {
                this.get(route, func);
            }
        }
        throw new NotSupportedMethodError(`Method ${method} not allowed`);
    }

    get(route: string, func: RequestHandler) {
        this.app.get(route, async (_, res) =>{
            // @ts-ignore
            const response = await func(...arguments);
            res.send(response);
        });
    }
}
