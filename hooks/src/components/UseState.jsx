import {useState} from 'react'

const UseStateHook = () => {
    //This hook helps your components interact with values in the application
    //The setCounter helps you to change the value of the counter
    //The useState takes in the initial value as parameter

    const [counter,setCounter]=useState(0)
    const [inputValue,setInputValue]=useState('input value')

    return ( 
        <div className='counter '>
            <h1 className='display-3'>useState</h1>
            <h4>{counter}</h4>
            <button onClick={
                ()=>setCounter(number=>number+1)
            } className='btn btn-primary'>increment</button>
            <div className='form-group m-2'>
                <input
                onChange={(event)=>{
                    setInputValue(event.target.value)
                }} type="text" placeholder='Enter something...' className='form-control'/>
                {inputValue}
            </div>
        </div>
     );
}
 
export default UseStateHook;