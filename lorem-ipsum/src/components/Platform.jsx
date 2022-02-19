


const Platform = ({paragraph}) => {
    return ( 
        <div className='container my-5 text-center'>
            {paragraph.map(((text,index)=>{
                return (
                    <p key={index}>{text}</p>
                )
            }))}
        </div>
     );
}
 
export default Platform;