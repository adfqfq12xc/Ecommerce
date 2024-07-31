import Image from "next/image";
import React from "react";
import bannerone from "../../public/assets/bannerone.jpg";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addtocart } from "../_redux/smartslice";
import { toast } from 'react-hot-toast';

function Cart({ item }: any) {
  const handleButtonClick = () => {
    toast.success('Added to cart : '+item.title); // Displays a success message
    dispatch(addtocart(item))  
    
  };
  const calculatePercentage = () => {
    if (item?.oldPrice && item?.price) {
      return -1*(100*item.price)/item.oldPrice 
    } else {
      return null; // or handle the case where oldPrice or price is missing
    }
  };
  const dispatch=useDispatch()

  return (
    <div className="group relative  overflow-hidden h-full w-full ">
      <div className="h-96">
      <Link href={{pathname:'/product',query:{_id:item?.id}}}> 
      <Image
          src={item?.image}
          alt="Portrait of a young woman"
          width={500}
           height={500}
          className="h-full w-full  object-cover  group-hover:scale-110 duration-200  overflow-hidden "
        />
        </Link> 
      </div>

      <div className="absolute top-0 p-4 sm:p-6 lg:p-8">
        {item.isNew && (
          <span
            className="text-xl  text-white group-hover:border-1 group-hover:bg-orange-400 rounded-full p-2 "
          >
            New arrival
          </span>
        )}
      </div>

      <p className="mt-5 font-bold">{item?.title}</p>
      <div className="flex relative">
        <div className="flex-1 ">
          <button className=" mt-2 p-3 border-[1px]  rounded-full block">
            {-Math.ceil(calculatePercentage()!)}% off
          </button>
          <button onClick={handleButtonClick} className=" mt-2 p-3 border-[1px] bg-orange-500 rounded-full">
            Add to cart
          </button>
        </div>
        <div className="flex-1 absolute right-1">
          <p className="line-through p-3 inline text-xl">{item.oldPrice}$</p>{" "}
          <p className=" p-3 inline-block text-xl text-black">{item?.price}$</p>
          <span className="text-yellow-500 flex flex-row gap-1s">
            {item?.rating &&
              Array.from({ length: item.rating }).map((_, index) => (
                <IoIosStar key={index} />
              ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
