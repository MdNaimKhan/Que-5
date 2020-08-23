import {CREATE_TODO,UPDATE_TODO, DELETE_TODO, FILTER_SET} from './index'


export const createTodo = (request) => {
   return {
       type: CREATE_TODO,
       payload: request
   };
}

export const updateTodo = (request) => {
    return {
      type: UPDATE_TODO,
      payload: request
    }
  }
  
  export const deleteTodo = (id) => {
    return {
      type: DELETE_TODO,
      payload: id
    }
  }
  
  export const setFilter = (str) => {
    return {
      type: FILTER_SET,
      payload: str
    }
  }
  