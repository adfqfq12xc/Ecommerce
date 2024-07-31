'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Container from "./container";
import Logo from "./Logo";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { signIn, signOut, useSession } from "next-auth/react";
import { CiLogout } from "react-icons/ci";
import { useSelector } from "react-redux";
import { StoreData } from "../_redux/smartslice";
import { Product } from "../_redux/smartslice";
import Link from "next/link";
function Header() {
  const { data: session } = useSession();
const productdata=useSelector((state:any)=>state?.shopping)
console.log(session);
const [sum,setsum]=useState(0.00)
const [quantity,setquantity]=useState(0)

useEffect(()=>{
  let sum=0
  let q=0
  productdata?.productData?.map((e:Product)=>{
  sum+=e.price*e.quantity
  q+=e.quantity

  })
  setquantity(q)  
  console.log(sum)
  setsum(sum)

},[productdata])


  return (
    <div className="fixed  left-0  top-0 h-20 z-50 bg-bodycolor w-full ">
<div className=" flex flex-row  max-w-screen-xl gap-x-4 py-5 justify-start items-start mx-auto ">
 
        <Logo />
        <div className="w-full hidden  bg-white md:flex items-center gap-1 border-[2px] rounded-full px-2 py-2 border-lightext focus-within:border-orange-600 group">
          <IoIosSearch className="text-gray-400 group-focus-within:text-darktext duration-200" />
          <input
            type="text"
            placeholder="Search for products"
            className="placeholder:text-sm flex-1 outline-none rounded-sm"
          />
        </div>

        {/* Login/Logout */}
        {!session && (
          <Link href='/auth/Signin'>
          <div
            className="text-gray-500 flex items-center justify-center bg-bglight rounded-full hover:bg-white border-[1px] whitespace-nowrap p-2 cursor-pointer"
          >
            <AiOutlineUser className="text-2xl" />
            <p className="w-auto">Login/Register</p>
          </div>
          </Link>
        )}

        {session && session.user?.image && (
          <Link href={'/user'}>
          <Image
            src={session.user.image as string}
            alt="Profile Image"
            width={50}
            height={50}
            className="rounded-full object-cover overflow-hidden p-1"
          />
          </Link>
        )}

        {/* Cart button */}
        <Link href={'/cart'}>
        <div className="text-white flex items-center justify-center bg-black rounded-full hover:bg-black whitespace-nowrap p-2 px-3 relative">
          <BsCart2 className="text-2xl" />
          <p className="w-auto">${sum.toFixed(2)}</p>
          <span className="absolute -right-0.5 bg-white rounded-full -top-1 text-orange-600 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
            {quantity}
          </span>
        </div>
        </Link>

        {session && (
          <div
            className="text-gray-500 flex items-center justify-center bg-bglight rounded-full hover:bg-white border-[1px] whitespace-nowrap p-2 cursor-pointer"
            onClick={() => signOut()}
          >
            <CiLogout className="text-2xl" />
            <p className="w-auto">LogOut</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
