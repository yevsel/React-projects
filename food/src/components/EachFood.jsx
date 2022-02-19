import {FaMoneyBill} from 'react-icons/fa'
import { useState } from 'react';

const EachFood = ({food,increase,decrease}) => {

    const [addToCart,setAddToCart]=useState(false)

    return ( 
        <div className='eachfood p-3'>
            <h4>{food.name}</h4>
            <p className='text-secondary'>{food.description}</p>
            <p>$ {food.price} <FaMoneyBill color='green'/></p>
            <h6>{food.category}</h6>
            {addToCart ? <div className='cta'>
                <button onClick={()=>{
                    decrease(food)
                }} className='decrease btn'>-</button>
                <button className='amount btn'>{food.amount}</button>
                <button onClick={()=>{
                    increase(food)
                }} className='increase btn'>+</button>
            </div> : <div className='cta'><button onClick={()=>setAddToCart(true)} classname='btn btn-primary'>Add to Cart</button></div>}
            
        </div>
     );
}
 
export default EachFood;