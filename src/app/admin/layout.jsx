import Header from "@/components/Header";
import Categories from "@/components/icons/Categories";
import Dashboard from "@/components/icons/Dashboard";
import Items from "@/components/icons/Items";
import Users from "@/components/icons/Users";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AdminLayout = ({ children }) => {
  
  return (
    <div className="bg-gray-200 flex p-3">
      <div className="grid grid-cols-[250px_1fr] w-full h-178">
        <div className="w-full  h-175 flex flex-col bg-black gap-2 rounded-[20px]">
          <Link href="/" className="flex p-2">
            <Image
              src="/nextjs.png"
              height={100}
              width={235}
              alt="icon"
              className="rounded-[20px]"
            />
          </Link>

          <div className="flex flex-col justify-center gap-1 text-xl ">

            <div className="text-gray-400 hover:text-white justify-center flex">
            <Link href="/" className="flex items-center gap-2 hover:bg-gray-800 p-3 rounded-xl w-50 justify-center">
              <Dashboard />
              <span>Dashboard</span>
            </Link>
            </div>
            <div className="text-gray-400 hover:text-white flex justify-center">
            <Link href="/" className="flex items-center gap-2 hover:bg-gray-800 p-3 rounded-xl w-50 justify-center">
              <Users />
              <span>Users</span>
            </Link>
            </div>
            <div className="text-gray-400 hover:text-white  flex justify-center">
            <Link href="/" className="flex items-center gap-2 hover:bg-gray-800 p-3 rounded-xl w-50 justify-center">
              <Items />
              <span>Items</span>
            </Link>
            </div>
            <div className="text-gray-400 hover:text-white flex justify-center ">
            <Link href="/" className="flex items-center gap-2 hover:bg-gray-800 p-3 rounded-xl w-50 justify-center">
              <Categories />
              <span>Categories</span>
            </Link>
            </div>
          </div>
        </div>
        <div>
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
