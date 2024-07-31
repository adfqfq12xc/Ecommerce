import Post from "@/app/_model/post";
import { NextResponse } from "next/server";
 
export async function GET(req:Request){
    const {searchParams}=new URL(req.url)
   const limit=parseInt(searchParams.get('limit')|| '1')
   const data=await Post.findAll({limit:limit,order:[['isNew','DESC'],['createdAt','DESC']]})
  return NextResponse.json(data)
   
}