import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";

const LoginUser = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { loading, user, error } = useSelector((state)=>state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials = { email, password };
        dispatch(loginUser(credentials));
    }


  return (
    <>
      <div>
        <form className="flex flex-col items-center gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            className="border-1 p-2 "
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            className="border-1 p-2 "
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button type="submit" className="border-1 px-6 py-3 cursor-pointer">Submit</button>
        </form>
      </div>
    </>
  );
};

export default LoginUser;
