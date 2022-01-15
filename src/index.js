import React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import { CounterContextProvider } from "./context/CounterContext"
import { GlobalStyles } from "./styles"

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <GlobalStyles />
      <App />
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
