import React, { useState } from "react";

const Tags = () => {
  const [toogle, setToogle] = useState(false);

  const handleToogle = () => {
    setToogle(!toogle)
  }
  return (
    <div className="flex justify-center items-center flex-wrap gap-2 w-full">
      <div>
        <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
          Chat
        </div>
      </div>
      <div>
        <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
          Copywriting
        </div>
      </div>
      <div>
        <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
          Design
        </div>
      </div>
      <div>
        <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
          Content AI
        </div>
      </div>
      <div>
        <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
          Video AI
        </div>
      </div>
      <div>
        <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
          Audio Generation
        </div>
      </div>
      <div>
        <div className="bg-black  w-max rounded-full text-white text-xs p-2 cursor-pointer">
          Image Creation
        </div>
      </div>
      <div>
        <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
          Writing Assistant
        </div>
      </div>
      <div>
        <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
          Code Assistant
        </div>
      </div>
      <div>
        <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
          Avatar Generation
        </div>
      </div>
      <div>
        <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
          career
        </div>
      </div>

      <div>
        <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
          Marketing
        </div>
      </div>
      {toogle ? (<>
        <div>
          <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
            Project Management
          </div>
        </div>
        <div>
          <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
            News
          </div>
        </div>
        <div>
          <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
            Search Engine
          </div>
        </div>
        <div>
          <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
            Productivity
          </div>
        </div>
        <div>
          <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
            Legal
          </div>
        </div>
        <div>
          <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
            Education
          </div>
        </div>
        <div>
          <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
            Resume
          </div>
        </div>
        <div>
          <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
            Noise Cancellation
          </div>
        </div>
        <div>
          <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
            Model Generation
          </div>
        </div>
        <div>
          <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
            FREE
          </div>
        </div>
        <div>
          <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
            PAID
          </div>
        </div>
        <div>
          <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
            FREEMIUM
          </div>
        </div>
      </>) : ""}
      {<div onClick={handleToogle}>
        <div className="text-black w-max rounded-full border border-black text-xs p-2 px-4 cursor-pointer">
          {toogle ? "SHOW LESS" : "SHOW MORE"}
        </div>
      </div>}
    </div>
  );
};

export default Tags;
