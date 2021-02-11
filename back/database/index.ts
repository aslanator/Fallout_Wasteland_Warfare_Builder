import mongoose from 'mongoose';
import Item, {IItem} from "./models/Item";

//todo заменить на значение из конфига
const url = "mongodb://localhost:27017";
var opt = {
    user: 'root',
    pass: 'example',
    db: 'builder'
};

mongoose.connect(url, opt);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected');
});

// const item = new Item({title: 'Базука', cost: 100, group: 'Guns'});
//
// item.save(function (err: any, item: IItem) {
//     if (err) return console.error('Здесь', err);
//     else {
//         console.log('Успех');
//     }
// });

