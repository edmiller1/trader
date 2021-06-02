import React from "react";
import "./Header.scss";

export const Header: React.FC = () => {
  return (
    <div className="flex items-center mt-8">
      <div className="flex items-center mx-10">
        <img
          className="w-10 h-9"
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/chart-increasing_1f4c8.png"
          alt="Stock-Chart"
        />
        <h1 className="text-lg">Trader</h1>
      </div>
      <div className="flex justify-center border-b-2 pb-2 ml-12">
        <input
          placeholder="Search Stocks or ETFs"
          className="w-96 focus:outline-none focus:border-2"
        />
        <div className="ml-80">
          <span className="link border-b-2 cursor-pointer">Dashboard</span>
          <span className="link border-b-2 cursor-pointer">Watchlist</span>
          <span className="link border-b-2 cursor-pointer">
            WALL<small>ST</small>
          </span>
        </div>
      </div>
    </div>
  );
};
