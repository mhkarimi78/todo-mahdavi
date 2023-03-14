import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import BasicButtons from "../components/BasicButtons";
import BasicTextFields from "../components/BasicTextFields";
import { setUser } from "../store/userInfo";

function LoginPage() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-10">ToDo List</h1>
      <div className="border-2 border-blue-500 p-12 rounded-3xl">
        <BasicTextFields label="name" value={name} setValue={setName} />
        <BasicTextFields label="familyName" />
        <BasicTextFields label="age" />
        <BasicButtons
          label="Login"
          onClick={() => {
            dispatch(
              setUser({
                name: name,
                familyName: "",
                age: null,
              })
            );
          }}
        />
        <p className="mt-6 text-center w-full">
          don't have an account?{" "}
          <NavLink to="/signup" className="underline">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
