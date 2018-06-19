import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const { createStore } = Redux;
const store = createStore(counter);


const Counter = ({
  value, onIncrement, onDecrement
}) => (
  <div>
  <h1>{value}</h1>
  <button onClick={onIncrement}>+</button>
  <button onClick={onDecrement}>-</button>
  </div>
);


function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter 
  value={store.getState()}
  onIncrement={()=>store.dispatch({
    type: 'INCREMENT'
  })
  }
  onDecrement={() => store.dispatch({
    type: 'DECREMENT'
  })
  }
  />, rootElement);
