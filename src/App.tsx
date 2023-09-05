import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import UseTransitionExample from "./components/UseTransitionExample";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App flex flex-col justify-center items-center space-x-4">
      <h1 className="text-pink-300">Use Transition Example</h1>
      <UseTransitionExample />
    </div>
  );
}

export default App;
