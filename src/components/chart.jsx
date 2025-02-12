import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function chart({ title, data, datakey, grid }) {
  return (
    <div className="mt-16 shadow-2xl p-8 rounded-xl">
          <h3 className="mb-5 text-2xl">{title}</h3>
          <ResponsiveContainer width="100%" aspect='5'>
              <LineChart data={data}>
                  <XAxis dataKey='name' stroke="#5550bd" />
                  <Line dataKey={datakey} stroke="#5550bd" />
                  <Tooltip />
                  {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="10" />}
              </LineChart>
          </ResponsiveContainer>
    </div>
  );
}
