import { createContext, useEffect,useState } from "react";
import Data from '../data/data';


export const GlobalContext = createContext()



export const GlobalProvider=({children})=>{

    const [loading,setLoading] = useState(false)

    const [cocktails,setCocktails] = useState(Data)

   

    const onSearch=(value)=>{
        let cloned=[...cocktails]
        let newCloned = cloned.filter(data=>data.name.toLowerCase().includes(value.toLowerCase()))
        setCocktails(newCloned)
    }

    return(
        <GlobalContext.Provider value={{cocktails,onSearch,loading,setLoading}}>
            {children}
        </GlobalContext.Provider>
    )
}
