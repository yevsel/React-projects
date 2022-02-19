import { useContext } from "react";
import { GlobalState } from "../Context/GlobalState";

const IncomeAndExpense = () => {

    const {transactions}=useContext(GlobalState)

    const income = transactions.filter(item=>item.amount>0)
    .reduce((total,item)=>(total+=item.amount),0).toFixed(2)
   
    const expense = transactions.filter(item=>item.amount<0)
    .reduce((total,item)=>(total+=item.amount),0).toFixed(2)
    return ( 
        <div className='income-expense my-3 text-center'>
            <div className='income'>
                <h3>INCOME</h3>
                <p>+¢{income}</p>
            </div>
            <div className='expense'>
                <h3>EXPENSE</h3>
                <p>-¢{Math.abs(expense)}</p>
            </div>
        </div>
     );
}
 
export default IncomeAndExpense;