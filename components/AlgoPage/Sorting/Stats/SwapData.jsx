import React from "react";
import { useSelector } from "react-redux";

const SwapData = () => {
  let ac = useSelector((state) => state.sorting.arrayCount);
  let swaps = useSelector((state) => state.sorting.swaps);
  return (
    <div className="flex flex-col h-full font-space p-gap uppercase justify-between  border-b-[10px] border-b-green-bg">
      <div className="flex flex-col ">
        <div className="text-purple">
          Percentage{" "}
          <span className="text-green">{Math.round((swaps / ac) * 100)}</span>
        </div>
        <div className="text-text-1 text-[2.4rem]">
          <span>{swaps}</span>/<span>{ac}</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-green">Swaps</div>
        <div className="text-green">
          Estimated{" "}
          <span className="text-blue" id="estimated-comparisons">
            XXX
          </span>
        </div>
      </div>
    </div>
  );
};

export default SwapData;