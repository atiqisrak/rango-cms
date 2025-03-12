import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UiState {
  sidebarOpen: boolean
  theme: 'light' | 'dark'
  isMobile: boolean
}

const initialState: UiState = {
  sidebarOpen: true,
  theme: 'light',
  isMobile: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload
    },
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload
    },
  },
})

export const { toggleSidebar, setSidebarOpen, toggleTheme, setTheme, setIsMobile } = uiSlice.actions
export default uiSlice.reducer 