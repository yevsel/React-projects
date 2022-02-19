
import Header from "./Components/Header";
import {GlobalProvider} from './GlobalContext/GlobalContext'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from "./Pages/Home";
import About from "./Pages/About";
import SingleCocktail from "./Pages/SingleCocktail";
import ErrorPage from "./Pages/Error";

function App() {
  return (
    <Router>
      <GlobalProvider>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/cocktail/:id'>
            <SingleCocktail/>
          </Route>
          <Route path='*'>
            <ErrorPage/>
          </Route>
        </Switch>
      </div>
      </GlobalProvider>
    </Router>
    
    
  );
}

export default App;
