import Header from "./Components/Header";
import MenuOptions from "./Components/MenuOptions";
import Platform from "./Components/Platform";
import Data from "./Data/data";
import {useState} from 'react'

function getListOfCategories(){
  let categoryList=[];
  Data.forEach(item=>{
    // REMOVING OF DUPLICATES FROM THE LIST
    if (categoryList.includes(item.category)===false){
      categoryList.push(item.category)
    }
  })
  return categoryList
}


function App() {
  const [data,setData]=useState(Data)
  const [listOfCategories,setList]=useState(getListOfCategories())

  const filterItems=(item)=>{
    if (item==='All'){
      setData([...Data])
    }else{
      const clonedData=[...Data]
      const newData=clonedData.filter(data=>data.category===`${item}`)
      setData([...newData])
    }
  }

  return (
    <main className="main container">
        <Header/>
        <MenuOptions filter={filterItems} data={data} categoryList={listOfCategories}/>
        <Platform data={data}/>
        
    </main>
  );
}

export default App;
