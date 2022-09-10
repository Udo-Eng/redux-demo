import {createSlice} from '@reduxjs/toolkit';

const authInitalState = {
    isAuthenticated : false
}

const authSlice = createSlice({
  name: "auth",
  initialState: authInitalState,
  reducers: {
      login(state){
        state.isAuthenticated = true;
      },
      logout(state){
        state.isAuthenticated = false;
      }
  }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;