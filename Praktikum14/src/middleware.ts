// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { getToken } from "next-auth/jwt";

// export async function middleware(request: NextRequest) {
//     const token = await getToken({
//         req: request,
//         secret: process.env.NEXTAUTH_SECRET,
//     });

//     if (token) {
//         return NextResponse.next();
//     } else {
//         return NextResponse.redirect(new URL("/auth/login", request.url));
//     }
// }

// export const config = {
//     matcher: ["/product", "/about", "/profile", "/profile/:path*"],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("next-auth.session-token");
    if (token) {
        return NextResponse.next();
    } else {
        return NextResponse.redirect(new URL("/", request.url));
    }
}

export const config = {
    matcher: ["/product", "/about", "/profile"],
};
