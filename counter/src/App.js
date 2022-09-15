import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const onClickMinus = () => {
    setCount(count - 1);
  };

  const onClickPlus = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1 className="title">
        Counter : <span>{count}</span>
      </h1>
      <div className="buttons">
        <button onClick={onClickMinus} className="btn">
          - Minus
        </button>
        <button
          onClick={onClickPlus}
          style={{ backgroundColor: "green" }}
          className="btn"
        >
          + Plus&nbsp;
        </button>
      </div>
    </div>
  );
}

export default App;
