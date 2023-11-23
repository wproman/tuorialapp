// import { PrismaClient, Prisma } from '@prisma/client';
// import { NextResponse, NextRequest } from 'next/server';

// export const db = new PrismaClient();

// export async function POST(req: NextRequest, res: NextResponse) {
      
//   try {
//     const reqBody: Prisma.UsersCreateInput = await req.json();
    
//     // Ensure that only valid properties are passed to Prisma.UsersCreateInput
//     const user = await db.users.create({
//       data: reqBody,
//     });

//     return NextResponse.json({ status: 201, mgs: user });
//   } catch (error:any) {
//     return NextResponse.json({ status: 'fail', data: error.toString() });
//   }
// }



// import { db } from "@/lib/prismadb";
// import {  NextResponse } from "next/server";
// import { z } from 'zod';
// const UserSchema = z.object({
//   id: z.bigint(),
//   firstName: z.string().max(50),
//   lastName: z.string().max(50).nullable(),
//   email: z.string().max(50).nullable(),
//   mobile: z.string().max(50).nullable(),
//   password: z.string().nullable(),
//   otp: z.string().max(50).nullable(),
//   created_at: z.date(),
//   updated_at: z.date(),
// });

// interface RequestBody {
//   firstName: string;
//   lastName?: string | null;
//   email?: string | null;
//   mobile?: string | null;
//   password?: string | null;
//   otp?: string | null;
// }
// export async function POST(
//     req:Request,
// ){
//     try {
//         const reqBody:RequestBody = await req.json();
//           // Validate request body against UserSchema
//     const validatedData = UserSchema.parse(reqBody); 
//         const user = await db.users.create({
//           data :{
//             validatedData,
          
//           }
//         })
//         return NextResponse.json(user)
//     } catch (error) {
//         console.log('[REGISTRATION]', error);
//         return new NextResponse("Internal Error", {status: 500})
//     }
// }




import { db } from "@/lib/prismadb";
import { NextResponse } from "next/server";
// import { z } from 'zod';

// const UserSchema = z.object({
//   id: z.bigint(),
//   firstName: z.string().max(50),
//   lastName: z.string().max(50).nullable(),
//   email: z.string().max(50).nullable(),
//   mobile: z.string().max(50).nullable(),
//   password: z.string().nullable(),
//   otp: z.string().max(50).nullable(),
//   created_at: z.date(),
//   updated_at: z.date(),
// });

interface RequestBody {
  firstName: string;
  lastName?: string | null;
  email?: string | null;
  mobile?: string | null;
  password?: string | null;
  otp?: string | null;
}

export async function POST(req: Request) {
  try {
    const reqBody: RequestBody = await req.json();

    // Validate request body against UserSchema
    // const validatedData = UserSchema.parse(reqBody);

    // Create user using validated data
    const user = await db.users.create({
      data: reqBody,
    });

    return NextResponse.json(user);
  } catch (error:any) {
    console.log('[REGISTRATION]', error);
    return new NextResponse( error.toString());
  }
}


