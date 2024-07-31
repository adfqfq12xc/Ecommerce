import User from "@/app/_model/user";
import { NextResponse } from "next/server";

export async function POST(req:any){
    const body=await req.json()
    try{
        const data=await User.findOne({ attributes:{exclude:['password']} ,where:{
            email:body.email
    }
        })
        return NextResponse.json(data)
    }catch{
        console.log("errorrrrr")
        return NextResponse.json("Erorrrrrrr")
    }

}
export async function PUT(req:any){
    const body=await req.json()
    try{
        const {email,password,username,image}=body
        console.log(body)
       await User.create({email:email,username:username,password:password,image:image})
      return NextResponse.json("success")
    }catch{
      return  NextResponse.json("Not added")
    }
}