import {
  ADD,
  MINUS,
  DELETE
} from '../constants/counter'

export const add = (text) => {
  return {
    text,
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

export const del = () => {
  return {
    type: DELETE
  }
}

//异步的action
export function asyncAdd(dispatch) {
    setTimeout(() => {
      dispatch(add('延时自增'))
    }, 2000)
}
