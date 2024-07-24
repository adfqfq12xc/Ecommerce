"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { UseDispatch } from "react-redux";
import {
  decreaseQuantity,
  DeleteProduct,
  increaseQuantity,
} from "../_redux/smartslice";
function Cartcard(item: any) {
  const dispatch = useDispatch();
  console.log(item.item);

  const [products, setproducts] = useState([]);

  return (
    <div className="flex flex-row h-32 w-full py-4 mx-auto items-center bg-white mt-5 flex-grow  justify-between">
      <div className="flex flex-row items-center h-32  ">
        <TiDelete
          size={40}
          className="cursor-pointer"
          onClick={() => dispatch(DeleteProduct(item.item))}
        />
        <Image
          src={item.item.image}
          width={100}
          height={100}
          alt=" "
          className="ml-3 object-cover h-28 rounded "
        />
        <span className="ml-2 w-16 max-w-16 whitespace-nowrap">
          {item.item.title}
        </span>
      </div>
      <div className="flex flex-row items-center font-medium mr-2 border-solid border-2 border-dark-600 py-4 px-4 gap-5">
        <span> Quanntity </span>{" "}
        <span>
          <FaChevronLeft
            className="cursor-pointer"
            onClick={() => dispatch(decreaseQuantity(item.item))}
          />{" "}
        </span>{" "}
        <span> {item.item.quantity} </span>
        <span>
          {" "}
          <FaChevronRight
            className="cursor-pointer"
            onClick={() => dispatch(increaseQuantity(item.item))}
          />
        </span>
      </div>
      <div className="flex justify-end mr-2 font-medium h-3 w-3">
        {item.item.price * item.item.quantity}$

      </div>
    </div>
  );
}

export default Cartcard;
