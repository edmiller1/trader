import React from "react";

export const Holdings: React.FC = () => {
  const ownedStocks = [
    {
      symbol: "ABNB",
      units: 11.19,
      avgPrice: 134.09,
      lastPrice: 140.4,
      totalValue: 1570.64,
      dayChangePrice: 30.99,
      dayChangePercent: 1.93,
      totalChangePrice: 70.64,
      totalChangePercent: 4.71,
    },
    {
      symbol: "SOFI",
      units: 11.19,
      avgPrice: 134.09,
      lastPrice: 140.4,
      totalValue: 1570.64,
      dayChangePrice: 30.99,
      dayChangePercent: 1.93,
      totalChangePrice: 70.64,
      totalChangePercent: 4.71,
    },
  ];

  return (
    <div className="mx-1 mt-5 pb-8 border-b-4">
      <h1 className="uppercase text-2xl mb-5">Holdings</h1>
      <div className="flex flex-col mb-2 border-b-2 border-black">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Stock
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      units
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Avg. Price
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Last
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Value
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Day Change
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Total Change
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {ownedStocks.map((stock) => (
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap">
                        <div className="font-light">{stock.symbol}</div>
                      </td>
                      <td className="px-4 whitespace-nowrap">
                        <span className="font-light">{stock.units}</span>
                      </td>
                      <td className="px-4 whitespace-nowrap">
                        <div className="font-light">${stock.avgPrice}</div>
                      </td>
                      <td className="px-4 whitespace-nowrap">
                        <div className="font-light">${stock.lastPrice}</div>
                      </td>
                      <td className="px-4 whitespace-nowrap">
                        <div className="font-light">${stock.totalValue}</div>
                      </td>
                      <td className="px-4 whitespace-nowrap">
                        <div
                          className="font-light"
                          style={
                            stock.dayChangePrice < 0
                              ? { color: "rgba(239, 68, 68, 1)" }
                              : { color: "rgba(16, 185, 129, 1)" }
                          }
                        >
                          $
                          {stock.dayChangePrice < 0
                            ? "-" + stock.dayChangePrice
                            : "+" + stock.dayChangePrice}
                          &nbsp; (
                          {stock.dayChangePercent < 0
                            ? "-" + stock.dayChangePercent
                            : "+" + stock.dayChangePercent}
                          % )
                        </div>
                      </td>
                      <td className="px-4 whitespace-nowrap">
                        <div
                          className="font-light"
                          style={
                            stock.totalChangePrice < 0
                              ? { color: "rgba(239, 68, 68, 1)" }
                              : { color: "rgba(16, 185, 129, 1)" }
                          }
                        >
                          $
                          {stock.totalChangePrice < 0
                            ? "-" + stock.totalChangePrice
                            : "+" + stock.totalChangePrice}
                          &nbsp; (
                          {stock.totalChangePercent < 0
                            ? "-" + stock.totalChangePercent
                            : "+" + stock.totalChangePercent}
                          %)
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 flex">
        <div className="w-3/6">
          <h1 className="uppercase tracking-wider">Totals</h1>
        </div>
        <div className="-ml-12">
          <span className="font-light">$1,570.64</span>
        </div>
        <div className="ml-14">
          <span className="text-red-500 font-light">-$16,570.64 (56.8%)</span>
        </div>
        <div className="ml-20">
          <span className="text-green-500 font-light">+$34,843.72 (78.3%)</span>
        </div>
      </div>
    </div>
  );
};
