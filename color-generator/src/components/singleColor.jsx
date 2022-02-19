import { useState } from "react";

const SingleColor = ({color,index,length}) => {
    const [alert,setAlert]=useState(false)

    const handleColor=(color)=>{
        navigator.clipboard.writeText(`#${color.hex}`)
        setAlert(true)
        setTimeout(()=>{
            setAlert(false)
        },3000)
    }
    let RGB=[...color.rgb]
    return(
        <div onClick={()=>handleColor(color)} style={{backgroundColor:`rgb(${RGB[0]},${RGB[1]},${RGB[2]})`}} className='box'>
            <p className='color-name'>#{color.hex}</p>
            <p style={{color:`${index>(length/2)? 'white':'black'}`}} className='color-weight m-2'>{color.weight+'%'}</p>
            {alert && <p style={{color:`${index>(length/2)? 'white':'black'}`}} className='m-2 text-monospace'>COPIED TO CLIPBOARD</p>}
        </div>
    )
}
 
export default SingleColor;