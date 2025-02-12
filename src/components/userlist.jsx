import React from "react";
import { useState } from "react";
import { userRows } from "../data";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Userlist(params) {
    const [userData, setUserData] = useState(userRows);
    
    const userDelete = userID => {
        setUserData(userData.filter(user => user.id !== userID))
    }

  const columns = [
    {
      field: "id",
      headerName: "id",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 250,
      renderCell: (params) => {
        return (
          <Link to="/">
            <div className="flex items-center gap-5 ">
              <img
                src={params.row.img}
                alt=""
                className="w-[40px] h-[40px] rounded-full "
              />
              {params.row.username}
            </div>
          </Link>
          //   console.log(params)
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
    {
      field: "status",
      headerName: "Status",
      width: 140,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex gap-4 items-center ">
            <Link to={`/user/${params.row.id}`}>
              <button className="rounded-full text-blue-600  "> Edit </button>
            </Link>

            <DeleteIcon onClick={() => userDelete(params.row.id)} className="cursor-pointer text-gray-600 "/>
          </div>
        );
      },
    },
  ];

  return (
    <div className="w-full p-6 pl-[334px] pr-[45px] pt-[115px]">
      <DataGrid
        rows={userData}
        columns={columns}
        pageSize={3}
        checkboxSelection
      />
    </div>
  );
}
