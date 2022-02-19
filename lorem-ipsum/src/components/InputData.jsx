import Platform from "./Platform"
import {useState} from 'react'

const InputData = ({data}) => {
    
    const [count,setCount]=useState()
    const [paragraph,setParagraph]=useState([])

    const handleGenerate=()=>{
        let body=[]
        if (count>data.length){
            setCount(data.length)
        }
        for (let i=0;i<count;i++){
            body.push(data[i])
        }
        setParagraph([...body])
    }

    return ( 
        <div>
            <div className='space'>
                <label htmlFor="data"><h5>Paragraph:</h5> </label>
                <input placeholder='Number?' value={count} className='data mx-3' max={data.length} min={0} type="number" id="data"
                onChange={(event)=>{
                    setCount(event.target.value)
                }} />
                <input onClick={(event)=>{
                    event.preventDefault()
                    handleGenerate()
                }} className='btn btn-sm btn-primary mx-3' type="submit" value='GENERATE' />
                <div>
            </div>
                <Platform paragraph={paragraph}/>
            </div>
        </div>
     );
}
 
export default InputData;