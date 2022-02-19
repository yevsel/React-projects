

const Item = ({person}) => {
    return ( 
        <article className='person my-2'>
            <div className='personImage'>
                <img src={person.image} alt={person.name} />
            </div>
            <div className='information'>
                <h5>{person.name}</h5>
                <p>{person.age} years</p>
            </div>
        </article>
     );
}
 
export default Item;