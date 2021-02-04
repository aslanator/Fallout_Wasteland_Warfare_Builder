import mongoose, { Schema, Document } from 'mongoose';

const ItemSchema: Schema = new Schema({
    title: { type: String, required: true, unique: true },
    group: { type: String, required: true },
    cost: { type: Number, required: true }
});

export interface IItem extends Document {
    title: string,
    cost: number,
    group: string,
}

export default mongoose.model<IItem>('Item', ItemSchema);
