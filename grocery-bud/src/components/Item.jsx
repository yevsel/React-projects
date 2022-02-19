import {FaEdit,FaTrashAlt} from 'react-icons/fa'

const Item = ({item,onDelete,onEdit,index}) => {
    return ( 
        <div className='item mx-3 px-2 mb-2'>
            <div className='item-name'>
                <p>{item.name}</p>
            </div>
            <div className='cta'>
                <FaEdit onClick={()=>{
                    onEdit(item,index)
                }} className='edit'/>
                <FaTrashAlt onClick={()=>{
                    onDelete(item)
                }} className='trash'/>
            </div>
        </div>
     );
}
 
export default Item;