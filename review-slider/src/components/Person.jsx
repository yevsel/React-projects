import {FaQuoteRight} from 'react-icons/fa'

const Person = ({person,position}) => {
    return ( 
        <article style={{transform:`translateX(${position}%)`}} className='text-center'>
            <div className='image'>
                <img src={person.image} alt={person.name} />
            </div>
            <div className='text'>
                <h3>{person.name}</h3>
                <p>{person.title}</p>
                <p className='px-5'>{person.quote}</p>
                <FaQuoteRight fontSize={30} color={'green'}/>
            </div>
        </article>
     );
}
 
export default Person;