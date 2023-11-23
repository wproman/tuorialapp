import { db } from "@/lib/prismadb";
import {  NextResponse } from "next/server";



export async function POST(
    req:Request,
){
    try {
        const {title, userId = 'defaultUserId'} = await req.json();
         
        const course = await db.course.create({
          data :{
            title,
            userId
          }
        })
        return NextResponse.json(course)
    } catch (error) {
        console.log('[COURSES]', error);
        return new NextResponse("Internal Error", {status: 500})
    }
}