import { createContext,useReducer} from "react"
import Burger1 from '../images/Burger1.png'
import Burger2 from '../images/Burger2.png'
import Burger3 from '../images/Burger3.png'
import Burger4 from '../images/Burger4.png'


const data = [
    {
        id:1,
        title:"Samsung Galaxy S7",
        price:34.99,
        img:Burger1,
        amount:0
    },
    {
        id:2,
        title:"Google Pixel",
        price:49.99,
        img:Burger2,
        amount:0
    },
    {
        id:3,
        title:"Xiaomi Redmi Note 2",
        price:69.99,
        img:Burger3,
        amount:0
    },
    {
        id:4,
        title:"Zenfone Blue Dragon",
        price:99.95,
        img:Burger4,
        amount:0
    },
    {
        id:5,
        title:"Google Pixel",
        price:49.99,
        img:Burger2,
        amount:0
    }
]


export const GlobalContext = createContext(data)


const reducer=(state,action)=>{
    if(action.type==="CLEAR"){
        return []
    }
    if(action.type==="REMOVE_1"){
        return [...state.filter(item=>item.id!==action.payLoad)]
    }
    if(action.type==='INCREASE'){
        let cloned=[...state]
        let index=cloned.findIndex(it=>it.id===action.payLoad)

        let temp={}
        cloned.forEach(item=>{
            if(item.id===action.payLoad){
                temp={...item,amount:item.amount+1}
            }
        })
        cloned[index]=temp
        return [...cloned]
    }
    if(action.type==='DECREASE'){
        let cloned=[...state]
        let index=cloned.findIndex(it=>it.id===action.payLoad)

        let temp={}
        cloned.forEach(item=>{
            if(item.id===action.payLoad){
                if(item.amount>=1){
                    temp={...item,amount:item.amount-1}
                }
                else{
                    temp={...item}
                }
            }
        })
        cloned[index]=temp
        return [...cloned]
    }
}

export const GlobalProvider=({children})=>{

    const [state,dispatch] = useReducer(reducer,data)

    const handleIncrease=(item)=>{
        dispatch({
            type:"INCREASE",
            payLoad:item.id
        })
    }

    const remove=(item)=>{
        dispatch({
            type:"REMOVE_1",
            payLoad:item.id
        })
        
    }

    const handleDecrease=(item)=>{
        dispatch({
            type:"DECREASE",
            payLoad:item.id
        })
    }

    const clearContainer=()=>{
        dispatch({
            type:"CLEAR"
        })
    }

    return(
        <GlobalContext.Provider value={{items:state,handleIncrease,remove,clearContainer,handleDecrease}}>
            {children}
        </GlobalContext.Provider>
    )
}