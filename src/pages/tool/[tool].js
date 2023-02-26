import Head from "next/head";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Cardv2 from "@/components/Cardv2";
import Tool from "@/components/Tool";
import React, { useEffect, useState } from "react";

const AiPage = ({ data }) => {
  // const [data, setData] = useState("");

  // useEffect(() => {
  //   const urlPrams = window.location.pathname.replace("/tool/", "");
  //   let url = `https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/aitoolslist/data?filter[slug]=${urlPrams}`;
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json.data);
  //     });
  // }, []);

  const handleRandom = () => {
    const suffleData = data;
    suffleData.sort(() => Math.random() - 0.5);
    window.open(`/tool/${data[0].slug}`);
  };

  return (
    <>
      <Head>
        <title> AI Tools List — AiToolsList.co</title>
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
      <main className="flex flex-col mx-auto max-w-7xl gap-8 s:p-3 xs:px-4">
        {/* Nav */}
        <nav className="flex row justify-between items-center py-4">
          <a href="/">
            <span className="font-medium smd:text-xl py-2 px-4 text-white bg-black cursor-pointer rounded-full rounded-tl-sm ">
              AiToolsList
            </span>
          </a>
          <span>
            <ul className="flex row gap-4 cursor-pointer">
              <li className="hover:font-semibold text-sm px-3 py-1 border border-black rounded-full">
                <a href="https://tally.so/r/n0d8bZ" target="_blank">
                  submit
                </a>
              </li>
            </ul>
          </span>
        </nav>
        {/* <div className="flex justify-start -mt-4">
          <span>
            <svg className="w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
          </span>
        </div> */}
        {data ? (
          data.map((item) => {
            return (
              <Tool
                key={item.id}
                item={item}
                coverImg={item.coverImg}
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
                upvote={item.upvote}
                id={item.id}
              />
            );
          })
        ) : (
          <div className="text-lg text-center w-full mt-6">Loading...</div>
        )}
      </main>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const urlPrams = context.query["tool"];

  let url = `https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/aitoolslist/data?filter[slug]=${urlPrams}`;

  const res = await fetch(url);
  const resdata = await res.json();
  const data = resdata.data;
  return { props: { data } };
}

export default AiPage;
