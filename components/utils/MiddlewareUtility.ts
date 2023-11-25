// import {VerifyToken} from "./JWTHelper";
// import { NextRequest, NextResponse } from "next/server";

// export async function CheckCookieAuth(req) {

//     try {
//         let token = req.cookies.get('token');
//         let payload= await VerifyToken(token['value'])
//         console.log(payload['email'])
//         const requestHeaders = new Headers(req.headers)
//         requestHeaders.set('email', payload['email'])
//         return NextResponse.next({
//             request: {headers: requestHeaders},
//         })
//     }
//     catch (e) {
//         return NextResponse.redirect(new URL('/login', req.url))
//     }


// import { VerifyToken } from "./JWTHelper";
// import { NextRequest, NextResponse } from "next/server";

// export async function CheckCookieAuth(req: NextRequest) {
//     try {
//         let token = req.cookies.get('token');
        
//         if (token) {
//             let payload = await VerifyToken(token.value);
            
//             // Type assertion to tell TypeScript that payload.email is a string
//             const email: string = payload.email as string;
//             console.log(email);

//             const requestHeaders = new Headers(req.headers);
//             requestHeaders.set('email', email);

//             return NextResponse.next({
//                 request: { headers: requestHeaders },
//             });
//         } else {
//             throw new Error("Token not found in cookies");
//         }
//     } catch (e) {
//         return NextResponse.redirect(new URL('/login', req.url));
//     }
// }

