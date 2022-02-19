import {useState} from 'react'
import Title from './components/Title'
import Tours from './components/Tours'
import IMG1 from './images/Img1.png'
import IMG2 from './images/Img2.png'
import IMG3 from './images/Img9.png'
import IMG4 from './images/Img4.png'
import IMG5 from './images/Img5.png'

function App() {

  const [tours,setTours]=useState(
    [
      {
        id:1,
        title:"Airpods Wireless Bluetooth Headphones",
        price:"$89.99",
        body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, excepturi minus autem cum accusamus saepe vero, impedit beatae? Ipsum dolor sit amet consequatur repellat cupiditate, incidunt excepturi minus autem cum accusamus saepe vero, impedit beatae?",
        image:IMG1
      },
      {
        id:2,
        title:"iPhone 11 Pro 256GB Memory",
        price:"$589.99",
        body:"Ipsum dolor sit amet consequatur repellat cupiditate, incidunt excepturi minus autem cum accusamus saepe vero, impedit beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, animi voluptate quibusdam officia provident ",
        image:IMG2
      },
      {
        id:3,
        title:"Cannon EOS 80D DSLR Camera",
        price:"$929.99",
        body:"Ipsum dolor sit amet consequatur repellat cupiditate, incidunt excepturi minus autem cum accusamus saepe vero, impedit beatae? Ipsum dolor sit amet consequatur repellat cupiditate, incidunt excepturi minus autem cum accusamus saepe vero, impedit beatae?",
        image:IMG3
      },
      {
        id:4,
        title:"Sony Playstation 4 Pro White Version",
        price:"$399.99",
        body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, animi voluptate quibusdam officia provident possimus molestias ut consequatur Ipsum dolor sit amet consequatur repellat cupiditate, incidunt excepturi minus autem cum accusamus saepe vero, impedit beatae?",
        image:IMG4
      },
      {
        id:5,
        title:"Logitech G-Series Gaming Mouse",
        price:"$89.99",
        body:"Officia provident possimus molestias ut consequatur repellat cupiditate, incidunt excepturi minus autem cum accusamus saepe vero, impedit beatae? Ipsum dolor sit amet consequatur repellat cupiditate, incidunt excepturi minus autem cum accusamus saepe vero, impedit beatae?",
        image:IMG5
      }
    ]
  )

    const handleDelete=(tour)=>{
      const clonedState=[...tours]
      const newState=clonedState.filter(tours=>tours!==tour)
      setTours([...newState])
      console.log(clonedState)
    }

  return (
    <main className='main'>
      <Title/>
      <Tours onDelete={handleDelete} tours={tours}/>
    </main>
  );
}

export default App;
