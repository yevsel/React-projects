import {useState,useEffect} from 'react'

const UseEffectHook = () => {

    const [text,setText]=useState('I will change after 3 seconds')

    useEffect(()=>{
        const res = new Promise((resolve,reject)=>{
            try{
                setTimeout(()=>{
                    resolve("This text is from a Promise in a useEffect hook")
                },0)
                console.log("HELLo")
            }catch(error){
                reject("ERROR in promise")
            }
        })
        res.then(data=>setText(data))
    },[])

    return ( 
        <div>
            <h1 className='display-3'>useEffect</h1>
            <h4 className='text-danger'>{text}</h4>
        </div>
     );
}
 
export default UseEffectHook;