import * as actionTypes from "./action-types"

export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionTypes.INCREASE }),
    decrease: () => dispatch({ type: actionTypes.DECREASE }),
    reset: () => dispatch({ type: actionTypes.RESET }),
    setCounter: (payload) => dispatch({ type: actionTypes.SET_COUNTER, payload }),
    asyncIncrease: () => asyncIncreaseFn(dispatch),
    asyncError: () => asyncErrorFn(dispatch),
  }
}

const asyncIncreaseFn = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START })
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve("RESOLVED!")
      dispatch({ type: actionTypes.ASYNC_INCREASE_END })
    }, 2000)
  })
}

const asyncErrorFn = async (dispatch) => {
  dispatch({ type: actionTypes.ASYNC_INCREASE_START })

  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Deu ruim!'))
      dispatch({ type: actionTypes.ASYNC_INCREASE_ERROR })
    }, 2000)
  })
}
