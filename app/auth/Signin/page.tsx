'use client'
import { signIn } from 'next-auth/react';
import React, { useState,useRef } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { FaGoogle } from "react-icons/fa6";
import { useSession } from 'next-auth/react';
const SignInSection = () => {
  const [email,setemail]=useState('')
  const [pass,setpass]=useState('')
  const [tosent ,settosent]=useState(null)
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/login',{
        method: 'POST',
        body: JSON.stringify({email,pass}),
        headers: {
          'content-type': 'application/json'
        }
      })
      console.log(res)
      const a=await res.json()
      if(res.ok){
        console.log(a)
        settosent(a)
        setemail(a.email)
      }else{
        console.log("Oops! Something is wrong.")
      }
    } catch (error) {
        console.log(error)
    }
    

  };

  const router = useRouter();

  const { data: session } = useSession();
  if(session){
    router.push('/')
  }
  return (
    <section className="bg-white ">
      <div className="flex flex-col w-screen justify-center items-center ">
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24 ">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto flex flex-col gap-2">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign in to continue
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Don’t have an account?{' '}
              <a
                href="/auth/register"
                title=""
                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
              >
                Create a free account
              </a>
            </p>

            <form onSubmit={handleSubmit} method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name=""
                      id="" 
                      onChange={(e)=>setemail(e.target.value)}
                      placeholder="Enter email to get started"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      Password
                    </label>

                    <a
                      href="#"
                      title=""
                      className="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-2.5">
                    <input
                      type="password"
                      name=""
                      id=""
                      onChange={(e)=>setpass(e.target.value)}
                      placeholder="Enter your password"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    onClick={() => {
                      if (tosent && tosent.image) {
                        signIn('credentials', { email: email, image: tosent.image, redirect: false });
                      } else {
                        // Handle the case where tosent or tosent.image is not defined
                      }
                    }}
                 >
                    Log in
                  </button>
                  <div className='flex flex-row justify-center items-center py-3 px-2 gap-2 rounded bg-blue-600 text-white mt-2'>
                    <FaGoogle />
                  <button onClick={()=>signIn()}>Login With Google</button>
                  </div>
                </div>
              </div>
            </form>

           
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInSection;
