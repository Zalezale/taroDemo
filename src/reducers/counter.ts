import { ADD, MINUS,DELETE } from '../constants/counter'

const INITIAL_STATE = {
 todo:[
   {id:1,text:'第一条明细'}
 ]
}

export default function counter (state = INITIAL_STATE, action) {
  let toduNum = state.todo.length
  switch (action.type) {
    case ADD:
      return {
        todo:state.todo.concat([
          {
            id:toduNum+1,
            text:action.text
          }
        ])
      }
     case MINUS:
       let todo = state.todo.map(item=>item)
           todo.pop()
      return {
        todo
      }
       case DELETE:
       return{
         todo: []
       }
     default:
       return state
  }
}
