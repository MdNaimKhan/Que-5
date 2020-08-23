import { CREATE_TODO, UPDATE_TODO, FILTER_SET, DELETE_TODO } from '../actions/index'
import _ from 'lodash'

const INITIAL_STATE = {
    todo:[{
        description:"description",filter:'Active',id:"3678"
    }],
 };
 export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
            case CREATE_TODO: {
                return {
                    ...state,
                    todo : _.concat(...state.todo,action.payload)
                };}
            case UPDATE_TODO: {
                return {
                  ...state,
                  todo: state.todo.map(item => {
                    if (item.id === action.payload.id) {
                      return action.payload
                    } else {
                      return item
                    }
                  })
                }
              }
              case DELETE_TODO: {
                return {
                  ...state,
                  todo: state.todo.filter(item => action.payload !== item.id)
                }
              }
              case FILTER_SET: {
                return {
                  ...state,
                  priorityFilter: action.payload
                }
              }    
            default:
                return state;
    }};