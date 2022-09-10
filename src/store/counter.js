import { createSlice } from "@reduxjs/toolkit";

const counterInitalState = {
  counter: 0,
  showCounter: false
};

const counterSlice = createSlice({
  name: "authentication",
  initialState: counterInitalState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
