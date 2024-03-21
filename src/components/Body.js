import React from "react";
import Sidebar from "./Sidebar";
// import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
// import wave from '../Assets/wave-haikei.png'

const Body = () => {
  return (
    // className='flex w-screen h-screen object-fill  bg-repeat-y' style={{ backgroundImage:`url(${wave})`}}
    <div className="mt-20 ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
