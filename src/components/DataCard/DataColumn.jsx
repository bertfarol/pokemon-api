import React from "react";

const DataColumn = ({ firstData, secondData }) => {

  return (
    <div className="grid grid-cols-2 w-full">
      <div className="flex gap-4">
        <div className="text-[13px] font-medium">{firstData[0]}</div>
        <div className="text-sm font-medium text-[#989898]">{firstData[1]}</div>
      </div>
      <div className="flex gap-4">
        <div className="text-[13px] font-medium">{secondData[0]}</div>
        <div className="text-sm font-medium text-[#989898]">
          {secondData[1]}
        </div>
      </div>
    </div>
  );
};

export default DataColumn;
