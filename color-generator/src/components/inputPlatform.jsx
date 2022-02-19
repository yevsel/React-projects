import {useState} from 'react'
import {BsSearch} from 'react-icons/bs'
import Platform from './platform'
import Values from 'values.js'

const InputPlatform = () => {

    const [color,setColor]=useState('')
    const [colorError,setColorError]=useState(false)
    const [list,setList]=useState(new Values('#0275d8').all(20))

    const handleCheck=()=>{
        try {
            setColorError(false)
            const colors = new Values(color).all(10)
            setList([...colors])
        } catch (error) {
            setColorError(true)
        }
    }

    return ( 
        <section>
            <h4 className='m-4 container'>COLOR GENERATOR</h4>
            <div className='form-group m-4 container'>
                <div className='input-group'>
                    <input onChange={(event)=>{
                        setColor(event.target.value)
                    }} style={{border:`2px solid ${colorError? 'red':'green'}`}} type="text" value={color} className='form-control input'placeholder='#0275d8' />
                    <div className='input-group-append'>
                        <button onClick={(event)=>{
                            event.preventDefault()
                            
                            handleCheck()
                        }} type='submit' className='btn btn-success submit'><BsSearch/></button>
                    </div>
                </div>
            </div>
            <Platform list={list}/>
        </section>
     );
}
 
export default InputPlatform;