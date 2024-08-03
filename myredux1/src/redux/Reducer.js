let initial = 0

export const reducer = (state = initial, Action) => {
    switch (Action.type) {
        case "withdraw":
            return state + 10;
        case "withdraw":
            return state - 10

        default:
            break;
    }
}