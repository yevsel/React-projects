import { useContext,useState } from "react";
import { GlobalContext } from "../GlobalAPI/GlobalContext";
import Category from "./Category";


const SideBar = () => {
    const {data,filter}=useContext(GlobalContext)

    const getCategory=(data)=>{
        let arr=['All']
        data.forEach(item=>{
            if(arr.includes(item.category)===false){
                arr.push(item.category)
            }
        })
        return arr
    }

    const [category,setCategory]=useState(getCategory(data))


    return ( 
        <div >
            <p>Filter</p>
            <div className='sidebar'>
                {category.map((eachCategory,index)=>{
                    return (<Category onFilter={filter} key={index} eachCategory={eachCategory}/>)
                })}
            </div>
        </div>
     );
}
 
export default SideBar;