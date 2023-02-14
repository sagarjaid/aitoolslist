import React from "react";

const Card = (props) => {
  const { name, coverImg, description, oneline, price, category, link } = props;
  return (
    <div className="w-full sdm:w-1/2 l:w-1/3">
      <div className="border m-1 p-2 rounded-sm">
        <img src={coverImg} alt={name} />
        <div>{category}</div>
        <div>
          <div>{name}</div>
          <div>{oneline}</div>
          <div>{description}</div>
          <div>
            <span>{price}</span>
            <span>{`-->`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
