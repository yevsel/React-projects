import { useContext } from "react";
import { GlobalContex } from "../Context/GlobalContext";

const ModalFile = () => {

    const {showModal,setShowModal} = useContext(GlobalContex)

    return ( 
        <div className='modal'>
            <h3>Hello from ggha</h3>
        </div>
     );
}
 
export default ModalFile;