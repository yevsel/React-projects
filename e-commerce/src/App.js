import CartContainer from "./Components/CartContainer";
import Header from "./Components/Header";
import {GlobalProvider} from './GlobalContext/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header/>
        <h3 className='text-center mt-5'>YOUR BAG</h3>
        <CartContainer/>
      </div>
    </GlobalProvider>
    
  );
}

export default App;
