import { useRef } from "react";

const UseRefHook = () => {

    const inputRef = useRef(null)

    return ( 
        <div>
            <h1 className='display-3'>useRef</h1>
            <input placeholder='Enter text...' type="text" ref={inputRef} className='form-contrl' />
            <button onClick={()=>{
                console.log(inputRef.current.value)
                inputRef.current.focus()
            }} className=''>Change name</button>
        </div>
     );
}
 
export default UseRefHook;