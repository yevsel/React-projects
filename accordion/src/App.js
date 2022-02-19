import Output from './Components/OutputList'
import questions from './data/data'
import Intro from './Components/Intro'
import {useState} from 'react'
// import Platform from './Components/Platform'


function App() {
  const [data,setData]=useState(questions)

  const handleDrop=(Data)=>{
    // console.log(Data.id)
    const clonedData=[...data]
    const index=clonedData.indexOf(Data)
    let oldAllow=clonedData[index].allow
    const newData=clonedData.map(data=>{
      data.allow=false
      return data
    })
    newData[index].allow=!oldAllow
    setData([...newData])
  }

  return (
    <main className='main'>
      <div className='intro-div'>
        <Intro/>
      </div>
      <div className='data'>
        {/* <Platform data={data}/> */}
        {/* {data.map(data=><Platform key={data.id} data={data}/>)} */}
        {data.map(data=><Output key={data.id} data={data} handleDrop={handleDrop}/>)}
      </div>
    </main>
  );
}

export default App;
