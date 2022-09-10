import {useSelector,useDispatch} from "react-redux";
// import React,{Component} from 'react';
import classes from './Counter.module.css';
import { counterActions } from "../store/counter";

const Counter = () => {

  // UseDispatch function is used to create a action dispatch function
  
  const dispatch = useDispatch();
  

  // useSelector uses is used to obtai a slice of the state which is done using a function passed into the hook
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
     dispatch(counterActions.toggleCounter());
  };
 const onDecrementHandler = () => {
        dispatch(counterActions.decrement());
  }

  const onIncrementHandler = () => {
    dispatch(counterActions.increment());
  };

   const onIncreaseBy10Handler = () => {
     dispatch(counterActions.increase(10));
   };


    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {show && <div className={classes.value}>{counter}</div>}
        <div>
          <button onClick={onDecrementHandler}>decrement</button>
          <button onClick={onIncrementHandler}>increment</button>
          <button onClick={onIncreaseBy10Handler}>increase By 10</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
};

export default Counter;


// Sample Counter component class using connect Redux API 

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler = () => {
//        console.log("Toggling counter value");
//     }

  
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//           <button onClick={this.incrementHandler.bind(this)}>increment</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter : state.counter
//   }
// }


// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment : () => { dispatch({type: 'increment'})},
//     decrement : () => { dispatch({type: 'decrement'})}
//   }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
