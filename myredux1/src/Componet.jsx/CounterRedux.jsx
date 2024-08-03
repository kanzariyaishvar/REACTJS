import { legacy_createStore } from "redux";

let count = 0;
const reduser = (state = count, Action) => {
  switch (Action.type) {

    case "withdraw":
      return state + 1;

    case "deposit":
      return state - 1;

    default:
      return state;
  }

}


const store = legacy_createStore(reduser)
export default store