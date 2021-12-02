import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    
  value:[]
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       

        addToCart:(state,action)=>{
        state.value.push(action.payload);
        },
        removeCard:(state,action)=>{
            state.value.forEach((product,index) => {
                if(product.id===action.payload){
                    state.value.splice(index,1);
                }
                
            });
        }
    }
});

export const { addToCart,removeCard} = CartSlice.actions
export default CartSlice.reducer