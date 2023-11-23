// import { NextResponse } from 'next/server'
// import { NextRequest } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest,response:NextResponse) {
//   if(request.nextUrl.pathname.startsWith("/api/cookies")){
//    const reqHeader = new Headers(request.headers)
//    reqHeader.set('x-hello-from-middleware1', 'hello1')
//    const token = reqHeader.get('token')
//    console.log(token);
//    if(token === "13"){
//       const response = NextResponse.next()
//        response.headers.set('x-hello-from-middleware2', 'hello2')
      
//       return response
//    } else{
//       return NextResponse.json({msg: "fail"},{status:401})
//    }

// }
// }


// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// export function middleware(request: NextRequest) {
//   // Clone the request headers and set a new header `x-hello-from-middleware1`
//   const requestHeaders = new Headers(request.headers)
//   requestHeaders.set('x-hello-from-middleware1', 'hello1')
 
//   // You can also set request headers in NextResponse.rewrite
//   const response = NextResponse.next({
//     request: {
//       // New request headers
//       headers: requestHeaders,
//     },
//   })
 
//   // Set a new response header `x-hello-from-middleware2`
//   response.headers.set('x-hello-from-middleware1', 'hello2')
//   response.headers.set('x-hello-from-middleware2', 'hello3')
//   return response
// }

// }
import {CheckCookieAuth} from "@/components/utils/MiddlewareUtility";
import { NextRequest } from "next/server";
export async function middleware(req:NextRequest) {
    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        console.log("Hello")
        return await CheckCookieAuth(req)
    }
}

