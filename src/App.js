import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import './App.css';

function App() {
  // State
  const initialState = {value: 0}
  
  // Action creator
  const addNewItem = value => {
    return {
      type: 'item/addNewItem',
      payload: value
    }
  }

  // Reducer
  const itemReducer = (state = initialState) => {
    return {
      ...state,
      item: state.payload
    }
  }

  // Store
  const store = configureStore({reducer: itemReducer})

  store.dispatch(addNewItem(1))

  console.log(store.getState())

  return (
    <h1>Hello world!</h1>
  );
}

export default App;
