import Item, {IItem} from '../../database/models/Item';

export default class ItemController {

    async index(): Promise<IItem[]> {
        return Item.find();
    }
}
