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
    window.open(`/tool/${data[0].slug}`)
  }

  

  return (
    <>
      <Head>
        <title>AEM start</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
                <a href="https://tally.so/r/n0d8bZ" target="_blank">submit</a>
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
