import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
counter: number
  }
  
const initialState: CounterState = {
  counter: 10
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.counter += 1;
    },
    decrement: state => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions