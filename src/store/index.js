// Working with the core Redux API
// import {createStore} from 'redux';
import { configureStore} from "@reduxjs/toolkit";
import authReducer from './auth';
import counterReducer from './counter';

// const counterReducer = (state = {counter : 0},action) => {
//     if(action.type === "increment"){
//         return {
//             counter : state.counter + 1
//         }
//     }

//     if (action.type === "decrement") {
//       return {
//         counter: state.counter - 1,
//       };
//     }

//     return state;
// }


// const store = createStore(counterReducer);



// Configuring redux with reduxtool kit
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;