import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './features/uiSlice'
import menuReducer from './features/menuSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    menu: menuReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 