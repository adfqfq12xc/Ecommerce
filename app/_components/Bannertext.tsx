import React from 'react'
import { motion } from 'framer-motion'
import Container from './container'
import Link from 'next/link'
function Bannertext() {
  return (
 
    <div className='hidden lg:flex absolute  top-0 left-0 w-full h-full flex-col justify-center gap-y-6 p-16 '>
    
        <motion.div
    initial={{ opacity: 0, y:-100 }}  
    whileInView={{ opacity: 1, y: 0 }}
    transition={{duration:0.5}}
    className='text-7xl font-bold text-white '
    >
Outware Picks 
        </motion.div>
        <motion.p
    initial={{ opacity: 0, y:-100 }}  
    whileInView={{ opacity: 1, y: 0 }}
    transition={{duration:0.6}}
    className=' text-xl   text-slate-100 '
    >
Stock up on sportwear and limited edition collection on our awesome mid0season sale
        </motion.p>
        <Link href='/#product'>
        <motion.div    
         initial={{ opacity: 0, y:-100 }}  
    whileInView={{ opacity: 1, y: 0 }}
    transition={{duration:0.7}} 
    >
            <button className='bg-slate-200 rounded-full p-2 px-3 mr-2 hover:bg-white'>Find out more</button>
            <button className='bg-slate-200 rounded-full p-2 px-3 hover:bg-white'>Shop now</button>

        </motion.div>
        </Link>
 

    </div>

  )
}

export default Bannertext