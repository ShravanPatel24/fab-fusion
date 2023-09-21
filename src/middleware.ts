import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// List of routes to be ignored from authentication checks
const ignoredRoutes = [
  "/about",
  "/terms",
  "/privacy",
  "/contact",
  "/api/products",
  "/api/users",
  "/api/products/6502ea0708da0b55a99b1c58",
];

// List of routes that should be considered public (do not require authentication)
const publicRoutes = [
  "/", // Add any other public routes here
  "/auth/dashboard/categories/tshirts", // Include the specific route you want to allow
];

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes,
  ignoredRoutes,

  // afterAuth(auth, req, evt) {
  //   // Check if the requested route is in the list of ignored routes
  //   const isIgnoredRoute = ignoredRoutes.includes(req.nextUrl.pathname);

  //   // handle users who aren't authenticated
  //   if (!auth.userId && !isIgnoredRoute) {
  //     return redirectToSignIn({ returnBackUrl: req.url });
  //   }

  //   // redirect them to the organization selection page
  //   if (auth.userId && req.nextUrl.pathname === "/") {
  //     const dashboardUrl = new URL("/auth/dashboard", req.url);
  //     return NextResponse.redirect(dashboardUrl);
  //   }
  // },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
