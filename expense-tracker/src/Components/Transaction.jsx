import { GlobalState } from '../Context/GlobalState'
import {FaTrash} from 'react-icons/fa'
import { useContext } from 'react'

const Transaction = ({item}) => {

    const {handleDelete} = useContext(GlobalState)

    const barColor=()=>{
        if(parseInt(item.amount)>0){
            return {borderRight:`3px solid green`}
        }
        else{
            return {borderRight:`3px solid red`}
        }
    }

    return ( 
        <div style={barColor()} className='transaction my-2'>
            <div className='info-money'>
                <FaTrash onClick={()=>{
                    handleDelete(item)
                }} className='trash'/>
                <p>{item.text}</p>
            </div>
            {item.amount > 0 ? <p>¢{Math.abs(item.amount)}</p> : <p>-¢{Math.abs(item.amount)}</p>}
        </div>
     );
}
 
export default Transaction;