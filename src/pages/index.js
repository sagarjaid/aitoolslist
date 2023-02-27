import Tags from "@/components/Tags";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Cardv2 from "@/components/Cardv2";

export default function Home({ data }) {
  const [searchData, setSearchData] = useState("");

  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
    const filterData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.tags.toLowerCase().includes(value.toLowerCase())
    );
    setSearchData(filterData);
  };

  const handleRandom = () => {
    const suffleData = data;
    suffleData.sort(() => Math.random() - 0.5);
    window.open(`/tool/${data[0].slug}`);
  };

  return (
    <>
      <Head>
        <title>AI Tools List — AiToolsList.co</title>
        <meta name="title" content="AI Tools List — AiToolsList.co" />
        <meta
          name="description"
          content="1000+ AI Tools for Every Use Case in Life. A Comprehensive List of AI Tools"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aitoolslist.co/" />
        <meta property="og:title" content="AI Tools List — AiToolsList.co" />
        <meta
          property="og:description"
          content="1000+ AI Tools for Every Use Case in Life. A Comprehensive List of AI Tools"
        />
        <meta property="og:image" content="/aitoolslist-cover.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aitoolslist.co/" />
        <meta
          property="twitter:title"
          content="AI Tools List — AiToolsList.co"
        />
        <meta
          property="twitter:description"
          content="1000+ AI Tools for Every Use Case in Life. A Comprehensive List of AI Tools"
        />
        <meta property="twitter:image" content="/aitoolslist-cover.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex flex-col mx-auto max-w-7xl gap-12 s:p-3 xs:px-4">
        {/* Nav */}
        <nav className="flex row justify-between items-center py-4">
          <a href="/">
            <span className="font-medium smd:text-xl py-2 px-4 text-white bg-black cursor-pointer rounded-full rounded-tl-sm ">
              AiToolsList
            </span>
          </a>
          <span>
            <ul className="flex row gap-4 cursor-pointer">
              <li onClick={handleRandom} className="hover:font-semibold">
                {/* <a href="/tool/t"> */}
                <svg
                  className="w-6 text-blue-500"
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
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
                {/* </a> */}
              </li>
              <li className="hover:font-semibold text-sm px-3 py-1 border border-black rounded-full">
                <a href="https://tally.so/r/n0d8bZ" target="_blank">
                  submit
                </a>
              </li>
            </ul>
          </span>
        </nav>
        {/* Input */}
        <div className="flex flex-col justify-center gap-4 items-center">
          <div className="flex flex-col text-center justify-center gap-1 items-center">
            <div className="text-2xl font-semibold">
              1000+ AI Tools for Every Use Case in Life
            </div>
            <div className="text-sm">A Comprehensive List of AI Tools</div>
          </div>
          <form class="text-gray-600 w-full sm:w-3/4 rounded-full border-2 sm:border-2 border-black flex justify-around items-center px-2">
            <input
              type="text"
              name="url"
              title="Please enter correct tiktok url"
              placeholder="type AI tool name..."
              className="w-full h-12 px-2 m:h-14 rounded-l-full text-sm font-light focus:outline-none text-black placeholder:text-slate-600 placeholder:font-light"
              value={value}
              onChange={handleInput}
              autoComplete="off"
            />
            <span class="flex items-center">
              <button
                disabled={true}
                type="submit"
                className="cursor-pointer px-4 bg-black w-min flex justify-center h-8 m:h-10 items-center rounded-full text-white"
              >
                <span class="mr-1">Search</span>
              </button>
            </span>
          </form>
        </div>
        <Tags />
        <div className="flex flex-wrap">
          {searchData && value
            ? searchData?.map((item) => {
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
            : value && (
                <div className="text-lg text-center w-full mt-6">
                  searching...
                </div>
              )}

          {!searchData[0] && value && (
            <div className="flex justify-center w-full">
              <div className="text-lg flex flex-col text-center justify-center items-center gap-3 mt-6">
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
                <div>No Tool Found!</div>
              </div>
            </div>
          )}

          {data && !value
            ? data?.map((item) => {
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
            : !value && (
                <div className="text-lg text-center w-full mt-6">
                  Loading...
                </div>
              )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  let url =
    "https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/aitoolslist/data";
  const res = await fetch(url);
  const resdata = await res.json();
  const data = resdata.data;
  return { props: { data }, revalidate: 86400 };
}
