import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RegisterUser from "./components/RegisterUser";
import LoginUser from "./components/LoginUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <RegisterUser/> */}
        <LoginUser/>
      </div>
    </>
  );
}

export default App;
