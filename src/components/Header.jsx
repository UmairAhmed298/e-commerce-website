import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Admin", href: "/admin" },
    { name: "Items", href: "/items" },
    { name: "Category", href: "/categories" },
    { name: "Contact", href: "/login" },
  ];

  return (
    <div>
      <header className="w-full flex h-20 bg-white justify-center fixed z-10 rounded-xl ">
        <div className="flex w-full justify-between h-full max-w-7xl bg-white rounded-xl">
          <div className="flex items-center sm:justify-center max-sm:justify-center">
              <Link href="/" className="flex justify-center pl-2 ">
          <Image src="next.svg" height={100} width={100} alt="icon" />
          </Link>
          </div>
          
          <div className="flex items-center gap-3 text-xl h-20 sm:hidden md:flex max-sm:hidden">
            {navItems.map((item, index) => (
              <div key={index}>
                <Link href={item.href} className="flex justify-center pr-2">
                  <p className="text-gray-600 hover:text-amber-800">
                    {item.name}
                  </p>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex gap-2 items-center pr-2">

            <div className="h-full w-[1px] bg-gray-300"></div>
           
            <div className="border-[1px]  rounded-[20px] border-gray-300 p-1">

            <Image 
              src="/cart.png"
              width={30}
              height={30}
              alt="cart"
              className="rounded-[20px]"
              />
              </div>

            <Image 
              src="/my-profile.png"
              width={40}
              height={40}
              alt="profile-pic"
              className="rounded-[20px]"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
