import Request from './Request';
import {IUnit, TYPES} from '../../../../back/database/models/Unit';

export type Unit = {
    types: TYPES,
    title: string,
    cost: number,
    items: string[],
    faction: string,
}

export default class UnitRequest extends Request {

    async index(): Promise<Unit[]> {
        return this.run('/api/units', 'GET');
    }
}
