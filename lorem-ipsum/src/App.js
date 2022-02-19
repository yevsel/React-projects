import {useState} from 'react'
import InputData from './components/InputData'
import Title from './components/Title'
import Data from './data/text'


function App() {

  const [data,setData]=useState(Data)

  return (
    <section className='main'>
      <Title/>
      <div className='input-data'>
        <InputData data={data}/>
      </div>
    </section>
  );
}

export default App;
