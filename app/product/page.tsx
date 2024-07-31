'use client'
import React,{useState,useEffect} from 'react'
import { getsingleProduct } from '..'
import Image from 'next/image'
import { BsCart2 } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  category: string;
}
function page({searchParams}:string | any) {
  const [item, setItem] = useState<Post | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/post/${searchParams._id}`); // Update the URL accordingly
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        
        setItem(data);
      } catch (error) {  
    };
  }

    fetchData();
  }, []);


  

    
  return (
    <div className='max-w-screen-2xl max-h-[800px] my-auto mx-auto grid lg:grid-cols-2 gap-5 rounded-lg  bg-white lg:mt-36 '>
  
      <div className='p-3'>
        <Image src={item?.image} alt='Image' width={500} height={500} className='w-full max-h-[700px] rounded-lg object-cover overflow-hidden'/>
      </div>
      <div className='flex flex-col mt-10 gap-2 '>
      <div className='font-bold text-2xl uppercase' >
          <span className='font-medium text-2xl'>Items: </span> { item?.title}
        </div>
        <div className='font-bold text-2xl'>
        <span className='font-medium text-2xl'>Price: </span> {item?.price}$
        </div>
        <div className='text-xl mt-10'>
          {item?.description}
        </div>
        <div className='mt-10 uppercase font-medium'>
          Rating:{item?.rating}
        </div>
        <div className='uppercase font-medium'>
        category: {item?.category}
        </div>
        <div className='flex flex-row group mt-3' >
        <button className='bg-black py-4 px-3 text-white rounded border-r-[2px] border-r-slate-100 inline uppercase'>Add To Cart</button>
        <span className=' bg-black flex items-center justify-center text-white w-9 group-hover:bg-orange-500 '><BsCart2 size={20} /></span>
        </div>
        <p className='flex items-center '>
          <MdFavorite /> Add to wishList
        </p>
      </div>
      </div>

  )
}

export default page