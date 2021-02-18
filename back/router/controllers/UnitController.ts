import Unit, {IUnit} from '../../database/models/Unit';
import {getUnits} from 'items_parser'
import UnitService from '../../services/models/UnitService';

export default class UnitController {
    async index(): Promise<IUnit[]> {
        return Unit.find();
    }

    async refill() {
        const unitService = new UnitService();
        try {
            const units = await getUnits();
            return unitService.refill(units.units, 'bos');
        }
        catch(e) {
            return e;
        }
    }
}
