import Transaction from "./Transaction";
import { useContext } from "react";
import { GlobalState } from "../Context/GlobalState";

const TransactionList = () => {

    const {transactions}=useContext(GlobalState)


    return ( 
        <div>
            <h5>History</h5>
            {transactions.map(item=>(
                <Transaction key={item.id} item={item}/>
            ))}
        </div>
     );
}
 
export default TransactionList;