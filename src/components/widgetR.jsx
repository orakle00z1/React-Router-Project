import React from "react";
import { transactions } from "../data";

export default function widgetR(params) {
  const Button = ({ type }) => {
    if (type === "Approved") {
      return (
        <button className=" p-[6px] w-[80px] bg-green-200 rounded-lg text-green-800 cursor-pointer">
          Approved{" "}
        </button>
      );
    } else if (type === "Declined") {
      return (
        <button className="p-[6px]  w-[80px] bg-red-200 rounded-lg text-red-800 cursor-pointer">
          Declined
        </button>
      );
    } else if (type === "Pending")
      return (
        <button className="p-[6px]  w-[80px] bg-blue-200 rounded-lg text-blue-800 cursor-pointer">
          Pending
        </button>
      );
  };

  return (
    <div class=" shadow-2xl mt-16 space-y-1 pt-8 pl-8 pr-8 w-full overflow-y-auto max-h-[455px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <p className="text-2xl mb-5">Latest TransActions</p>

      <table className="w-full ">
        <tr className="text-left">
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>

        {transactions.map((transaction) => (
          <tr className="">
            <td className="gap-5">
              <div className="flex flex-row gap-4 py-5 items-center">
                <img
                  src="img/profile.png"
                  alt="wd"
                  className="w-[40px] h-[40px] rounded-full "
                />

                <p>{transaction.username}</p>
              </div>
            </td>
            <td className="">{transaction.date}</td>
            <td>{transaction.amount}</td>
            <td>
              <Button type={transaction.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
