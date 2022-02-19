import { Link } from "react-router-dom";

const Cocktail = ({cocktail}) => {
    return ( 
        <article className='cocktail p-1 mb-5'>
            <img src={cocktail.image} alt={cocktail.name} />
            <div className='info p-2'>
                <h3>{cocktail.name}</h3>
                <h5>{cocktail.glass}</h5>
                <p className='text-monospace text-secondary'>{cocktail.info}</p>
                <Link to={`/cocktail/${cocktail.id}`}>
                    <button  className='btn btn-sm btn-secondary'>READ MORE..</button>
                </Link>
            </div>
        </article>
     );
}
 
export default Cocktail;