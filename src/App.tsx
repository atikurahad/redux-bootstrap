import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, reset,} from "./redux/features/counter/counterSlice";
import { RootState } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  const {count} = useSelector((state:RootState)=>state.counter);

  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrement = (amount:number) => {
    dispatch(increment(amount));
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <>
      <h1>Counter with redux</h1>
      <div className="count">{count}</div>

      <div className="middle">
        <button onClick={handleDecrement} className="btn">Decrement</button>
        <button onClick={()=>handleIncrement(5)} className="btn">Increment 5</button>
        <button onClick={handleReset} className="btn">Reset</button>

        <button onClick={()=>handleIncrement(1)} className="btn">Increment</button>
      </div>
    </>
  );
}

export default App;
