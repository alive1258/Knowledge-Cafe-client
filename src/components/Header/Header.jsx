import React from "react";

const Header = () => {
  return (
    <div className="container px-10 ">
      <div className="lg:flex justify-between items-center  ">
        <h1 className="lg:text-3xl font-bold ">Knowledge Cafe</h1>
        <div className="flex gap-4">
          <a href="/home">Home</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="border-b-2 mt-6"></div>
     
    </div>
  );
};

export default Header;
