import React, { useState } from "react";

const Tags = () => {
  const [toogle, setToogle] = useState(false);
  const TagsListOne = ["Chat", "Copywriting", "Design", "Content", "Video", "Audio", "Image", "Writing Assistant", "Code", "Avatar", "Career", "Marketing", "Conversational"] 
  const TagsListTwo = ["Project Management", "News", "Search", "Productivity", "Legal", "Education", "Resume", "Job", "Noise Cancellation", "Model Generation", "FREE", "PAID", "FREEMIUM"]

  const handleToogle = () => {
    setToogle(!toogle)
  }

  return (
    <div className="flex justify-center items-center flex-wrap gap-2 w-full">
      {TagsListOne?.map((item) => {
        return (
          <div key={item}>
            <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
              <a href={`/${item}`}>{item}</a>
            </div>
          </div>
        )
      })
      }
      {toogle ? (
        <>
          {TagsListTwo?.map((item) => {
            return (
              <div key={item}>
                <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
                  {item}
                </div>
              </div>
            )
          })
          }
        </>
      ) : ""}
      {
        <div onClick={handleToogle}>
          <div className="text-black w-max rounded-full border border-black text-xs p-2 px-4 cursor-pointer">
            {toogle ? "SHOW LESS" : "SHOW MORE"}
          </div>
        </div>
      }
    </div>
  );
};

export default Tags;
