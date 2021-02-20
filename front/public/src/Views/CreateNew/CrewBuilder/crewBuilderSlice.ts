import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import UnitRequest, {Unit} from 'Requests/UnitRequest';
import uniqueId from 'lodash/uniqueId';
import {Card, createCard} from '../../../Components/Cards/dataCards';

export type CrewBuilderState = {
    units: Card<Unit>[],
    pickedUnits: Card<Unit>[],
}

export type CrewBuilderReducers = {
    setUnits: CaseReducer<CrewBuilderState, PayloadAction<Unit[]>>
    pickACard: CaseReducer<CrewBuilderState, PayloadAction<Unit>>
    pickForFree: CaseReducer<CrewBuilderState, PayloadAction<Unit>>
    removeACard: CaseReducer<CrewBuilderState, PayloadAction<string>>
    moveACard: CaseReducer<CrewBuilderState, PayloadAction<{droppedCardKey: string, droppingPositionKey: string}>>
}

const request = new UnitRequest();

const slice = createSlice<CrewBuilderState,  CrewBuilderReducers>({
    name: 'crewBuilder',
    initialState: {
        units: [],
        pickedUnits: [],
    },
    reducers: {
        setUnits(state, action) {
            state.units = action.payload.map(unit => createCard(unit));
        },
        pickACard(state, action) {
            state.pickedUnits.push(createCard(action.payload));
        },
        pickForFree(state, action) {
            action.payload.cost = 0;
            state.pickedUnits.push(createCard(action.payload));
        },
        removeACard(state, action) {
            state.pickedUnits = state.pickedUnits.filter(unit => unit.key !== action.payload)
        },
        moveACard(state, action) {
            const pickedUnits = [...state.pickedUnits];
            const {droppedCardKey, droppingPositionKey} = action.payload;
            if(droppedCardKey === droppingPositionKey) {
                return;
            }
            const droppedCardIndex = pickedUnits.findIndex(card => card.key === droppedCardKey);
            const droppingPositionIndex = pickedUnits.findIndex(card => card.key === droppingPositionKey);
            if(droppedCardIndex !== -1 && droppingPositionIndex !== -1) {
                const droppedCard = pickedUnits[droppedCardIndex];
                pickedUnits.splice(droppedCardIndex, 1);
                pickedUnits.splice(droppingPositionIndex, 0, droppedCard);
            }
            state.pickedUnits = pickedUnits;
        },
    }
})

export const { setUnits, pickACard, removeACard, moveACard } = slice.actions


export const loadUnits = async (dispatch: any) => {
    const units = await request.index();
    dispatch(setUnits(units));
};

export const selectUnits = (state: { crewBuilderSlice: CrewBuilderState }) => state.crewBuilderSlice.units;
export const selectPickedUnits = (state: { crewBuilderSlice: CrewBuilderState }) => state.crewBuilderSlice.pickedUnits;


export default slice.reducer
