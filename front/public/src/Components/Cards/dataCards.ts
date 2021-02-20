import {Unit} from '../../Requests/UnitRequest';
import uniqueId from 'lodash/uniqueId';

export type Card<T> = {
    key: string,
    coins: number,
} & T;

export function createCard<T>(item: T) {
    return {...item, key: uniqueId(), coins: 0} as Card<T>;
}

export type onCanDrop = (droppedCardKey: string, droppingPositionKey: string) => void;
