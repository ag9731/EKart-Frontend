import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RegisterUser from "./components/RegisterUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <RegisterUser/>
      </div>
    </>
  );
}

export default App;
