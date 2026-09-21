import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
};

const exampleSlice = createSlice({
    name: 'example', 

    initialState,

    reducers: {
        incrementBy: (state, action) => {
            state.value += action.payload;
        }
    },
});

export const { incrementBy } = exampleSlice.actions;
export default exampleSlice.reducer;