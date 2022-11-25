import React, { createContext, FC, useContext, useReducer } from 'react'
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions'
import { reducer } from '../reducers/reducer'

export type MarvelContext = {
  children?: React.ReactNode
  name?: string
  openSidebar: any
  closeSidebar: any
  isSidebarOpen: boolean
}

const initialState = {
  isSidebarOpen: false
}

const AppContext = createContext({} as MarvelContext)

export const AppProvider: FC<MarvelContext> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }
  return (
    <AppContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
