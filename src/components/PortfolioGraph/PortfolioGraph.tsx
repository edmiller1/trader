import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

export const PortfolioGraph: React.FC<{ portfolioValue: number }> = ({
  portfolioValue,
}) => {
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const hashtags: string[] = [
    "To the Moon 🚀",
    "Diamond Hands 💎🤲",
    "Apes Strong Together 🦍",
  ];
  let randomHashtag: string =
    hashtags[Math.floor(Math.random() * hashtags.length)];
  const [hashtag, setHastag] = useState<string | null>(null);

  let currYear = new Date().getFullYear();

  useEffect(() => {
    setHastag(randomHashtag);
  }, []);

  const data: Object = {
    type: "Line",
    labels: months,
    datasets: [
      {
        label: currYear,
        data: [10300, 14207, 15932, 13234, 17549],
        fill: false,
        backgroundColor: "rgba(16, 185, 129,1)",
        borderColor: "rgba(16, 185, 129,1)",
        pointBackgroundColor: "rgba(16, 185, 129,1)",
      },
    ],
  };

  const options = {
    title: {
      position: "top",
      display: "true",
      text: "Portfolio",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
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
            ${portfolioValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            <span className="text-xl">
              {portfolioValue.toString().slice(-2)}
            </span>
          </h1>
        </div>
        <div className="mt-3 mb-8">
          <h1 className="text-green-500 text-xl">+$648.20 (+8.4%) Day</h1>
          <h1 className="text-xl">+$18,878.20(+20.4%) Total</h1>
        </div>
      </div>
      <div className="w-2/3">
        <h1 className="-mt-2 flex justify-center text-3xl">Portfolio</h1>
        <Line data={data} options={options} type={"Line"} />
      </div>
    </div>
  );
};
