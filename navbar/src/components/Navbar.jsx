import {FaBars} from 'react-icons/fa'
import MenuBar from './MenuBar'
import { useState } from 'react';


const Navbar = ({socials,links}) => {

    const [revealLinks,setRevealLinks]=useState(false)

    const showLinks=()=>{
        if(revealLinks){
            return 'come'
        }
        else{
            return ''
        }
    }

    return ( 
        <div className='menu'>
            <div className='brand'>
                <button onClick={()=>{
                    setRevealLinks(!revealLinks)
                    console.log(revealLinks)
                }} className='burger'><FaBars/></button>
                <a className='brand-name' href="."><h5>Prime<span>GH</span></h5></a>
            </div>
            <MenuBar socials={socials} showLinks={showLinks} links={links}/>
        </div>
     );
}
 
export default Navbar;