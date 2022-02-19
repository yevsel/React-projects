import { createContext, useState } from "react";

export const GlobalContex = createContext()

export const GlobalProvider=({children})=>{

    const [show,setShow] = useState(false)
    const [showModal,setShowModal] = useState(false)

    return(
        <GlobalContex.Provider value={{show,setShow,showModal,setShowModal}}>
            {children}
        </GlobalContex.Provider>
    )
}