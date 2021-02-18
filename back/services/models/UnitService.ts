import {Unit as ParsedUnit} from 'items_parser/types';
import Unit, {IUnit} from '../../database/models/Unit';

export default class UnitService {

    async refill(parsedUnits: ParsedUnit[], faction: string) {
        this.deleteFaction(faction);
        const units: IUnit[] = [];
        for(const parsedUnit of parsedUnits) {
            const {types, title, cost, items} = parsedUnit;
            const unit = new Unit({
                types, title, cost, items, faction
            });
            try {
                units.push(await unit.save());
            }
            catch(e) {
                console.error(e);
            }
        }
        return units;
    }

    private async deleteFaction(faction: string) {
        try {
            await Unit.deleteMany({faction});
        } catch (err) {
            console.log(err);
        }
    }
}
