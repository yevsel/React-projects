import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const Total = () => {

    const {items} = useContext(GlobalContext)
    

    const total=()=>{
        let demo=[]
        items.forEach((item)=>{
            demo.push(item.amount*item.price)
        })
        return demo.reduce((total,item)=>(total+=item),0).toFixed(2)
    }

    return ( 
        <div className='total-container'>
            <h4>Total</h4>
            <h4 className='total'>$ {total()}</h4>
        </div>
     );
}
 
export default Total;