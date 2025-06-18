import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counter' 
import {shoesSlice} from './shoes/shoesSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        shoes: shoesSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch