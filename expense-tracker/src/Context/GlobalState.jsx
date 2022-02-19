import { createContext, useReducer } from "react";

// Initial amount
const initialState = {
    transactions:[
        {
            id:1,
            text:"Salary",
            amount:1689
        },
        {
            id:2,
            text:"Fruit Juice",
            amount:-244
        },
        {
            id:3,
            text:"Chocolate bar",
            amount:-10
        }
    ]
}

const reducer=(state,action)=>{
    switch(action.type){
        case "DELETE":
            return {transactions:state.transactions.filter(data=>data.id!==action.payload)}
        case "ADD_TRANSACTION":
            return {...state,transactions:[action.payload,...state.transactions]}
        default :
            return state
    }
}

// CreateContext
export const GlobalState = createContext(initialState)

export const GlobalStateProvider = ({children}) => {
    const [state,dispatch]=useReducer(reducer,initialState)
    
    // actions
    const handleDelete = (item)=>{
        dispatch({
            type:'DELETE',
            payload:item.id
        })
    }
    
    // add transaction
    const addTransaction = (item)=>{
        dispatch({
            type:"ADD_TRANSACTION",
            payload:item
        })
    }

    return(
        <GlobalState.Provider value={{transactions:state.transactions,handleDelete,addTransaction}}>
            {children}
        </GlobalState.Provider>
    )
}
 
