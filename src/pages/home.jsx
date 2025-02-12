import React from "react";
import Featuers from "../components/featuers";
import Chart from "../components/chart";
import { xAxisData } from "../data";
import WidgetL from "../components/widgetL";
import WidgetR from "../components/widgetR";


export default function home(params) {
  return (
    <div className="w-full p-6 pl-[334px] pr-[45px] pt-[115px]">
      <div className="flex flex-row justify-between">
        <Featuers />
        <Featuers />
        <Featuers />
      </div>
      <Chart grid title="Month sale " data={xAxisData} datakey="sale" />
      <div className="flex flex-row justify-between gap-6 ">
        <WidgetL className=""/>
        <WidgetR />
      </div>
    </div>
  );
}
