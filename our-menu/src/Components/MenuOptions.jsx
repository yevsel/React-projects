import Button from "./Button";

const MenuOptions = ({data,filter,categoryList}) => {
    return ( 
        <section className='my-5 menu'>
            <button onClick={()=>filter("All")} className='mx-5 p-2'>All</button>
            {categoryList.map(category=><Button filter={filter} category={category}/>)}
        </section>
     );
}
 
export default MenuOptions;