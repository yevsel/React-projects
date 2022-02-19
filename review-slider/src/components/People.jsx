import Person from "./Person";

const People = ({people,position}) => {
    return ( 
        <div className='carousel-inside'>
            {people.map(person=><Person position={position} key={person.id} person={person}/>)}
        </div>
     );
}
 
export default People;