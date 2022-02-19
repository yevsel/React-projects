

const Clear = ({onDelete}) => {
    return ( 
        <section className='clear'>
            <button onClick={()=>onDelete()} className='py-3 w-50'>Clear all</button>
        </section>
     );
}
 
export default Clear;