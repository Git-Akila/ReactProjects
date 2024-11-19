import "./App.css";
import Header from "./Components/Header";
import { GlobalProvider } from "./Context/GlobalState";
import Balance from '../src/Components/Balance'
import IncomeExpense from '../src/Components/IncomeExpense'
import TransactionList from '../src/Components/TransactionList'
import AddTransaction from '../src/Components/AddTransaction'

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
