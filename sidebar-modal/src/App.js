import Home from "./components/Home";
import ModalFile from "./components/ModalFile";
import Sidebar from "./components/Sidebar";
import {GlobalProvider} from './Context/GlobalContext'

function App() {
  return(
    <GlobalProvider>
      <>
        <Home/>
        <Sidebar/>
        <ModalFile/>
      </>
    </GlobalProvider>
  );
}

export default App;
