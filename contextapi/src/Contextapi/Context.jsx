import { createContext, useReducer } from "react";
const initial = 0;


const MyContext = createContext()
                                                                                                                               
const myreducer = (state, action) => {
    switch (action.type) {
        case "INCRES":
            return state + 1

        case "DECRES":
            return state - 1

        default: return state
    }
}




const ContextApi = ({ children }) => {
    const [state, dispatch] = useReducer(myreducer, initial)
    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {children}
        </MyContext.Provider>
    )
}



export { ContextApi, MyContext }
