import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div className='header'>
            <div className='title'>
                <Link to='/'>
                    <h2>Juice<span>Bay</span></h2>
                </Link>
            </div>
            <ul className='menu'>
                <li>
                    <Link to='/'>
                        <a href=".">HOME</a>
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        <a href=".">ABOUT</a>
                    </Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Header;