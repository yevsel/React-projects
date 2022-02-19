import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import Cocktail from "./Cocktail";

const Cocktails = () => {

    const {cocktails,loading} = useContext(GlobalContext)

    if(loading){
        return (
            <div>
                Fuck you
            </div>
        )
    }

    if(cocktails.length<1){
        return(
            <h1 className='text-center m-5 text-light'>No Drinks Matched your search</h1>
        )
    }

    return ( 
        <section className='container cocktail-box mb-5'>
            {cocktails.map(cocktail=>(
                <Cocktail key={cocktail.id} cocktail={cocktail}/>
            ))}
        </section>
     );
}
 
export default Cocktails;