import Link from 'next/link'
import React from 'react'
import '../../app/globals.css'
function Logo() {
  return (
    <div className='flex flex-row justify-center items-center ' >
       
        <div className='beforehaha text-3xl block'></div>
        <Link href={'/'}> <h3 className='text-3xl hover:text-orange-500 cursor-pointer duration-300 navfromme block'>Smart</h3></Link>
        <div className='afterhaha'></div>
   
    </div>
  )
}

export default Logo