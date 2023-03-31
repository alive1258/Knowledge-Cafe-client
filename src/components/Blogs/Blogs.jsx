import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";

const Blogs = () => {
  const [cards, setCards] = useState([]);
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    fetch("fakeDB.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handelMarkAsRead = (card) => {
    const newCardInfo = [...cardInfo, card];
    setCardInfo(newCardInfo);
  };

  return (
    <div className="container grid lg:grid-cols-4  lg:gap-4 lg:px-10 py-10">
      <div className="lg:col-span-3 border-2 p-4">
        {cards.map((card) => (
          <Cards
            card={card}
            key={card.id}
            handelMarkAsRead={handelMarkAsRead}
          ></Cards>
        ))}
      </div>

      <div className=" p-4 sm:mt-2">
        <div className="">
          <h2 className="lg:text-lg font-bold mb-4">
            Spent time on read : 177 min
          </h2>
        </div>
        <div className=" ">
          <h2 className="lg:text-lg font-bold">
            Bookmarked Blogs : {cardInfo.length}
          </h2>
          <div className="mt-6 bg-slate-50 p-2 rounded-lg">
            <p>Master Microsoft Power Platform and Become an In-Demand!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
