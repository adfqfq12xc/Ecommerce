"use client";
 import User from "../_model/user";
 import { useSession } from "next-auth/react";
import { UploadButton } from "../_utils/uploadthing"; 
import { useState } from "react";
import Image from "next/image";
export default function Homee() {
    const { data:session }=useSession()
    const [image,setimage]=useState('')
  return (
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
        
 
    </main>
  );
}