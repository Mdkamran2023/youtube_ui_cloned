import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Gaming",
    "Songs",
    "Movies",
    "Java",
    "SQL",
    "Soccer",
    "Cricket",
    "News",
    "Cooking",
    "Honey",
    "Comedy",
    "Job",
    "Shark Tank",
  ];
  return (
    <div className="sticky top-[76px] p-1 m-0">
    <div className=' flex overflow-x-auto flex-nowrap no-scrollbar bg-white'>
    
      {buttonList.map((button) => (
        <Button name={button} />
      ))}
    
    </div>
    </div>
  );
};

export default ButtonList;
