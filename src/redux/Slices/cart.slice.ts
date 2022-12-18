import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface CartAddState {
    id: string;
    name: string;
    image: string;
    price?: number;
    description?: string;
}

interface CartRemoveState {
    id: string;
}

const initialState: CartAddState[] = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartAddState>) => {

            if (state.length === 0 || state.filter(item => item.id === action.payload.id).length === 0) {
                state.push(action.payload);
            }

        },
        removeToCart: (state, action: PayloadAction<CartRemoveState>) => {
            const { id } = action.payload;
            if (state.some((item) => item.id === id)) {
                return state = state.filter((item) => item.id !== id);
            }
        }
    }
});

export const { addToCart, removeToCart } = cartSlice.actions;