let initial = 0;

const reducer = (state = initial, action) => {

    switch (action.type) {
        case "withdraw":
            return state + 10;

        case "diposit":
            return state - 10;

        default: return state
    }


}
export default reducer