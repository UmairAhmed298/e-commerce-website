"use client";

import Emailicon from "@/components/icons/Emailicon";
import HideTextIcon from "@/components/icons/HideTextIcon";
import PassIcon from "@/components/icons/PassIcon";
import React, { useState } from "react";

const Authloginpage = () => {

  const [pass, setpass] = useState("");
  const [email, setemail] = useState("");
  const handleLogin = (e) =>{
    console.log("Email is : ", email);
    console.log("Password is : ", pass);   
  }
  
  

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 ">
        <h1 className="mb-2 text-[33.6px] font-[400]bg-[rgba(12, 13, 52, 1)]">Welcome back</h1>
        <p className="mb-6 text-gray-600 text-[19.6px]">Log in to explore exciting auctions and unique finds.</p>
<div className="space-y-4">
       <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            
            <div className="flex relative">

            <Emailicon />
            <input
              type="text"
              placeholder="Enter your email, username or phone"
              className="mt-1 w-full rounded border border-gray-300 p-2 pl-9 relative"
              required
              value={email} 
              onChange={(e) => setemail = setemail(e.target.value)}
              />
            
            </div>
          </div>

          <div className="relative">
            <PassIcon />
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full rounded border border-gray-300 p-2 pl-9"
              required
              value={pass} 
              onChange={(e) => setpass = setpass(e.target.value)}
            />
            <HideTextIcon />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm">Keep me logged in</label>
            </div>
            <p className="text-sm text-cyan-800  hover:text-cyan-600 cursor-pointer">Forgot password?</p>
          </div>

          <button
            type="submit"
            className="w-full rounded-[120px] p-[12px] bg-[rgba(37,165,180,1)] text-white cursor-pointer text-[18px]"
            onClick={()=>handleLogin()}
          >
            Log into your account
          </button>
</div>
        

        <div className="mt-6 text-center">
          <p className="text-gray-500">New to Fleach Teach?</p>
          <p  className="mt-2  w-full  py-2 text-sm hover:text-cyan-600 cursor-pointer">
            Create Account
          </p>
        </div>
      </div>
    </div>
  );
}

export default Authloginpage;