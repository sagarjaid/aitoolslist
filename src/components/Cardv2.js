import React, { useState, useEffect } from "react";

const Cardv2 = ({
  name,
  description,
  title,
  price,
  tag1,
  tag2,
  tag3,
  tag4,
  url,
  icon,
  slug,
  website,
  upvote,
  id,
  item,
}) => {
  const [upVoteCount, setUpVoteCount] = useState(upvote);
  const [isDisable, setISDisable] = useState(false);

  const checkURL = (link) => {
    if (link.startsWith("http://") || link.startsWith("https://")) {
      return true;
    } else {
      return false;
    }
  };

  const handleOpenTool = () => {
    window.open(`${url}?ref=aitoolslist.co`);
  };

  const handleUpvote = () => {
    setISDisable(true);
    setUpVoteCount((preState) => preState + 1);
    let url = `https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/aitoolslist/data/${id}`;
    let body = {
      datum: { ...item, upvote: upVoteCount + 1 },
    };
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  };

  const TagsList = [
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
    { name: "chat", url: "chat-ai" },
    { name: "copywriting", url: "copywriting-ai" },
    { name: "design", url: "design-ai" },
    { name: "content", url: "content-ai" },
    { name: "creative", url: "creative-ai" },
    { name: "video", url: "video-ai" },
    { name: "audio", url: "audio-ai" },
    { name: "image", url: "image" },
    { name: "writing assistant", url: "writing-assistant-ai" },
    { name: "code", url: "code-ai" },
    { name: "avatar", url: "avatar-gnration-ai" },
    { name: "career", url: "career-ai" },
    { name: "marketing", url: "marketing-ai" },
    { name: "conversational", url: "conversational-ai" },
    { name: "project management", url: "project-management-ai" },
    { name: "news", url: "news-ai" },
    { name: "resume", url: "resume-ai" },
    { name: "job", url: "job-ai" },
];

    const query1 = TagsList.filter((el) => el.name?.toLowerCase() == tag1?.toLowerCase())
    const query2 = TagsList.filter((el) => el.name?.toLowerCase() == tag2?.toLowerCase())
    const query3 = TagsList.filter((el) => el.name?.toLowerCase() == tag3?.toLowerCase())
    const query4 = TagsList.filter((el) => el.name?.toLowerCase() == tag4?.toLowerCase())

    const tag1URL = query1[0]?.url
    const tag2URL = query2[0]?.url
    const tag3URL = query3[0]?.url
    const tag4URL = query4[0]?.url

  return (
    <div className="w-full sdm:w-1/2 l:w-1/3">
      <div className="flex flex-col gap-2 p-4 rounded-xl border border-gray-300 m-1 hover:shadow-md hover:border-black">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <a
              className="cursor-pointer"
              href={`/tool/${slug}`}
              target="_blank"
            >
              <div className="flex justify-start items-center gap-1 text-black font-semibold">
                <div>{name}</div>
                <svg
                  className="w-3"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  ></path>
                </svg>
              </div>
            </a>
            <div className="text-xs">{title}</div>
          </div>
          <img
            className="rounded-md ml-2 w-14 border"
            src={checkURL(icon) ? icon : `${website}${icon}`}
          />
        </div>
        <div className="flex gap-2 text-sm flex-wrap">
          {tag1 && (
            <span className="border rounded-full max-w-max px-2 py-1">
              <a href={`/${tag1URL || tag1 }`} target="_blank">
                {tag1}
              </a>
            </span>
          )}
          {tag2 && (
            <span className="border rounded-full max-w-max px-2 py-1">
              <a href={`/${tag2URL || tag2 }`} target="_blank">
                {tag2}
              </a>
            </span>
          )}
          {tag3 && (
            <span className="border rounded-full max-w-max px-2 py-1">
              <a href={`/${tag3URL || tag3 }`} target="_blank">
                {tag3}
              </a>
            </span>
          )}
          {tag4 && (
            <span className="border rounded-full max-w-max px-2 py-1">
              <a href={`/${tag4URL || tag4}`} target="_blank">
                {tag4}
              </a>
            </span>
          )}
        </div>
        <a className="cursor-pointer" href={`/tool/${slug}`} target="_blank">
          <div className="text-sm">{description}</div>
        </a>
        <div className="flex justify-between items-center mt-4">
          <div className="text-xl font-medium">{price}</div>
          <div className="flex gap-2">
            <button
              disabled={isDisable}
              onClick={handleUpvote}
              className="flex justify-around gap-2 p-1 px-2 items-center rounded-lg border cursor-pointer disabled:cursor-not-allowed disabled:text-green-700 disabled:border-green-600"
            >
              {isDisable ? (
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 25 21"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6417 1.43529C12.0298 0.786244 12.9701 0.786243 13.3583 1.43529L24.1525 19.4868C24.5511 20.1533 24.0709 21 23.2943 21H1.70575C0.929121 21 0.448912 20.1533 0.847488 19.4868L11.6417 1.43529Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 25 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6417 1.43529C12.0298 0.786244 12.9701 0.786243 13.3583 1.43529L24.1525 19.4868C24.5511 20.1533 24.0709 21 23.2943 21H1.70575C0.929121 21 0.448912 20.1533 0.847488 19.4868L11.6417 1.43529Z"
                    fill="currentColor"
                  />
                </svg>
              )}
              <span className="text-xs">{upVoteCount}</span>
            </button>
            <button
              onClick={handleOpenTool}
              className="flex max-w-fit justify-center items-center border text-black text-xs pr-2 pl-3 rounded-full hover:bg-black hover:text-white"
            >
              <span>Open Tool</span>
              <svg
                className="w-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardv2;
