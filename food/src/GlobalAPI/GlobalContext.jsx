import { createContext, useReducer } from "react";
import Data from '../data/food.json'

export const GlobalContext = createContext()

const reducer = (state, action) => {
    if (action.type === 'FILTER' && action.payload === 'All') {
        console.log(action.payload)
        return [...Data]
    }
    else if (action.type === "FILTER") {
        let clonedData = Data.filter(item => {
            return item.category.toLowerCase() === action.payload.toLowerCase()
        })
        return [...clonedData]
    }
    else if (action.type === "INCREASE_AMOUNT") {
        const index = state.findIndex(item => item.id === action.payload.id)
        const cloned = [...state]
        let obj = {}
        cloned.forEach(item => {
            if (item.id === action.payload.id) {
                obj = { ...item, amount: item.amount + 1 }
            }
        })
        cloned[index] = obj
        return [...cloned]
    }
    else if (action.type === "DECREASE_AMOUNT") {
        const index = state.findIndex(item => item.id === action.payload.id)
        const cloned = [...state]
        let obj = {}
        cloned.forEach(item => {
            if (item.id === action.payload.id) {
                if (item.amount >= 1) {
                    obj = { ...item, amount: item.amount - 1 }
                }
                else{
                    obj={...item}
                }
            }
        })
        cloned[index] = obj
        return [...cloned]
    }

}

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, Data)


    const filter = (command) => {
        dispatch({
            type: "FILTER",
            payload: command
        })
    }

    const increase = (item) => {
        dispatch({
            type: "INCREASE_AMOUNT",
            payload: item
        })
    }

    const decrease = (item) => {
        dispatch({
            type: "DECREASE_AMOUNT",
            payload: item
        })
    }

    return (
        <GlobalContext.Provider value={{ data: state, filter, increase, decrease }}>
            {children}
        </GlobalContext.Provider>
    )
}