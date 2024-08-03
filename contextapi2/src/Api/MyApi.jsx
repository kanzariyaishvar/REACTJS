import { createContext, useContext } from "react";
const initial = 0;
const MyContext = createContext()

const Myreducer = (state, action) => {
    switch (action.type) {
        case "INC":
            return state + 10

        case "DEC":
            return state - 10

        default: return state
    }
}


const ContextApi = ({children}) => {
    const [state, dispatch] = useContext(Myreducer, initial)


    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {children}
        </MyContext.Provider>
    )
}


export {  ContextApi,MyContext }