import Item from "./Item";
import { useState,useEffect } from "react";

const getLocalStorage=()=>{
    let data=localStorage.getItem('data')
    if(data){
        return JSON.parse(data)
    }
    else{
        return []
    }
}

const Grocery = () => {

    const [demoData,setDemoData]=useState('')
    const [edit,setEdit]=useState(false)
    const [itemToEditIndex,setItemToEditIndex]=useState(null)
    const [data,setData]=useState(getLocalStorage())

      useEffect(()=>{
        localStorage.setItem('data',JSON.stringify(data))
      },[data])
    
      const onSubmit = (item)=>{
        if (item.length!==0 && edit===false){
            let DEMODATA = {name:item}
            let clonedData = [DEMODATA,...data]
            setData([...clonedData])
            setDemoData('')
        }
        else if(item.length!==0 && edit===true){
            let clonedData=[...data]
            clonedData[itemToEditIndex].name=demoData
            setEdit(false)
            setDemoData('')
            setItemToEditIndex(null)
        }
      }

      const onEdit=(item,index)=>{
        setEdit(true)
        setItemToEditIndex(index)
        setDemoData(item.name)
      }

      const onDelete = (item)=>{
          let cloneData=[...data]
          let newData = cloneData.filter(data=>data.name!==item.name)
          setData([...newData])
          setEdit(false)
          setDemoData('')
      }

      const clearData=()=>{
          setData([])
          setEdit(false)
          setDemoData('')
      }

    return ( 
        <article className='grocery shadow pb-3'>
            <h4 className='text-center mb-3 bg-light py-1'>Grocery Maker</h4>
            <div className='form-group mx-3'>
                <input onChange={(event)=>{
                    setDemoData(event.target.value)
                }} onKeyUp={(event)=>{
                    if(event.key==='Enter'){
                        onSubmit(demoData)
                    }
                }} type="text" value={demoData} placeholder='e.g. fanta' className='' />
                <button onClick={(event)=>{
                    event.preventDefault()
                    onSubmit(demoData)
                }} className='submit' type='submit'>{edit ? 'EDIT':'SUBMIT'}</button>
            </div>
            {data.map((item,index)=>{
                return(
                    <Item index={index} onEdit={onEdit} onDelete={onDelete} key={index} item={item}/>
                )
            })}
            <div>
                {data.length>0 && <button onClick={()=>clearData()} className='clear'>Clear Groceries</button>}
            </div>
        </article>
     );
}
 
export default Grocery;