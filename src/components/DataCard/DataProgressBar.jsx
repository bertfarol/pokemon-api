import React from "react";

const DataProgressBar = ({
  name,
  value,
  max,
  barForeground,
  barBackground,
}) => {
  const decimal = value / max;
  const percentage = decimal * 100;

  return (
    <>
      <div className="text-[13px] font-medium uppercase w-[70px]">{name}</div>
      <div className="text-sm font-medium text-[#989898] w-[20px] text-center">
        {value}
      </div>
      <div
        style={{ background: barBackground }}
        className="grow h-3 rounded-md"
      >
        <div
          style={{
            width: `${percentage.toString()}%`,
            background: barForeground,
          }}
          className="h-3 rounded-md"
        ></div>
      </div>
    </>
  );
};

export default DataProgressBar;
