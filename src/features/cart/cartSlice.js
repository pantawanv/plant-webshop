import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart', 

    initialState,

    reducers: {
       /*  addToCart: (state, action) => {
            state.items.push(action.payload);
        }, */
        addToCart: (state, action) => {
            const existingProduct = state.items.find(
                (product) => product.id === action.payload.id
            );

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.items.push({
                    ...action.payload, 
                    quantity: 1,
                });
            }
        },
        increaseQuantity: (state, action) => {
            const product = state.items.find(
                (product) => product.id === action.payload
            );
            if (product) {
                product.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const product = state.items.find(
                (product) => product.id === action.payload
            );
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (product) => product.id !== action.payload
            );
        }, 
        clearCart: (state) => {
            state.items = [];
        },
    },
});


export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;