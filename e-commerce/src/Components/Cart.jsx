import React from "react";
import {FaAngleUp,FaAngleDown} from 'react-icons/fa'

const Cart = ({item,remove,increase,decrease}) => {
    return ( 
        <article className='item my-3'>
            <img src={item.img} alt="" width={150} />
            <div className="item-info p-2">
                <h4>{item.title}</h4>
                <p className='price'>${item.price}</p>
                <button onClick={()=>{
                    remove(item)
                }} className='btn btn-sm btn-outline-danger'>remove</button>
            </div>
            <div className='cta p-4'>
                <FaAngleUp onClick={()=>{
                    increase(item)
                }} className='increase'/>
                <p className='pl-1 m-0'>{item.amount}</p>
                <FaAngleDown onClick={()=>{
                    decrease(item)
                }} className='decrease'/>
            </div>
        </article>
     );
}
 
export default Cart;