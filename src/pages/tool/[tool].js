import Head from "next/head";
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Cardv2 from '@/components/Cardv2';
import Tool from '@/components/Tool';
import React, { useEffect, useState } from "react";

const AiPage = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const urlPrams = window.location.pathname.replace("/tool/", "")
    let url = `https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/aitoolslist/data?filter[slug]=${urlPrams}`;
    fetch(url)
      .then((response) => response.json())
      .then(json => {
        setData(json.data)
      });
  }, []);


  return (
    <>
      <Head>
        <title>AEM start</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col mx-auto max-w-7xl gap-8 s:p-3 xs:px-4">
        <Nav />

        {data ?
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
          )
        })
        :
        <div className="text-lg text-center w-full mt-6">Loading...</div>
      }
      </main>
      <Footer />
    </>
  )
}

export default AiPage