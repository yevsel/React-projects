

const Button = ({category,filter}) => {
    return ( 
        <div>
            <button onClick={()=>filter(`${category}`)} className='mx-5 p-2'>{category}</button>
        </div>
     );
}
 
export default Button;