import {FaTwitter} from 'react-icons/fa'
import { useState, useContext } from 'react';
import { GlobalState } from '../Context/GlobalState';


const AddTransaction = () => {

    const {addTransaction}=useContext(GlobalState)
    const [text,setText]=useState('')
    const [amount,setAmount]=useState(0)

    return ( 
        <div>
            <h5>Add Transaction</h5>
            <div className='form-group text'>
                <label htmlFor="text">Item</label>
                <input onChange={(event)=>(
                    setText(event.target.value)
                )} value={text} type="text" placeholder='Transaction name..' className='form-control' id="text" />
            </div>
            <div className='form-group amount'>
                <label htmlFor="amount">Amount [ -Expense, +Income ]</label>
                <input onChange={(event)=>(
                    setAmount(event.target.value)
                )} value={amount} type="number" placeholder='Enter Amount..' className='form-control' id="amount" />
            </div>
            <button onClick={(event)=>{
                event.preventDefault()
                const newTransaction={
                    id:Math.ceil(Math.random()*1000),
                    text:text,
                    amount:+amount
                }
                addTransaction(newTransaction)
            }} type='submit' className='btn text-light w-100 bg-primary'>Add Transaction</button>
            <div className='text-center mt-3'>
                <a className='btn btn-outline-success' href="https://www.twitter.com/yevsel"><FaTwitter/>yevsel</a>
            </div>
        </div>
     );
}
 
export default AddTransaction;