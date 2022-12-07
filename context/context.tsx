import React, { createContext, FC, useContext, useReducer } from 'react'
import { reducer } from '../reducers/reducer'
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from '../actions/action'

export type MarvelContext = {
  children?: React.ReactNode
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

  const value = {
    ...state,
    openSidebar,
    closeSidebar
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
