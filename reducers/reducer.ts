import { SIDEBAR_CLOSE, SIDEBAR_OPEN, GET_CHARACTERS } from '../actions/action'

type ACTION =
  | { type: 'SIDEBAR_OPEN' }
  | { type: 'SIDEBAR_CLOSE' }
  | { type: 'GET_CHARACTERS' }

type STATE = {
  isSidebarOpen: boolean
}

export const reducer = (state: STATE, action: ACTION) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false }
  }

  throw new Error()
}
