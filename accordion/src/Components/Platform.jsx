import { useState } from "react";
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'


const Platform = ({data}) => {

    const [display,setDisplay]=useState(false)

    return ( 
        <section className='card m-2'>
            <div className='card-body'>
                <div className='info'>
                    <h5>{data.title}</h5>
                    <button onClick={()=>setDisplay(!display)} className='btn'>{display ? <AiOutlineMinus color={'red'}/> : <AiOutlinePlus color={'red'}/>}</button>
                </div>
                <div className='body'>
                    {display && data.info}
                </div>
            </div>
        </section>
     );
}
 
export default Platform;