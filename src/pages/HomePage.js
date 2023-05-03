import React from "react";
import DailyTask from "../components/DailyTask";
import Header from "../components/Header";
import Assignment from "../components/Assignment";

function HomePage() {
  return (
    <div className="flex-col w-full">
      <div className="p-3">
        <Header />
      </div>
      <div className="p-3 xl:flex">
        <div className="mr-2 xl:w-1/3 mb-10">
          <DailyTask />
        </div>
        <div className="xl:w-2/3 ">
          <Assignment />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
