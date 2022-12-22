import {tasksReducer} from './tasks-reducer'
import {AnyAction, applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import {todolistsReducer} from "./todolists-reducer";
import thunk, {ThunkDispatch} from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

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
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>

export const AppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector


// @ts-ignore
window.store = store;
