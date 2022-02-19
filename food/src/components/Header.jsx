import {FaShoppingCart,FaUtensils} from 'react-icons/fa'
import { useContext } from 'react';
import { GlobalContext } from '../GlobalAPI/GlobalContext';

const Header = () => {

    const {data}=useContext(GlobalContext)

    const totalAmount=(data)=>{
        const amount=data.reduce((total,item)=>total+=item.amount,0)
        return amount
    }

    return ( 
        <div className='header'>
            <div className='logo'>
                <a href="."><FaUtensils/>Yevoo's KitCHEN</a>
            </div>
            <div className='cart'>
                <FaShoppingCart className='cart-icon'/>
                <span className='badge badge-danger'>{totalAmount(data)}</span>
            </div>
        </div>
     );
}
 
export default Header;