import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions'

type ACTION = { type: 'SIDEBAR_OPEN' } | { type: 'SIDEBAR_CLOSE' }

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
