import { ERROR, LODDING, SUCCEESS } from "./action"

let initial = {
    loding: false,
    data: [],
    error: false
}

export const Reducer = (state=initial, action) => {
    switch (action.type) {
        case LODDING:
            return {
                ...state,
                loding: true
            }
        case SUCCEESS:
            return {
                ...state,
                loding: false,
                data: action.payload
            }
        case ERROR:
            return{
                ...state,
                error:true,
                loding:false
            }

        default: return state
            
    }
}