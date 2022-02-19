import AddTransaction from "./Components/AddTransaction";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import IncomeAndExpense from "./Components/IncomeAndExpense";
import TransactionList from "./Components/TransactionList";
import {GlobalStateProvider} from './Context/GlobalState'

function App() {
  return (
    <GlobalStateProvider>
      <div className="App shadow">
        <Header/>
        <section className='container mt-3'>
          <Balance />
          <hr></hr>
          <IncomeAndExpense/>
          <hr></hr>
          <TransactionList/>
          <hr></hr>
          <AddTransaction/>
        </section>
      </div>
    </GlobalStateProvider>
  );
}

export default App;
