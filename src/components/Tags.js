import React, { useState } from "react";

const Tags = () => {
  const [toogle, setToogle] = useState(false);
  // const TagsListOne = ["Chat", "Copywriting", "Design", "Content", "Video", "Audio", "Image", "Writing Assistant", "Code", "Avatar", "Career", "Marketing", "Conversational"]

  const TagsListOne = [
    { name: "chat", url: "chat-ai" },
    { name: "copywriting", url: "copywriting-ai" },
    { name: "Design", url: "design-ai" },
    { name: "content", url: "content-ai" },
    { name: "video", url: "video-ai" },
    { name: "audio", url: "audio-ai" },
    { name: "image", url: "image" },
    { name: "writing assistant", url: "writing-assistant-ai" },
    { name: "code", url: "code-ai" },
    { name: "avatar", url: "avatar-gnration-ai" },
    { name: "career", url: "career-ai" },
    { name: "marketing", url: "marketing-ai" },
    { name: "Conversational", url: "Conversational-ai" },
  ]

  // const TagsListTwo = ["Project Management", "News", "Search", "Productivity", "Legal", "Education", "Resume", "Job", "Noise Cancellation", "Model Generation", "FREE", "PAID", "FREEMIUM"]

  const TagsListTwo = [
    { name: "project management", url: "project-management-ai" },
    { name: "news", url: "news-ai" },
    { name: "search", url: "search-engine-ai" },
    { name: "productivity", url: "productivity-ai" },
    { name: "legal", url: "legal-ai" },
    { name: "education", url: "education-ai" },
    { name: "resume", url: "resume-ai" },
    { name: "job", url: "job-ai" },
    { name: "professional networking", url: "professional-networking-ai" },
    { name: "noise cancellation", url: "noise-cancellation-ai" },
    { name: "ai model generation", url: "ai-model-generation-ai" },
    { name: "FREE", url: "free" },
    { name: "PAID", url: "paid" },
    { name: "FREEMIUM", url: "freeminum" },
  ]
  const handleToogle = () => {
    setToogle(!toogle)
  }

  return (
    <div className="flex justify-center items-center flex-wrap gap-2 w-full">
      {TagsListOne?.map((item) => {
        return (
          <div key={item.name}>
            <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
              <a href={`/${item.url}`}>{item.name}</a>
            </div>
          </div>
        )
      })
      }
      {toogle ? (
        <>
          {TagsListTwo?.map((item) => {
            return (
              <div key={item.name}>
                <div className="bg-black w-max rounded-full text-white text-xs p-2 px-4 cursor-pointer">
                  <a href={`/${item.url}`}>{item.name}</a>
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
