import React from "react";
import { useParams } from "react-router-dom";
import Data from "../../Data";
import { Link } from "react-router-dom";

export default function ProductID() {
  let param = useParams();

  let MainProduct = Data.find((product) => product.id == param.ProductID);
  // console.log(MainProduct)
  return (
    <div
      className="flex flex-row justify-evenly mt-[100px] w-[80%] h-[600px] p-[40px] mx-auto bg-gray-700 rounded-[25px] shadow-2xl text-gray-200 select-none"
      key={MainProduct.id}
    >
      <img src={MainProduct.image} alt="img" className="w-[400px] h-[400px]" />
      <div className="mt-[50px] px-7">
        <h1 className="text-4xl select-none mb-[60px]">{MainProduct.title}</h1>
        <p className="text-xs w-[800px] h-[250px]">{MainProduct.desc}</p>
        <div className="flex flex-row w-full justify-between items-center mt-[60px]">
          <p className="text-lg">price : {MainProduct.price}</p>
          <Link to={`/Product/${MainProduct.id}`}>
            <button className="w-[130px] h-[50px] rounded-xl text-black pb-0.5 bg-gray-200">
              buy
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
