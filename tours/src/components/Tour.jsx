
import { useState } from "react";


const Tour = ({tour,onDelete}) => {
    const [readMore,setReadMore]=useState(false)
    const [readText,setReadText]=useState('....Read More')
    const setRead=()=>{
        let oldState=readMore
        setReadMore(!oldState)
        if(readMore){
            setReadText("...Read More")
        }
        else{
            setReadText("Show Less")
        }
    }
    return ( 
        <article className='tour-body my-5'>
            <div className='container-fluid tour p-0 m-0 '>
                <img src={tour.image} alt={tour.title} />
            </div>
            <div className='info p-4'>
                <div className='header my-2'>
                    <p>{tour.title}</p>
                    <p className='price px-1'>{tour.price}</p>
                </div>
                <div className='info-body'>
                    {readMore ? tour.body:tour.body.substring(0,100)}
                    <button onClick={()=>setRead()} className='p-0 btn bg-light text-info'>{readText}</button>
                </div>
                <div className='interest'>
                    <button onClick={()=>onDelete(tour)} className='w-50 my-2 btn btn-outline-danger btn-sm'>NOT INTERESTED</button>
                </div>
            </div>
        </article>
     );
}
 
export default Tour;