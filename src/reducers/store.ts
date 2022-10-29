import {tasksReducer} from './tasks-reducer'
import {combineReducers, compose, legacy_createStore} from "redux";
import {todolistsReducer} from "./todolists-reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}


const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, composeEnhancers());

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;