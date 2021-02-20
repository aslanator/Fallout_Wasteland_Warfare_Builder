import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import UnitRequest, {Unit} from 'Requests/UnitRequest';
import uniqueId from 'lodash/uniqueId';
import {WithKey} from 'Types/data';

export type CrewBuilderState = {
    units: Unit[],
    pickedUnits: WithKey<Unit>[],
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
        pickedUnits: [],
    },
    reducers: {
        setUnits(state, action) {
            state.units = action.payload;
        },
        pickACard(state, action) {
            const unitWithKey: WithKey<Unit> = {...action.payload, key: uniqueId()} as WithKey<Unit>;
            state.pickedUnits.push(unitWithKey);
        },
        removeACard(state, action) {
            state.pickedUnits = state.pickedUnits.filter(unit => unit.key !== action.payload)
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
