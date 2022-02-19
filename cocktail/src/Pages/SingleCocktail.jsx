import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const SingleCocktail = ({item}) => {
    
    const {id} =useParams()


    return ( 
        <div>
            {id}
        </div>
     );
}
 
export default SingleCocktail;