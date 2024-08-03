import { legacy_createStore } from "redux";

let initial = 0;

const reducer = (state= initial, Action) => {
    switch (Action.type) {
        case "deposit":
            return state + 10;
        case "withdraw":
            return state - 10;
        default:
            return state;

    }
}


const store = legacy_createStore(reducer);
export default store;