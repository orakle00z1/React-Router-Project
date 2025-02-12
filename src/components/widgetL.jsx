import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { newMembers } from "../data";

export default function new_member(params) {
  return (
    <ul class=" shadow-2xl mt-16 space-y-1 p-8 lg:min-w-[260px] xl:min-w-[330px] 2xl:min-w-[460px] overflow-y-auto max-h-[455px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <p className="text-2xl ">New Join Member</p>
      {newMembers.map((user) => (
        <div class="flex justify-between p-6 items-center cursor-pointer border-b-2 border-gray-300 ">
          <img
            src={user.img}
            alt="prof"
            className="rounded-full w-[40px] h-[40px]"
          />
          <div className="text-center">
            <li className="text-lg">{user.username} </li>
            <li className="text-xs text-gray-400">{user.title}</li>
          </div>
          <button className="shadow-2xl bg-blue-100 p-2 hover:bg-blue-50 text-gray-600 transition-all delay-75 rounded-lg">
            <VisibilityIcon />
          </button>
        </div>
      ))}
    </ul>
  );
}
