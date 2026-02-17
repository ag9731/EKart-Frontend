import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/authSlice";

const RegisterUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [role, setrole] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setaddress] = useState("");
  const [profilePic, setprofilePic] = useState([]);

  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleRegister = (e) => {    
    e.preventDefault();

    const formData = new FormData();

      formData.append("email",email);
      formData.append("password", password);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("role", role);
      formData.append("phone", phone);
      formData.append("address", address);

      profilePic.forEach((file)=>{
         formData.append("profilePic",file);
      })

    dispatch(registerUser(formData));
  };

  return (
    <div>
      <h1 className="text-3xl uppercase font-semibold">Register User</h1>
      <form
        onSubmit={handleRegister}
        encType="multipart/form-data"
        className="flex flex-col items-center gap-5"
      >
        {/* First Name*/}
        <input
          type="text"
          placeholder="Enter First Name"
          className="border-1 px-8 py-3"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />

        {/* Last Name */}
        <input
          type="text"
          placeholder="Enter Last Name"
          className="border-1 px-8 py-3"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />

        {/* Phone*/}
        <input
          type="text"
          placeholder="Enter Phone"
          className="border-1 px-8 py-3"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* Profile Image */}
        <input
          type="file"
          multiple
          className="border-1"
          onChange={(e) => {
            const files = Array.from(e.target.files);
            setprofilePic(files);
          }}
        />

        {/* Last Role */}
        <input
          type="text"
          placeholder="Enter Role"
          className="border-1 px-8 py-3"
          value={role}
          onChange={(e) => setrole(e.target.value)}
        />

        {/* Address */}
        <input
          type="text"
          placeholder="Enter Address"
          className="border-1 px-8 py-3"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
        />

        {/* email */}
        <input
          type="text"
          className="border-1 px-8 py-3"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* password */}
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
