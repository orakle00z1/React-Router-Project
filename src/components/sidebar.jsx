import React from "react";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import MovingIcon from "@mui/icons-material/Moving";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ReportIcon from "@mui/icons-material/Report";
import EmailIcon from "@mui/icons-material/Email";
import FeedbackIcon from "@mui/icons-material/Feedback";
import MessageIcon from "@mui/icons-material/Message";
import WorkIcon from "@mui/icons-material/Work";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ShowChartIcon from "@mui/icons-material/ShowChart";

import {Link} from 'react-router-dom'

export default function sidebar(params) {
  return (
    <div class="fixed mt-[95px] w-72 text-base pl-7 text-gray-700 h-full ">
      <ul class=" space-y-2">
        <li class="font-bold text-gray-400 text-sm">Dashboard</li>
        <ul class="space-y-1 pl-4">
          <Link
            to="/"
            class="flex items-center gap-2 hover:bg-gray-400 p-2 rounded delay-75 transition-all"
          >
            <OtherHousesIcon />
            <li>Home</li>
          </Link>

          <Link class="flex items-center gap-2 hover:bg-gray-400 p-2 rounded delay-75 transition-all ">
            <MovingIcon />
            <li>Analytics</li>
          </Link>

          <Link class="flex items-center gap-2 hover:bg-gray-400 p-2 rounded delay-75 transition-all ">
            <MovingIcon />
            <li>Sale</li>
          </Link>
        </ul>
      </ul>
      <ul className="space-y-2 mt-4">
        <li className="font-bold text-gray-400 text-sm">Quick Menu</li>
        <ul className="space-y-1 pl-4">
          <Link
            to="/user"
            class="flex items-center gap-2 hover:bg-gray-400 p-2 rounded delay-75 transition-all"
          >
            <PersonIcon />
            <li>Users</li>
          </Link>
          <Link
            to="/newuser"
            class="flex items-center gap-2 hover:bg-gray-400 p-2 rounded delay-75 transition-all"
          >
            <PersonAddAltIcon />
            <li>New user</li>
          </Link>
          <Link
            to="/products"
            class="flex items-center gap-2 hover:bg-gray-400 p-2 rounded delay-75 transition-all"
          >
            <StorefrontIcon />
            <li>Products</li>
          </Link>
          <Link class="flex items-center gap-2 hover:bg-gray-400 p-2 rounded delay-75 transition-all">
            <AttachMoneyIcon />
            <li>Transaction</li>
          </Link>
          <Link class="flex items-center gap-2 hover:bg-gray-400 p-2 rounded delay-75 transition-all">
            <AssessmentIcon />
            <li>Report</li>
          </Link>
        </ul>
      </ul>
      <ul className="space-y-2 mt-4">
        <li className="font-bold text-gray-400 text-sm">Notifications</li>
        <ul className="space-y-1 pl-4">
          <div class="flex items-center gap-2 hover:bg-gray-400 p-2 rounded delay-75 transition-all">
            <EmailIcon />
            <li>Mail</li>
          </div>
          <div class="flex items-center gap-2 hover:bg-gray-400 p-2 rounded delay-75 transition-all">
            <FeedbackIcon />
            <li>Feadback</li>
          </div>
          <div class="flex items-center gap-2 hover:bg-gray-400 p-2 rounded delay-75 transition-all">
            <MessageIcon />
            <li>Message</li>
          </div>
        </ul>
      </ul>
      <ul className="space-y-2 mt-4">
        <li className="font-bold text-gray-400 text-sm">Staff</li>
        <ul className="space-y-1 pl-4">
          <div class="flex items-center gap-2 hover:bg-gray-400 p-2 rounded delay-75 transition-all">
            <WorkIcon />
            <li>Manage</li>
          </div>
          <div class="flex items-center gap-2 hover:bg-gray-400 p-2 rounded delay-75 transition-all">
            <ShowChartIcon />
            <li>Analytics</li>
          </div>
          <div class="flex items-center gap-2 hover:bg-gray-400 p-2 rounded delay-75 transition-all">
            <ReportIcon />
            <li>Reports</li>
          </div>
        </ul>
      </ul>
    </div>
  );
}
