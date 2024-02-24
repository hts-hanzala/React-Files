import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incNum, decNum } from "./Action/index";

function App() {
  const selector = useSelector((state) => state.incDec);
  const dispatch = useDispatch();

  return (
    <div className="App mx-5">
      <h1>Redux App</h1>
      <h2>Counter in Redux</h2>
      <div className="mx-5">
        <div className="quantity">
          <button
            className="quantity_minus mx-2 btn btn-primary"
            title="Decrement"
            onClick={() => dispatch(decNum())}
          >
            <span>-</span>
          </button>
          <input type="text" value={selector} readOnly />
          <button
            className="quantity_plus mx-2 btn btn-primary"
            title="Increment"
            onClick={() => dispatch(incNum())}
          >
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
