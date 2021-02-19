import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import UnitRequest, {Unit} from 'Requests/UnitRequest';
import uniqueId from 'lodash/uniqueId';

export type CrewBuilderState = {
    units: Unit[],
    pickedUnits: Record<string, Unit>,
}

export type CrewBuilderReducers = {
    setUnits: CaseReducer<CrewBuilderState, PayloadAction<Unit[]>>
    pickACard: CaseReducer<CrewBuilderState, PayloadAction<Unit>>
    removeACard: CaseReducer<CrewBuilderState, PayloadAction<string>>
}

const request = new UnitRequest();

const slice = createSlice<CrewBuilderState,  CrewBuilderReducers>({
    name: 'crewBuilder',
    initialState: {
        units: [],
        pickedUnits: {},
    },
    reducers: {
        setUnits(state, action) {
            state.units = action.payload;
        },
        pickACard(state, action) {
            console.log(action);
            state.pickedUnits[uniqueId()] = action.payload;
        },
        removeACard(state, action) {
            delete state.pickedUnits[action.payload];
        }
    }
})

export const { setUnits, pickACard, removeACard } = slice.actions


export const loadUnits = async (dispatch: any) => {
    const units = await request.index();
    dispatch(setUnits(units));
};

export const selectUnits = (state: { crewBuilderSlice: CrewBuilderState }) => state.crewBuilderSlice.units;
export const selectPickedUnits = (state: { crewBuilderSlice: CrewBuilderState }) => state.crewBuilderSlice.pickedUnits;


export default slice.reducer
