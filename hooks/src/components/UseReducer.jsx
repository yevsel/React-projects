import {useReducer} from 'react'

const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT":
            return {count:state.count+1,showText:state.showText}
        case "SHOWTEXT":
            return {count:state.count,showText:!state.showText}
        default:
            return state
    }
}

const UseReducerHook = () => {

    const [state, dispatch]=useReducer(reducer,
        {count:0, showText:true})

    return ( 
        <div >
            <h1 className='display-3'>useReducer</h1>
            <h4>{state.count}</h4>
            <button onClick={()=>{
                dispatch({type:'INCREMENT'})
                dispatch({type:"SHOWTEXT "})
            }} className='btn btn-primary'>increment</button>
            {state.showText && <h4>This text is toggled</h4>}
        </div>
     );
}
 
export default UseReducerHook;