import React from "react";

const DataCard = ({ title, children }) => {
  return (
    <div className="p-[22px] bg-white rounded-md">
      <div className="text-[17px] font-medium mb-[22px]">{title}</div>
      {children}
    </div>
  );
};

export default DataCard;
