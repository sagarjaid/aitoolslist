import React, { useEffect, useState } from "react";
import Cardv2 from "./Cardv2";

const Tool = ({
  name,
  description,
  title,
  price,
  tag1,
  tag2,
  tag3,
  tag4,
  url,
  coverImg,
  website,
  upvote,
  id,
  item,
}) => {
  const [upVoteCount, setUpVoteCount] = useState(upvote);
  const [isDisable, setISDisable] = useState(false);
  const [relatedData, setRelatedData] = useState("");

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

  useEffect(() => {
    let url = `https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/aitoolslist/data?filter[tag1]=${tag1}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const data = json.data.filter((obj) => obj.id !== id);
        setRelatedData(data);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row m-1 rounded-xl">
        <img
          className="rounded-sm w-full lg:w-3/5 border"
          src={checkURL(coverImg) ? coverImg : `${website}${coverImg}`}
        />
        <div className="flex flex-col gap-4 py-4 lg:p-4 lg:pt-0">
          <div className="flex flex-col gap-1">
            <div className="text-black font-semibold text-lg">{name}</div>
            <div className="">{title}</div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {" "}
            <span>Tags:</span>
            {tag1 && (
              <span className="border rounded-full max-w-max px-2 py-1">
                <a href={`/${tag1}`} target="_blank">
                  {tag1}
                </a>
              </span>
            )}
            {tag2 && (
              <span className="border rounded-full max-w-max px-2 py-1">
                <a href={`/${tag2}`} target="_blank">
                  {tag2}
                </a>
              </span>
            )}
            {tag3 && (
              <span className="border rounded-full max-w-max px-2 py-1">
                <a href={`/${tag3}`} target="_blank">
                  {tag3}
                </a>
              </span>
            )}
            {tag4 && (
              <span className="border rounded-full max-w-max px-2 py-1">
                <a href={`/${tag4}`} target="_blank">
                  {tag4}
                </a>
              </span>
            )}
          </div>
          <div className="font-medium">Price: {price}</div>
          <div className="flex justify-between gap-2">
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
              className="flex max-w-fit justify-center items-center border text-white bg-black text-xs pr-2 pl-3 rounded-full hover:bg-white hover:text-black"
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
          <div className="h-[1px] bg-black"></div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold">About {name}</div>
            <div>{description}</div>
          </div>
          <div className="text-sm underline cursor-pointer">
            <a href="/">Submit your tool!</a>
          </div>
          <div className="text-xs">
            * means they have a free plan but its limited
          </div>
        </div>
      </div>

      <div className="text-xl">{name} Alternative or Similar AI Tools</div>
      {!relatedData[0] && (
        <div className="text-lg flex flex-col items-center gap-3 mt-6">
          <svg
            className="w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
            />
          </svg>
          <div>No Similar AI Tool Found!</div>
        </div>
      )}
      <div className="flex flex-wrap">
        {relatedData ? (
          relatedData.map((item) => {
            return (
              <Cardv2
                key={item.id}
                item={item}
                name={item.name}
                website={item.website}
                title={item.title}
                description={item.description}
                price={item.price}
                tag1={item.tag1}
                tag2={item?.tag2}
                tag3={item?.tag3}
                tag4={item?.tag4}
                url={item.url}
                icon={item.icon}
                slug={item.slug}
                upvote={item.upvote}
                id={item.id}
              />
            );
          })
        ) : (
          <div className="text-lg text-center w-full mt-6">Loading...</div>
        )}
      </div>
    </>
  );
};

// export async function getServerSideProps(tag1, id) {
//   console.log(tag1, "tag1");
//   console.log(id, "id");

//   let url = `https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/aitoolslist/data?filter[slug]=${tag1}`;

//   const res = await fetch(url);
//   const resdata = await res.json();
//   console.log(resdata);
//   const relatedData = resdata.data.filter((obj) => obj.id !== id);
//   return { props: { relatedData } };
// }

export default Tool;
