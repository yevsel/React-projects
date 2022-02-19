import Home from "./pages/Home";
import Header from "./components/Header";
import {GlobalProvider} from './GlobalAPI/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header/>
        <Home/>
      </div>
    </GlobalProvider>
    
  );
}

export default App;
