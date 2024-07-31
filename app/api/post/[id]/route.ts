import Post from "@/app/_model/post";
import { NextResponse } from "next/server";
import { NextRequest, NextFetchEvent } from "next/server";

export async function GET(request: NextRequest, { params }: NextFetchEvent) {
  try {
    console.log(params);
    
    const { id } = params;
    const a = await Post.findOne({ where: { id: parseInt(id) } });
    return NextResponse.json(a);
  } catch (error) {
    return NextResponse.json({ error: "Error while fetching" });
  }
}
