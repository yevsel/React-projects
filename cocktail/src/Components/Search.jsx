import { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
const Search = () => {
    
    const {onSearch,setLoading}=useContext(GlobalContext)
    const searchRef = useRef('')

    useEffect(()=>{
        searchRef.current.focus()
    },[])

    return ( 
        <div className='search my-5 form-group'>
            <label htmlFor="search">Search Cocktail</label>
            <input onChange={(event)=>{
                setLoading(true)
                onSearch(event.target.value)
                setLoading(false)
            }} ref={searchRef} type="text" className='form-control' placeholder='Enter Cocktail...' name="" id="search" />
        </div>
     );
}
 
export default Search;