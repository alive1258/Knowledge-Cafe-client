import React from "react";

const Cards = (props) => {
  const { img, name, date, time, title, parsonImg } = props.card;
  return (
    <div>
      <div >
        <div >
          <img className=" h-96 w-full" src={img} alt="" />
          <div className="flex justify-between">
            <div className="flex gap-4">
              <img className="h-12 w-12 rounded-full" src={parsonImg} alt="" />
              <div>
                <p>{name}</p>
                <p>{date}</p>
              </div>
            </div>
            <div>{time} min read</div>
          </div>
          <p>{title}</p>
          <p>Mark as read</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
