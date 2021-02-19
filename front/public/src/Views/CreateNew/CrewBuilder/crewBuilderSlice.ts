import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import UnitRequest, {Unit} from 'Requests/UnitRequest';

export type CrewBuilderState = {
    units: Unit[],
}

export type CrewBuilderReducers = {
    setUnits: CaseReducer<CrewBuilderState, PayloadAction<any>>
}

const request = new UnitRequest();

const slice = createSlice<CrewBuilderState,  CrewBuilderReducers>({
    name: 'crew-builder',
    initialState: {
        units: [],
    },
    reducers: {
        setUnits(state, payload) {
            console.log(state, payload);
        }
    }
})

export const { setUnits } = slice.actions


export const loadUnits = () => async (dispatch: any) => {
    const units = await request.index();
    dispatch(setUnits(units));
};


export default slice.reducer
