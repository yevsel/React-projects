import Food from "./Food";

const Platform = ({data}) => {
    return ( 
        <div className='platform'>
            {data.map(data=><Food key={data.id} data={data}/>)}
        </div>
     );
}
 
export default Platform;