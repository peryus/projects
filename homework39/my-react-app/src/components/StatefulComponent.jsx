import { useState } from "react";

function StatefulComponent({ title, startCount }) {
  const [count, setCount] = useState(startCount);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
      <div>
        <h2>{title}</h2>

        <p>Current value: {count}</p>

        <button onClick={increaseCount}>
          Increase
        </button>
      </div>
  );
}

export default StatefulComponent;