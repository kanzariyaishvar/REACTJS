import { applyMiddleware, legacy_createStore } from "redux";
import { Reducer } from "./ProductReducer/reducer";
import { thunk } from "redux-thunk";



export    const store=legacy_createStore(Reducer ,applyMiddleware(thunk));




