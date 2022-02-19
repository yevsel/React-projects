import People from "./components/People";
import Title from "./components/Title";
import Data from './data/data'
import {FiArrowLeft,FiArrowRight} from 'react-icons/fi'
import {useState} from 'react'

function App() {

  const [people,setPeople]=useState(Data)
  const [position,setPosition]=useState(0)

  const handleNext=()=>{
    if(position===((people.length-1)*-100)){
      setPosition((people.length-1)*-100)
    }
    else{
      setPosition(pos=>pos-100)
    }
  }
  const handlePrev=()=>{
    if(position===0){
      setPosition(0)
    }
    else{
      setPosition(pos=>pos+100)
    }
  }

  return (
    <section>
      <Title/>
      <div className='carousel'>
          <button onClick={()=>handleNext()} className='next'><FiArrowLeft/></button>
          <People position={position} people={people}/>
          <button onClick={()=>handlePrev()} className='prev'><FiArrowRight/></button>
      </div>
    </section>
  );
}

export default App;
