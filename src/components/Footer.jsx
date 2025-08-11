import React from "react";
import Slackicon from "./icons/Slackicon";
import Twittericon from "./icons/Twittericon";
import Githubicon from "./icons/Githubicon";

const Footer = () => {
  return (
    <div>
      <footer className="flex  h-70 bg-cyan-800 justify-center items-center flex-col text-white rounded-4xl p-5 m-2">
        
        
          <div className="flex justify-between w-full h-full "> 
            <div className="flex flex-col px-10 py-15 gap-30 font-bold text-2xl">
              Logo
               <div className="flex flex-row gap-5">
              <Slackicon />
              <Twittericon />
              <Githubicon />
            </div>

            </div>
           
            <div className="flex flex-col p-5 items-center gap-2"> 
                <h1 className="font-bold text-xl">Pages</h1>
                <p className="hover:text-cyan-600 cursor-pointer">Home</p>
                <p className="hover:text-cyan-600 cursor-pointer">Admin</p>
                <p className="hover:text-cyan-600 cursor-pointer">Items</p>
                <p className="hover:text-cyan-600 cursor-pointer">Category</p>
                <p className="hover:text-cyan-600 cursor-pointer">Contact</p>
            </div>
            <div className="flex flex-col p-5 items-center gap-2"> 
                <h1 className="font-bold text-xl">Legal and Policies</h1>
                <p className="hover:text-cyan-600 cursor-pointer">Term & Conditions</p>
                <p className="hover:text-cyan-600 cursor-pointer">Privacy Policy</p>
                <p className="hover:text-cyan-600 cursor-pointer">Cookie Policy</p>
                
            </div>
            <div className="flex flex-col p-5 items-center gap-2"> 
                <h1 className="font-bold text-xl ">Platform Information</h1>
                <p className="hover:text-cyan-600 cursor-pointer">About</p>
                <p className="hover:text-cyan-600 cursor-pointer">How it works</p>
                <p className="hover:text-cyan-600 cursor-pointer">FAQ's</p>
                <p className="hover:text-cyan-600 cursor-pointer">Contact us</p>
                <p className="hover:text-cyan-600 cursor-pointer"></p>
            </div>
            
            
       
        </div>
        <div>
          <p className="text-center font-bold pb-3">FleactTech &copy; All Rights Reserved</p>
        </div>
        
      </footer>
    </div>
  );
};

        
        

export default Footer