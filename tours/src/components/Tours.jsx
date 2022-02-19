import Tour from "./Tour";

const Tours = ({tours,onDelete}) => {
    return ( 
        <section>
            {tours.map(tour=><Tour key={tour.id} onDelete={onDelete} tour={tour}/>)}
        </section>
     );
}
 
export default Tours;