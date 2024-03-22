import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        // adding the elements  to the empty array
        add:(state,action) => {
            // action.payload means jo bhi chiz tumne bejha hai wo push ho jaayega
            state.push(action.payload);
        },
        remove:(state,action) => {
            // removing elments from array by using filter method
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;