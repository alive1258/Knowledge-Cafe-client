import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Cards = (props) => {
  const { img, name, date, time, title, parsonImg } = props.card;
  const handelMarkAsRead = props.handelMarkAsRead;

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
            <div>{time} min read  <FontAwesomeIcon className="cursor-pointer " icon={faBookmark} /></div>
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
          <div className="border-b-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
