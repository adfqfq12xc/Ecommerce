'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Homee from '@/app/_components/button';
import Image from 'next/image';
import { UploadButton } from "../../_utils/uploadthing"; 
const SignInSection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const router = useRouter();
  const { data: session } = useSession();
  const [image,setimage]=useState('')
  if (session) {
    router.push('/');
  }

  const handleSignUp = async (e:any) => {
    e.preventDefault();
    let errorMessages = [];

    if (password !== confirmPassword) {
      errorMessages.push("Passwords do not match");
    }
   

    if (!email) {
      errorMessages.push("Email is required");
    }

    if (!password) {
      errorMessages.push("Password is required");
    }


    const res=await  fetch("http://localhost:3000/api/signup",{
      method: 'POST',
      body: JSON.stringify({email}),
      headers: {
        'content-type': 'application/json'
      }
    })
    console.log(res)
    const a=await res.json()
    if(res.ok)
    console.log(a)
  if(a){
    errorMessages.push("this email is already registred")

  }
  console.log(image)
    
    if (errorMessages.length > 0) {
      setErrors(errorMessages);
      return;
    }else {
      const username=email.split('.')[0]
      console.log(username)
     const put=await fetch('http://localhost:3000/api/signup',{
        method:'PUT',
        body:JSON.stringify({email:email,password:password,username:username,image:image}) 
      })
      if(put.ok){
        const a=await put.json()
        console.log(a)
        router.push('/')
      }
     
     
    }
  

  
  };

  return (
    <section className="bg-gray-100 flex flex-row w-screen h-screen items-center justify-center">
      <div className="flex flex-col w-screen justify-center items-center flex-1">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
          Register Now
        </h2>
        <form onSubmit={handleSignUp} method="POST" className="mt-8">
          <div className="space-y-5">
            {errors.length > 0 && (
              <div className="text-red-500">
                {errors.map((error, index) => (
                  <div key={index}>{error}</div>
                ))}
              </div>
            )}
            <div>
              <label htmlFor="email" className="text-base font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email to get started"
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="text-base font-medium text-gray-900">
                Password
              </label>
              <div className="mt-2.5">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="confirm-password" className="text-base font-medium text-gray-900">
                Password Again
              </label>
              <div className="mt-2.5">
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Enter your password again"
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                  required
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
              >
                Signup
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-col w-full h-screen justify-center items-center flex-1">
      <main className="flex min-h-screen flex-col items-center justify-center  gap-10">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("sa")
          console.log(res[0]?.url);
          setimage(res[0].url)
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
        className="bg-red-500 mt-0 mb-0"
      />
    
        <div className="w-full h-auto border-red-300  border-2 border-dashed   flex justify-center items-center p-5">
        {image? (
        <Image src={image} width={300} height={300} alt="hey" className="rounded"/>
      ):(<>
      No Image Added
        </>
      )}
        </div>
        
 
    </main>      </div>
    </section>
  );
};

export default SignInSection;
