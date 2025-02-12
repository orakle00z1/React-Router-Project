import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Features(params) {
  return (
    <div>
      <div className="flex flex-col justify-between h-[200px] p-8 cursor-pointer rounded-xl shadow-2xl 2xl:w-[380px] xl:w-[290px] lg:w-[210px] md:w-[180px] sm:w-[100px] ">
        <div className="text-2xl">
          <p>Revanue</p>
        </div>
        <div className="flex flex-row gap-[10px] lg:gap-5 lg:text-3xl items-center ">
          <p className="text-3xl lg:text-xl sm:text-base">$2.415</p>
          <span className=" lg:text-base ">11.5</span>
          <ArrowUpwardIcon className="text-green-600" />
        </div>

        <div className="lg:text-[15px] text-gray-400 font-normal ">
          <p>Compared to last month</p>
        </div>
      </div>
    </div>
  );
}
