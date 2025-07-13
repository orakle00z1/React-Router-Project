import React from "react";
import Data from "../../Data";
import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <div className="flex flex-row w-[90%] justify-evenly items-center mx-auto mt-[100px]">
      {Data.map((product) => {
        return (
          <div className="w-[270px] h-[415px] bg-gray-700 rounded-[25px] shadow-2xl text-gray-200 px-2 hover:scale-105 transition-all" key={product.id}>
            <img src={product.image} alt="img" />
            <div className="px-7">
              <h1 className="text-2xl select-none">{product.title}</h1>
              <p className="text-xs line-clamp-3">{product.desc}</p>
              <div className="flex flex-row w-full justify-between items-center mt-5">
                <p>price : {product.price}</p>
                <Link to={`/Product/${product.id}`}>
                  <button className="w-[70px] h-[30px] rounded-xl text-black pb-0.5 bg-gray-200">
                    buy
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
