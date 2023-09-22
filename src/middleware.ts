import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  // "/" will be accessible to all users]

  publicRoutes: [
    // Add any other public routes here
    "/auth/dashboard/categories/tshirts", // Include the specific route you want to allow
  ],
  ignoredRoutes: [
    "/about",
    "/terms",
    "/privacy",
    "/contact",
    "/api/products",
    "/api/users",
    "/api/products/6502ea0708da0b55a99b1c58",
  ],

  afterAuth(auth, req) {
    // Redirect the user to the `/auth/dashboard` page if they are logged in and try to access the `/` page.
    if (auth.userId && req.nextUrl.pathname === "/") {
      const absoluteUrl = new URL("/auth/dashboard", req.url);
      return NextResponse.redirect(absoluteUrl);
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
