import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Cards = (props) => {
  const { img, name, date, time, title, parsonImg } = props.card;
  const handelMarkAsRead = props.handelMarkAsRead;
 

  // const handelBookmark = (title) => {

  //   console.log('title:',title);
  //   // const product ={title}
   
  // };

  return (
    <div>
      <div>
        <div className="mb-4">
          <img className=" h-96 w-full" src={img} alt="" />
          <div className="flex justify-between mt-4 ">
            <div className="flex gap-4 ">
              <img className="h-12 w-12 rounded-full" src={parsonImg} alt="" />
              <div>
                <p>{name}</p>
                <p>{date}</p>
              </div>
            </div>
            <div>
              {time} min read
              <FontAwesomeIcon
                className="cursor-pointer "
                icon={faBookmark}
                onClick={() => handelBookmark()}
              />
            </div>
          </div>
          <p className="text-xl font-bold">{title}</p>
          <div className="cursor-pointer ">
            <button
              className="text-blue-500 mb-4 mt-4"
              onClick={() => handelMarkAsRead(props.card)}
            >
              Mark as read
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-2"></div>
    </div>
  );
};

export default Cards;
