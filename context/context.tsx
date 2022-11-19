import React, { createContext, FC, useContext, useState } from 'react'

export type MarvelContext = {
  children?: React.ReactNode
  name?: string
}

const AppContext = createContext({} as MarvelContext)

export const AppProvider: FC<MarvelContext> = ({ children }) => {
  const [name, setName] = useState<string>('hello')

  return <AppContext.Provider value={{ name }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
