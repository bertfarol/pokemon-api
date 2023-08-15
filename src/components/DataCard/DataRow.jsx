import React from 'react'

const DataRow = ({ children }) => {
  return (
    <div className="py-[15px] flex gap-4 border-t border-dashed border-[#B5B5B5] items-center">
      {children}
    </div>
  );
};

export default DataRow