import React, { useEffect, useState } from "react";
import Cardv2 from "./Cardv2";

const Cards = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    let url = 'https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/aitoolslist/data';
    fetch(url)
      .then((response) => response.json())
      .then(json => {
        setData(json.data)
      });
  }, []);

  return (
    <div className="flex flex-wrap">
      {data ?
        data.map((item) => {
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
          )
        })
        :
        <div className="text-lg text-center w-full mt-6">Loading...</div>
      }
    </div>
  );
};

export default Cards;
