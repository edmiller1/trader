import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

interface Quote {
  exchange: string;
  shortname: string;
  quoteType: string;
  symbol: string;
  index: string;
  score: string;
  typeDisp: string;
  longName: string;
  isYahooFinance: boolean;
}

export const Header: React.FC = () => {
  const [searchedStock, setSearchedStock] = useState<string>("");
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const searchStock = (e: any) => {
    setSearchedStock(e.target.value);
    fetch(
      "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=" +
        searchedStock +
        "&region=US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "531fd895e0msh2398548f5722838p1cf141jsndee28d7368c7",
          "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        },
      }
    )
      .then((res: any) => {
        console.log(res.quotes);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
          value={searchedStock}
          onChange={(e) => searchStock(e)}
          placeholder="Search Stocks or ETFs"
          className="w-96 focus:outline-none focus:border-2"
        />
        <div className="ml-80">
          <Link to="/">
            <span className="link border-b-2 cursor-pointer">Dashboard</span>
          </Link>
          <Link to="/watchlist">
            <span className="link border-b-2 cursor-pointer">Watchlist</span>
          </Link>
          <Link to="/markets">
            <span className="link border-b-2 cursor-pointer">
              WALL<small>ST</small>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
