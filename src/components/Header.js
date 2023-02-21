import React, { useState } from "react";

function Header() {
  // hook usestate useeffect
  const [first, setfirst] = useState(0);
  var a = 4;
  //   function add1() {
  //     setfirst(first++);
  //   }
  // inline function
  const add = () => {
    setfirst(first + 2);
  };
  return (
    <div
      className="
     justify-start
      bg-fuchsia-800
     "
    >
      <p className="">hi</p>
      <p>{first}</p>
      <button onClick={add}>click</button>
    </div>
  );
}

export default Header;
