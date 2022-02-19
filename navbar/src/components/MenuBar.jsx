
const MenuBar = ({socials,links,showLinks}) => {
    return ( 
        <div className={`menu-links ${showLinks()}`}>
            <ul className='links'>
                {links.map(link=>{
                    return(
                        <li key={links.id}>
                            <a href=".">{link.text}</a>
                        </li>
                    )
                })}
            </ul>
            <ul className='socials'>
                {socials.map(social=>{
                    return (
                        <li key={social.id}>
                            <a href={social.url} target={`_blank`}>{social.icon}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default MenuBar;