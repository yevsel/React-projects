import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import Cart from "./Cart";
import Total from "./Total";

const CartContainer = () => {

    const {items,remove,handleIncrease,clearContainer,handleDecrease}=useContext(GlobalContext)

    return ( 
        <section className="my-5 container">
            {items.map(phone=>(
                <Cart key={phone.id} decrease={handleDecrease} increase={handleIncrease} item={phone} remove={remove}/>
            ))}
            <hr/>
            <Total/>
            <div className='text-center my-3'>
                <button onClick={()=>{
                    clearContainer()
                }} className='btn w-50 btn-danger'>Clear Container</button>
            </div>
        </section>
     );
}
 
export default CartContainer;