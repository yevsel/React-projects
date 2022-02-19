

const Food = ({data}) => {
    return ( 
        <article className='food my-4 mx-2'>
            <img src={data.image} width={'200'} alt="" />
            <div className='discription mx-2'>
                <div className='intro-header'>
                    <h5>{data.title}</h5>
                    <h5 className='price'>{"$"+data.price}</h5>
                </div>
                <p>{data.body}</p>
                <p className='category'>{data.category}</p>
            </div>
        </article>
     );
}
 
export default Food;