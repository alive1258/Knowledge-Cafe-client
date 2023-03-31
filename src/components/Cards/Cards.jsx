import React from "react";

const Cards = (props) => {
  const { img, name, data, time, title, parsonImg } = props.card;
  return (
    <div>
      <div >
        <div >
          <img className=" h-96 w-full" src={img} alt="" />
          <div className="flex justify-between">
            <div className="flex gap-4">
              <p>sobi:</p>
              <div>
                <p>Mr. Raju</p>
                <p>Mar 14 (4 Days ago)</p>
              </div>
            </div>
            <div>05 min read</div>
          </div>
          <p>How to get your first job as a self-taught programmer</p>
          <p>Mark as read</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
