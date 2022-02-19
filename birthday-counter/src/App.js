import {useState} from 'react'
import Clear from './components/clearButton';
import Header from './components/header';
import List from './components/listsComponent';
import IMG1 from "./images/Img6.png"
import IMG2 from "./images/Img7.png"
import IMG3 from "./images/Img8.png"
import IMG4 from "./images/Img9.png"
import IMG5 from "./images/Img10.png"

function App() {
  const [people,setPeople]=useState(
    [
      {
        id:1,
        name:"Bertie Yates",
        age:29,
        image:IMG1
      },
      {
        id:2,
        name:"Hester Hogan",
        age:32,
        image:IMG2
      },
      {
        id:3,
        name:"Larry Little",
        age:36,
        image:IMG3
      },
      {
        id:4,
        name:"Sean Easd",
        age:34,
        image:IMG4
      },
      {
        id:5,
        name:"Lola Gardner",
        age:29,
        image:IMG5
      }
    ]
  );

  const handleClearAll=()=>{
    setPeople([])
  }

  return (
    <main className='main'>
      {/* <img src={IMG1} height={100} width={100} alt={people[0].name}/> */}
      <Header totalPeople={people.length}/>
      {people.length>0?<List people={people}/>:"No one here"}
      <Clear onDelete={handleClearAll}/>
      
    </main>
  );
}

export default App;
