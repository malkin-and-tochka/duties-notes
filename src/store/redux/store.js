import {combineReducers, createStore} from "redux";
import planForTheDayReducer from "./microTasksReducer";


const reducer = combineReducers({
    dayTasks: planForTheDayReducer
})

export const store = createStore(reducer)