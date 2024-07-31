import { NextResponse } from "next/server"
import User from "@/app/_model/user"
export async function POST(req:any){
    const data  =await req.json()
    const {email,pass}=data
   const res=await User.findOne({ attributes:{exclude:['password']} ,where:{
        email:email,password:pass
    }})
    
    console.log(res)

    return NextResponse.json(res)
}