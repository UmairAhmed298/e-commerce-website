import Filters from "@/components/icons/Filters";
import Image from "next/image";
import React from "react";

const AdminPage = () => {
  return (
    <>
      <div>
        <h1 className=" font-medium text-2xl flex p-4 mb-[-25px]">Users</h1>

        <div className="flex justify-between">
          <div>
            <span className="p-4 text-xl text-gray-600 flex items-center gap-4">
              All Users{" "}
              <span className="text-sm font-medium">(? rows selected)</span>
            </span>
          </div>

          <div className="flex gap-4 h-full">
            <input
              type="text"
              placeholder="Search User..."
              className="bg-white p-[7px] rounded-[5px] pl-8 text-sm relative"
            />

            <Image
              src="/search.svg"
              width={25}
              height={100}
              alt="Search"
              className="absolute top-34 pl-1"
            />
            <div className="flex items-center gap-3 text-gray-500 bg-white px-4 rounded-[5px]">
              <Filters />
              <span>Filters</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-134 bg-gray-200 justify-center">
          <div className="bg-white mt-[-5px] w-[98%] h-full m-4">
            <div id="Declaration" className="flex items-center justify-between">
              <div className="flex items-center gap-1 p-3 w-50" id="Name-sec">
              <input type="checkBox" className="size-4"/>
              <span className="font-medium text-sm">Name</span>
              </div>


              <div id="role-sec" className="w-40">
                <span className="font-medium text-sm">Role</span>
              </div>

              <div id="AccountStatus"className="w-35">
                  <span className="font-medium text-sm">AccountStatus</span>
              </div>

              <div id="Verification-Status">
                <span className="font-medium text-sm">Verification Status</span>
              </div>

              <div id="RegistrationDate">
                <span className="font-medium text-sm"> RegistrationDate</span>
              </div>

              <div id="Action">
                <span className="font-medium text-sm pr-3">Action</span>
              </div>




            </div>{/* Declaration */}
            <hr className="border-t-[0.5px] border-gray-300" />

            <div id="User-1" className="flex items-center justify-between">
              <div className="flex items-center gap-1 p-3 w-50" id="Name-sec">
              <input type="checkBox" className="size-5"/>
              <div className="flex gap-2">
                <Image 
                  src="/my-profile.png"
                  width={40}
                  height={30}
                  alt="user-pic"
                  className="rounded-[50px] object-cover"

                />
                <div className="flex flex-col">
                  <span className="font-medium text-sm">Umair Ahmed</span>
                  <span className="text-gray-400">umairahmed0429@gmail.com</span>
                </div>
              </div>
              </div>


              <div id="role-sec" className="w-40">
                <span className="font-medium text-sm text-gray-400">Buyer</span>
              </div>

              <div id="AccountStatus"className="w-35">
                  <span className="font-medium text-sm text-green-400 bg-green-100 px-3 py-1 rounded-[7px]">Active</span>
              </div>

              <div id="Verification-Status" className="w-30">
                <span className="font-medium text-sm "></span>
              </div>

              <div id="RegistrationDate">
                <span className="font-medium text-sm text-gray-400"> 29 Dec 2022</span>
              </div>

              <div id="Action" className="w-20">
                <div className="flex gap-2">
                  <Image 
                    src="/pencil.png"
                    width={18}
                    height={15}
                    alt="pencil"
                  />
                  <Image 
                    src="/eye.png"
                    width={18}
                    height={15}
                    alt="eye"
                  />
                  <Image 
                    src="/trash.png"
                    width={18}
                    height={15}
                    alt="trash"
                  />
                </div>
              </div>




            </div> {/*User count */}


 <hr className="border-t-[0.5px] border-gray-300" />

            <div id="User-2" className="flex items-center justify-between">
              <div className="flex items-center gap-1 p-3 w-50" id="Name-sec">
              <input type="checkBox" className="size-5"/>
              <div className="flex gap-2">
                <Image 
                  src="/my-profile.png"
                  width={40}
                  height={30}
                  alt="user-pic"
                  className="rounded-[50px] object-cover"

                />
                <div className="flex flex-col">
                  <span className="font-medium text-sm">Umair Ahmed</span>
                  <span className="text-gray-400">umairahmed0429@gmail.com</span>
                </div>
              </div>
              </div>


              <div id="role-sec" className="w-40">
                <span className="font-medium text-sm text-gray-400">Seller</span>
              </div>

              <div id="AccountStatus"className="w-35">
                  <span className="font-medium text-sm text-green-400 bg-green-100 px-3 py-1 rounded-[7px]">Active</span>
              </div>

              <div id="Verification-Status" className="w-30">
                <span className="font-medium text-sm text-green-400 bg-green-100 px-3 py-1 rounded-[7px]">Approved</span>
              </div>

              <div id="RegistrationDate">
                <span className="font-medium text-sm text-gray-400"> 29 Dec 2022</span>
              </div>

              <div id="Action" className="w-20">
                <div className="flex gap-2">
                  <Image 
                    src="/pencil.png"
                    width={18}
                    height={15}
                    alt="pencil"
                  />
                  <Image 
                    src="/eye.png"
                    width={18}
                    height={15}
                    alt="eye"
                  />
                  <Image 
                    src="/trash.png"
                    width={18}
                    height={15}
                    alt="trash"
                  />
                </div>
              </div>




            </div> {/*User count */}

             <hr className="border-t-[0.5px] border-gray-300" />

            <div id="User-3" className="flex items-center justify-between">
              <div className="flex items-center gap-1 p-3 w-50" id="Name-sec">
              <input type="checkBox" className="size-5"/>
              <div className="flex gap-2">
                <Image 
                  src="/my-profile.png"
                  width={40}
                  height={30}
                  alt="user-pic"
                  className="rounded-[50px] object-cover"

                />
                <div className="flex flex-col">
                  <span className="font-medium text-sm">Umair Ahmed</span>
                  <span className="text-gray-400">umairahmed0429@gmail.com</span>
                </div>
              </div>
              </div>


              <div id="role-sec" className="w-40">
                <span className="font-medium text-sm text-gray-400">Buyer</span>
              </div>

              <div id="AccountStatus"className="w-35">
                  <span className="font-medium text-sm text-red-500 bg-red-100 px-3 py-1 rounded-[7px]">Disabled</span>
              </div>

              <div id="Verification-Status" className="w-30">
                <span className="font-medium text-sm "></span>
              </div>

              <div id="RegistrationDate">
                <span className="font-medium text-sm text-gray-400"> 12 Dec 2022</span>
              </div>

              <div id="Action" className="w-20">
                <div className="flex gap-2">
                  <Image 
                    src="/pencil.png"
                    width={18}
                    height={15}
                    alt="pencil"
                  />
                  <Image 
                    src="/eye.png"
                    width={18}
                    height={15}
                    alt="eye"
                  />
                  <Image 
                    src="/trash.png"
                    width={18}
                    height={15}
                    alt="trash"
                  />
                </div>
              </div>




            </div> {/*User count */}

             <hr className="border-t-[0.5px] border-gray-300" />

            <div id="User-4" className="flex items-center justify-between">
              <div className="flex items-center gap-1 p-3 w-50" id="Name-sec">
              <input type="checkBox" className="size-5"/>
              <div className="flex gap-2">
                <Image 
                  src="/my-profile.png"
                  width={40}
                  height={30}
                  alt="user-pic"
                  className="rounded-[50px] object-cover"

                />
                <div className="flex flex-col">
                  <span className="font-medium text-sm">Umair Ahmed</span>
                  <span className="text-gray-400">umairahmed0429@gmail.com</span>
                </div>
              </div>
              </div>


              <div id="role-sec" className="w-40">
                <span className="font-medium text-sm text-gray-400">Buyer</span>
              </div>

              <div id="AccountStatus"className="w-35">
                  <span className="font-medium text-sm text-green-400 bg-green-100 px-3 py-1 rounded-[7px]">Active</span>
              </div>

              <div id="Verification-Status" className="w-30">
                <span className="font-medium text-sm "></span>
              </div>

              <div id="RegistrationDate">
                <span className="font-medium text-sm text-gray-400"> 29 Dec 2022</span>
              </div>

              <div id="Action" className="w-20">
                <div className="flex gap-2">
                  <Image 
                    src="/pencil.png"
                    width={18}
                    height={15}
                    alt="pencil"
                  />
                  <Image 
                    src="/eye.png"
                    width={18}
                    height={15}
                    alt="eye"
                  />
                  <Image 
                    src="/trash.png"
                    width={18}
                    height={15}
                    alt="trash"
                  />
                </div>
              </div>




            </div> {/*User count */}

             <hr className="border-t-[0.5px] border-gray-300" />

            <div id="User-5" className="flex items-center justify-between">
              <div className="flex items-center gap-1 p-3 w-50" id="Name-sec">
              <input type="checkBox" className="size-5"/>
              <div className="flex gap-2">
                <Image 
                  src="/my-profile.png"
                  width={40}
                  height={30}
                  alt="user-pic"
                  className="rounded-[50px] object-cover"

                />
                <div className="flex flex-col">
                  <span className="font-medium text-sm">Umair Ahmed</span>
                  <span className="text-gray-400">umairahmed0429@gmail.com</span>
                </div>
              </div>
              </div>


              <div id="role-sec" className="w-40">
                <span className="font-medium text-sm text-gray-400">Buyer</span>
              </div>

              <div id="AccountStatus"className="w-35">
                  <span className="font-medium text-sm text-green-400 bg-green-100 px-3 py-1 rounded-[7px]">Active</span>
              </div>

              <div id="Verification-Status" className="w-30">
                <span className="font-medium text-sm "></span>
              </div>

              <div id="RegistrationDate">
                <span className="font-medium text-sm text-gray-400"> 29 Dec 2022</span>
              </div>

              <div id="Action" className="w-20">
                <div className="flex gap-2">
                  <Image 
                    src="/pencil.png"
                    width={18}
                    height={15}
                    alt="pencil"
                  />
                  <Image 
                    src="/eye.png"
                    width={18}
                    height={15}
                    alt="eye"
                  />
                  <Image 
                    src="/trash.png"
                    width={18}
                    height={15}
                    alt="trash"
                  />
                </div>
              </div>




            </div> {/*User count */}

             <hr className="border-t-[0.5px] border-gray-300" />

            <div id="User-6" className="flex items-center justify-between">
              <div className="flex items-center gap-1 p-3 w-50" id="Name-sec">
              <input type="checkBox" className="size-5"/>
              <div className="flex gap-2">
                <Image 
                  src="/my-profile.png"
                  width={40}
                  height={30}
                  alt="user-pic"
                  className="rounded-[50px] object-cover"

                />
                <div className="flex flex-col">
                  <span className="font-medium text-sm">Umair Ahmed</span>
                  <span className="text-gray-400">umairahmed0429@gmail.com</span>
                </div>
              </div>
              </div>


              <div id="role-sec" className="w-40">
                <span className="font-medium text-sm text-gray-400">Buyer</span>
              </div>

              <div id="AccountStatus"className="w-35">
                  <span className="font-medium text-sm text-green-400 bg-green-100 px-3 py-1 rounded-[7px]">Active</span>
              </div>

              <div id="Verification-Status" className="w-30">
                 <span className="font-medium text-sm text-blue-400 bg-blue-100 px-3 py-1 rounded-[7px]">Pending</span>
              </div>

              <div id="RegistrationDate">
                <span className="font-medium text-sm text-gray-400"> 29 Dec 2022</span>
              </div>

              <div id="Action" className="w-20">
                <div className="flex gap-2">
                  <Image 
                    src="/pencil.png"
                    width={18}
                    height={15}
                    alt="pencil"
                  />
                  <Image 
                    src="/eye.png"
                    width={18}
                    height={15}
                    alt="eye"
                  />
                  <Image 
                    src="/trash.png"
                    width={18}
                    height={15}
                    alt="trash"
                  />
                </div>
              </div>




            </div> {/*User count */}

             <hr className="border-t-[0.5px] border-gray-300" />
             
            <div id="User-7" className="flex items-center justify-between">
              <div className="flex items-center gap-1 p-3 w-50" id="Name-sec">
              <input type="checkBox" className="size-5"/>
              <div className="flex gap-2">
                <Image 
                  src="/my-profile.png"
                  width={40}
                  height={30}
                  alt="user-pic"
                  className="rounded-[50px] object-cover"

                />
                <div className="flex flex-col">
                  <span className="font-medium text-sm">Umair Ahmed</span>
                  <span className="text-gray-400">umairahmed0429@gmail.com</span>
                </div>
              </div>
              </div>


              <div id="role-sec" className="w-40">
                <span className="font-medium text-sm text-gray-400">Buyer</span>
              </div>

              <div id="AccountStatus"className="w-35">
                  <span className="font-medium text-sm text-red-500 bg-red-100 px-3 py-1 rounded-[7px]">Disabled</span>
              </div>

              <div id="Verification-Status" className="w-30">
                <span className="font-medium text-sm "></span>
              </div>

              <div id="RegistrationDate">
                <span className="font-medium text-sm text-gray-400"> 29 Dec 2022</span>
              </div>

              <div id="Action" className="w-20">
                <div className="flex gap-2">
                  <Image 
                    src="/pencil.png"
                    width={18}
                    height={15}
                    alt="pencil"
                  />
                  <Image 
                    src="/eye.png"
                    width={18}
                    height={15}
                    alt="eye"
                  />
                  <Image 
                    src="/trash.png"
                    width={18}
                    height={15}
                    alt="trash"
                  />
                </div>
              </div>




            </div> {/*User count */}







          </div>{/* Users */}




        </div>
      </div>
    </>
  );
};

export default AdminPage;
