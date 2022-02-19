
import SingleColor from "./singleColor";

const Platform = ({list}) => {

    return ( 
        <section className='color-box mb-5 shadow'>
            {list.map((color,index)=>{
                return(
                    <SingleColor length={list.length} index={index} key={index} color={color}/>
                )
            })}
        </section>
     );
}
 
export default Platform;