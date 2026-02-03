import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/authSlice";

const RegisterUser = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const { loading,error } = useSelector((state)=>state.auth);
    const dispatch = useDispatch();


    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registerUser({email,password}));
    }


  return (
    <div>
      <h1 className="text-3xl uppercase font-semibold">Register User</h1>
      <form
        onSubmit={handleRegister}
        className="flex flex-col items-center gap-5"
      >
        <input
          type="text"
          className="border-1 px-8 py-3"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="border-1 px-8 py-3"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Error message */}
        {error && (
          <div className="text-sm text-red-600 bg-red-50 border border-red-200 p-3 rounded-lg">
            Error: {error.message || error}
          </div>
        )}

        <button type="submit" className="bg-amber-300 px-8 py-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterUser;
