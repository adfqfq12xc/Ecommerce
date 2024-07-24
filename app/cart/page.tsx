'use client'
import React from 'react'
import Container from '../_components/container'
import Cartcard from '../_components/cartcard'
import { useDispatch, useSelector } from 'react-redux'
import { ResetProduct } from '../_redux/smartslice'
function Page() {
  const dispatch=useDispatch()
  const productdata = useSelector((state: any) => state?.shopping)

  return (
    <div className='mt-20'>
      <Container className='flex flex-col gap-y-2 justify-center items-center'>
   
          {productdata?.productData?.map((e: any) => {
            return <Cartcard item={e} />
          })}
          </Container>
        {productdata.productData.length>0 &&       
           <Container className='flex flex-col gap-y-4 justify-end items-end'>
          <button className='px-4 py-2 bg-red-500 border-solid border-2 border-dark ' onClick={()=>dispatch(ResetProduct())}>Reset</button>
          </Container> }
 

    
    </div>
  )
}

export default Page;
