import React from "react";
import Card from "./Card";
import Cardv2 from "./Cardv2";

const Cards = () => {
  return (
    <div className="flex mt-6 flex-wrap">
      <Cardv2
        name="Careerdekho Ai"
        coverImg="https://openai.com/content/images/2022/05/twitter-1.png"
        title="CAREERDEKHO Ai — AI Career Discovery Tool"
        description="Find the perfect career for you with the help of AI. Let our AI-powered 
        career discovery tool help you find the perfect career fit!"
        price="FREE"
        tag_1="Job"
        tag_2="Career"
        url="https://careerdekho.ai/"
        icon="https://careerdekho.ai/favicon.svg"
      />
      <Cardv2
        name="ChatGPT"
        coverImg="https://careerdekho.ai/media/careerdekho-bg.png"
        title="chatGPT is conversational ai from OpenAI"
        description="OpenAI is an AI research and deployment company. Our mission is to ensure 
        that artificial general intelligence benefits all of humanity."
        price="FREE"
        tag_1="chatbot"
        tag_2="conversational"
        url="https://careerdekho.ai/"
        icon="https://openai.com/content/images/size/w256h256/2020/09/icon-1.png"
      />
      <Cardv2
        name="Careerdekho Ai"
        coverImg="https://careerdekho.ai/media/careerdekho-bg.png"
        title="CAREERDEKHO Ai — AI Career Discovery Tool"
        description="Find the perfect career for you with the help of AI. Let our AI-powered 
        career discovery tool help you find the perfect career fit!"
        price="FREE"
        tag_1="Job"
        tag_2="Career"
        url="https://careerdekho.ai/"
        icon="https://careerdekho.ai/favicon.svg"
      />
      
    </div>
    
  );
};

export default Cards;
