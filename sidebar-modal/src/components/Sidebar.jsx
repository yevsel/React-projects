import {FaStar,FaHome,FaTeamspeak,FaProjectDiagram,FaCalendar,FaDochub} from 'react-icons/fa'
import { useContext } from 'react';
import { GlobalContex } from '../Context/GlobalContext';

const Sidebar = () => {

    const {show,setShow} = useContext(GlobalContex)

    return ( 
        <div className={`sidebar ${show? 'show':''}`}>
            <div className='head'>
                <div>
                    <h2>StarBite<FaStar color='blue'/></h2>
                </div>
                <div>
                    <button onClick={()=>(
                        setShow(false)
                    )} className='btn btn-sm btn-danger'>close</button>
                </div>
            </div>
            <hr />
            <div className='menu'>
                <div className='home'><FaHome/>Home</div>
                <div className='team'><FaTeamspeak/>Team</div>
                <div className='projects'><FaProjectDiagram/>Projects</div>
                <div className='calendar'><FaCalendar/>Calendar</div>
                <div className='document'><FaDochub/>Document</div>
            </div>
        </div>
     );
}
 
export default Sidebar;