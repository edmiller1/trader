import React, { useState, useEffect } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const PortfolioGraph: React.FC = () => {
  const hashtags: string[] = [
    "To the Moon 🚀",
    "Diamond Hands 💎🤲",
    "Apes Strong Together 🦍",
  ];
  let randomHashtag: string =
    hashtags[Math.floor(Math.random() * hashtags.length)];
  const [hashtag, setHastag] = useState<string | null>(null);

  useEffect(() => {
    setHastag(randomHashtag);
  }, []);

  const options: Highcharts.Options = {
    title: {
      text: "Portfolio",
    },
    series: [
      {
        type: "line",
        color: "#10b981",
        data: [1200, 1287, 1465, 1345, 1290, 1680],
      },
    ],
  };

  return (
    <div className="border-b-4 flex">
      <div className="w-1/3">
        <div>
          <h1 className="uppercase text-4xl font-semibold">dashboard</h1>
          <span className="font-light">#{hashtag}</span>
        </div>
        <div className="mt-16">
          <h3 className="text-xs tracking-wider uppercase">Equity Value</h3>
          <h1 className="text-4xl">
            $42,069<span className="text-xl">.90</span>
          </h1>
        </div>
        <div className="mt-3 mb-8">
          <h1 className="text-green-500 text-xl">+$648.20 (+8.4%) Day</h1>
          <h1 className="text-xl">+$18,878.20(+20.4%) Total</h1>
        </div>
      </div>
      <div className="w-2/3">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};
