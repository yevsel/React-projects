import { useContext } from "react";
import { GlobalState } from "../Context/GlobalState";

const Balance = () => {

    const {transactions}=useContext(GlobalState)
    const totalAmount = transactions.map(item=>item.amount)
    .reduce((total,item)=>(total+=item),0).toFixed(2)

    return ( 
        <div className='balance'>
            <h4>Balance</h4>
            <h2>¢{totalAmount}</h2>
        </div>
     );
}
 
export default Balance;