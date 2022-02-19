import Item from "./item";

const List = ({people}) => {
    return ( 
        <section className='container py-3 mx-4 my-3'>
            {people.map(person=><Item key={person.id} person={person}/>)}
        </section>
     );
}
 
export default List;