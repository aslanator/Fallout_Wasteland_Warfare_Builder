import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'faction',
    initialState: {
        name: '',
    },
    reducers: {
        set: (state, action: {payload: string}) => {
            state.name = action.payload;
        },
    },
});

export const { set } = counterSlice.actions;

export const selectName = (state: any) => state.counter.name;

export default counterSlice.reducer;
