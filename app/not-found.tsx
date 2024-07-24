import React from 'react'
import Container from './_components/container'
import Link from 'next/link'

function Notfound() {
  return (

    <div className='w-screen h-screen flex  items-center justify-center mb-7'>
        <div className='flex h-full w-full items-center justify-center flex-col gap-4'>
            <span className='text-2xl font-bold text-black '>Your pages Not Found</span>
        <p className='text-base font-medium'>Oops! The page your are looking for does not exist It might have been moved or deleted </p>
        <Link href={'/'} className='bg-black p-5 rounded-full text-white'>Back Home</Link>
        </div>

    </div>

  )
}

export default Notfound