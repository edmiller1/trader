import React from "react";

export const BuyingPower: React.FC = () => {
  return (
    <div className="mt-3 flex border-b-4">
      <div className="ml-2 mr-1 py-2 px-3 bg-gray-100 w-1/2 mb-3 cursor-pointer hover:bg-gray-200">
        <h1 className="uppercase tracking-wider text-sm">Buying Power</h1>
        <h1 className="text-lg pt-1">$12,200</h1>
      </div>
      <div className="mr-2 ml-1 py-2 px-3 bg-gray-100 w-1/2 mb-3 cursor-pointer hover:bg-gray-200">
        <h1 className="uppercase tracking-wider text-sm">Pending Orders</h1>
        <h1 className="text-lg pt-1">0</h1>
      </div>
    </div>
  );
};
