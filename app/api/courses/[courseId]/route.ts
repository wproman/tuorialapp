import { db } from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request, {params} :{ params:{courseId:string}}
    ){
   try {
    const {userId} = auth();
    const {courseId} = params;
    const values = await req.json()

     if(!userId){
        return new NextResponse('Unauthorized', {status:401})
     }

     const course = await db.course.update({
        where:{
            id: courseId,
            userId,
        },
        data:{
            ...values,
        }
     })


   } catch (error) {
    console.log("[COUSRE UPDATE]", error);
    return new NextResponse("Internal Erro", {status:500})
   }
}