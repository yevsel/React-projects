import { useLayoutEffect, useEffect } from "react";

const UseLayoutEffectHook = () => {

    useEffect(()=>{
        console.log("This is from a use Effect")
    },[])
    
    useLayoutEffect(()=>{
        console.log("This is from a use Lay out Effect")
    },[])

    return ( 
        <div>
            <h1 className='display-3'>useLayoutEffect</h1>
            <p>This is called before a useEffect</p>    
        </div>
     );
}
 
export default UseLayoutEffectHook;