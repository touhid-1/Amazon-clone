import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    user: null,
}

export const amazonSlice = createSlice({
    name: "amazon",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload)
            }
        },
        deleteItem : (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload);
        },
        increment: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload)
            item.quantity++; 
        },
        decrement: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload)
            if(item.quantity === 1 ){
                item.quantity = 1
            } else {
                item.quantity--
            }
        },
        loggedIn: (state, action) => {
            state.user = action.payload; 
        }
    }
})


export const { addToCart ,deleteItem, increment, decrement, loggedIn } = amazonSlice.actions;
export default amazonSlice.reducer;