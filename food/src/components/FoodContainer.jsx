import { useContext } from "react";
import EachFood from "./EachFood";
import { GlobalContext } from "../GlobalAPI/GlobalContext";

const FoodContainer = () => {

    const {data,increase,decrease}=useContext(GlobalContext)

    return ( 
        <div className='foodcontainer'>
            {data.map(food=><EachFood key={food.id} increase={increase} decrease={decrease} food={food}/>)}
        </div>
     );
}
 
export default FoodContainer;