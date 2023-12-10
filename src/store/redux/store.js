import {combineReducers, createStore} from "redux";
import {taskCategoriesReducer} from "./tasksCategoriesReducer";


const reducer = combineReducers({
    tasksCategories: taskCategoriesReducer
})

export const store = createStore(reducer)
