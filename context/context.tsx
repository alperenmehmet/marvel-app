import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useReducer
} from 'react'
import { reducer } from '../reducers/reducer'
import { SIDEBAR_CLOSE, SIDEBAR_OPEN, GET_CHARACTERS } from '../actions/action'
import characters from '../pages/characters'

export type MarvelContext = {
  children?: React.ReactNode
  openSidebar: any
  closeSidebar: any
  isSidebarOpen: boolean
  characters: []
  payload: typeof characters[]
}

const initialState = {
  isSidebarOpen: false,
  characters: []
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

  const fetchCharacters = async () => {
    const response =
      await fetch(`https://gateway.marvel.com/v1/public/characters/1017100?
ts=1&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_HASH_KEY}`)
    const characters = await response.json()
    dispatch({ type: GET_CHARACTERS, payload: characters })
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

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
