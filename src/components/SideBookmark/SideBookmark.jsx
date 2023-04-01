import React from "react";

const SideBookmark = (props) => {
  const { cardInfo ,title } = props;
  let totalTime = 0;

  for (let product of cardInfo) {
    totalTime = totalTime + product.time;
  }

  return (
    <div>
      <div className="">
        <h2 className="lg:text-lg font-bold mb-4">
          Spent time on read :{totalTime} min
        </h2>
      </div>

      <h2 className="lg:text-lg font-bold">
        {/* Bookmarked Blogs :{title} */}
   
      </h2>
      {/* <div className="mt-6 bg-slate-50 p-2 rounded-lg"> */}
        {/* {
          book.map((books)=> console.log(books))
        } */}
        {/* <p>{cardInfo.title}</p> */}
      {/* </div> */}
    </div>
  );
};

export default SideBookmark;
