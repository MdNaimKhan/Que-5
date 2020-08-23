import { combineReducers } from 'redux';
import TodoReducer from './todoReducer'; 

const rootReducer = combineReducers({
   todo:TodoReducer  
});

export default rootReducer;