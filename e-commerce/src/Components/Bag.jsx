import {FaShoppingBag} from 'react-icons/fa'
import { GlobalContext } from '../GlobalContext/GlobalContext';
import { useContext } from 'react';


const Bag = () => {

    const {items}=useContext(GlobalContext)
    const amount = items.map(item=>item.amount).reduce((total,item)=>item+=total,0)

    return ( 
        <div className='bag'>
            <FaShoppingBag className='shopping-bag'/>
            <span className='badge bg-success text-light'>{amount}</span>
        </div>
     );
}
 
export default Bag;