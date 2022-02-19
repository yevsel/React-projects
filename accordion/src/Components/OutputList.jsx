import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const Output = ({data,handleDrop}) => {
    return ( 
        <section className='shadow card m-3'>
            <div className='card-body'>
                <h5>{data.title}</h5>
                <button onClick={()=>handleDrop(data)} className='btn btn-outline-primary'>
                    {data.allow ? <AiOutlineMinus color={'#0275d8'}/>:<AiOutlinePlus color={'#0275d8'}/>}
                    </button>
            </div>
            <div className='p-3'>
                {data.allow ? data.info:""}
            </div>
        </section>
     );
}
 
export default Output;