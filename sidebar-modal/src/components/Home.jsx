import {FaBars} from 'react-icons/fa'
import { useContext } from 'react';
import { GlobalContex } from '../Context/GlobalContext';

const Home = () => {
    
    const {setShow}=useContext(GlobalContex)

    return ( 
        <div className='cta'>
            <button onClick={()=>(
                setShow(true)
            )} className='toggle btn'><FaBars/></button>
            <button className='toggle-modal btn-sm text-light btn bg-dark'>Show Modal</button>
        </div>
     );
}
 
export default Home;