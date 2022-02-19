

const Category = ({eachCategory,onFilter}) => {
    return ( 
        <button onClick={()=>{
            onFilter(eachCategory)
        }} className=''>
            {eachCategory}
        </button>
     );
}
 
export default Category;