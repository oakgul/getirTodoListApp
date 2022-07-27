import { combineReducers } from 'redux';
import todolist from './todolist';

const rootReducer = combineReducers({
    todolist: todolist
});

export default rootReducer;