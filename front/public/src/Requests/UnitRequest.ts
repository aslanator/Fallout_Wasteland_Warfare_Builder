import Request from './Request';
import {IUnit} from '../../../../back/database/models/Unit';

export type Unit = IUnit;

export default class UnitRequest extends Request {

    async index(): Promise<Unit[]> {
        return this.run('/api/units', 'GET');
    }
}
