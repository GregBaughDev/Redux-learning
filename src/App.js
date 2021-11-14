import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import './App.css';

function App() {
  // State
  const initialState = {value: 0}

  // Action creator
  const addNewItem = (evt) => {
    if(evt === 'Increment'){
      return {
        type: 'item/itemIncrement',
      }
    } else if (evt === 'Decrement'){
      return {
        type: 'item/itemDecrement'
      }
    }
  }

  // Reducer
  const itemReducer = (state = initialState, action) => {
    if(action.type === 'item/itemIncrement'){
      return {
        ...state,
        value: state.value + 1
      }
    } else if(action.type === 'item/itemDecrement'){
      return {
        ...state,
        value: state.value - 1
      }
    }
    return state
  }

  // Store
  const store = configureStore({reducer: itemReducer})

  const action = (e) => {
    store.dispatch(addNewItem(e.target.innerText))
    console.log(store.getState().value)
  }

  return (
    <>
      <h1>Hello world!</h1>
      {/* <h2>{store.getState().value}</h2> */}
      <button onClick={e =>action(e)}>Increment</button>
      <button onClick={e =>action(e)}>Decrement</button>
    </>
  );
}

export default App;
