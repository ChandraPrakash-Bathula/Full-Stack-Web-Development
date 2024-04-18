import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    
    /* Older version of redux : Don't Mutate the state and also returning was mandatory.
const newState = [...state]
newState.items.push(action.payload)
return newState
*/

    /* In the Newer Version of Redux Toolkit : We have to mutate the state, and there is no mandatory of using return.
    Redux Toolkit also uses immer which is a JS library in it for mutation kinda things. */
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.shift(action.payload);
    },
    clearCart: (state) => {
      /* state = [] ; is not possible it only changes local state not the orginal state. and also we need check that with console.log(current(state))*/
      state.items.length = 0;
      // Here or else we can simply return empty array and it still works. return {items:[]};
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
