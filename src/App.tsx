import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleButton = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>hello world</div>
      <div>{count}</div>
      <button onClick={handleButton}>+1</button>
    </div>
  );
}

export default App;
