import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SettingsIcon from "@mui/icons-material/Settings";

function Header() {
  // hook usestate useeffect
  const [first, setfirst] = useState(0);
  const userInfo = useSelector((state) => state.userInfo.user);
  var a = 4;
  //   function add1() {
  //     setfirst(first++);
  //   }
  // inline function
  const add = () => {
    setfirst(first + 2);
  };
  // hook
  useEffect(() => {
    console.log("hi", userInfo);
  }, []);

  return (
    <div className="flex bg-yellow-200 justify-between">
      {/* left  */}
      <div className="flex">
        <AccessAlarmsIcon
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
          }}
        />
        <NewspaperIcon
          style={{
            width: 40,
            height: 40,
          }}
        />
      </div>
      {/* center  */}
      <h1 className=" font-monos text-xl md:text-3xl lg:text-5xl">
        YOUR TODO LIST
      </h1>
      {/* right */}
      <div>
        <SettingsIcon
          style={{
            width: 40,
            height: 40,
          }}
        />
      </div>
    </div>
  );
}

export default Header;

