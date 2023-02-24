import React from "react";

const Cardv3 = ({
  name,
  coverImg,
  description,
  title,
  price,
  tag1,
  tag2,
  url,
  icon,
}) => {
  return (
    <div className="w-full sdm:w-1/2 l:w-1/3">
      <div className="flex flex-col border m-1 rounded-xl">
        <img className="rounded-t-xl" src={coverImg} />
        <div className="flex flex-col gap-2 p-4 ">
          <div className="text-black font-semibold">{name}</div>
          <div className="text-xs">{title}</div>
          <div className="flex gap-2 flex-wrap text-sm">
            <span className="border rounded-full max-w-max px-2 py-1">
              {tag1}
            </span>
            <span className="border rounded-full max-w-max px-2 py-1">
              {tag2}
            </span>
          </div>
          <div className="text-sm">{description}</div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-xl font-medium">{price}</div>
            <div className="flex gap-2">
              <button className="flex justify-around gap-2 p-1 px-2 items-center rounded-lg border">
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 25 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6417 1.43529C12.0298 0.786244 12.9701 0.786243 13.3583 1.43529L24.1525 19.4868C24.5511 20.1533 24.0709 21 23.2943 21H1.70575C0.929121 21 0.448912 20.1533 0.847488 19.4868L11.6417 1.43529Z"
                    fill="black"
                  />
                </svg>
                <span className="text-xs">5</span>
              </button>

              <button className="flex max-w-fit justify-center items-center border text-black text-xs pr-2 pl-3 rounded-full hover:bg-black hover:text-white">
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
    </div>
  );
};

export default Cardv3;
