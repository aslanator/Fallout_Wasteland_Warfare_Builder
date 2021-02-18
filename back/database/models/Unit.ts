import mongoose, { Schema, Document } from 'mongoose';

const UnitSchema: Schema = new Schema({
    title: { type: String, required: true, unique: true },
    faction: { type: String, required: true },
    cost: { type: Number, required: true },
    types: {type: Array, required: true},
    items: {type: Array, required: true},
});

export enum TYPES {
    "Wasteland Items",
    "High Tech",
    "Advanced Items",
    "Usable Items"
}

export interface IUnit extends Document {
    types: TYPES,
    title: string,
    cost: number,
    items: string[],
    faction: string,
}

export default mongoose.model<IUnit>('Unit', UnitSchema);
