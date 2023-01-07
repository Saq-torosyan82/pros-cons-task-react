import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pros: [],
    cons: []
};

const itemsReducer = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem(state, action) {
            const type = action.payload.type || 'pros';
            const item = action.payload.item || '';

            state[type].push(item)

            return state;
        },
        editItem(state, action) {
            const type = action.payload.type || 'pros';
            const objWithIdIndex = state[type].findIndex((item) => item.id === action.payload.id);

            state[type][objWithIdIndex] = action.payload;

            return state;
        },
        deleteItem(state, action) {
            const type = action.payload.type || 'pros';

            state[type] = state[type].filter(item => item.id !== action.payload.id);

            return state
        },
    }
});

export const { addItem, editItem, deleteItem } = itemsReducer.actions;
export const reducer = itemsReducer.reducer;