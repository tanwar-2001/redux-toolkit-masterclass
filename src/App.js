import { useSelector } from "react-redux";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import Reward from "./components/Reward";

function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  return (
    <div className="">
      <h1>Redux Toolkit App</h1>
      <h3>Current Account : {amount}</h3>
      <h3>Total Bonus : {points}</h3>
      <Account />
      <Bonus />
      <Reward />
    </div>
  );
}

export default App;
