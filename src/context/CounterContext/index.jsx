import { createContext, useContext, useReducer, useRef } from "react"
import { buildActions } from "./build-actions"
import { reducer } from "./reduces"

export const initialState = {
  counter: 0,
  loading: false,
}

const Context = createContext()

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = useRef(buildActions(dispatch))
  return <Context.Provider value={[state, actions]}>{children}</Context.Provider>
}

export const useCounterContext = () => {
  const context = useContext(Context)

  if (typeof context === "undefined") throw new Error("You have to use useCounterContext inside <CounterContextProvider />")
  return [...context]
}
