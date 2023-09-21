import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  const pageStyle: React.CSSProperties = {
    height: "100vh", // Set the height of the page to the viewport height
    overflow: "hidden", // Hide overflow to prevent scrolling
    position: "relative",
  };

  const contentStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1, // Ensure the content is above the background
  };

  return (
    <div className="page" style={pageStyle}>
      <div className="container" style={contentStyle}>
        <div className="flex justify-center">
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-red-500 hover:bg-red-600 text-sm normal-case",
              },
            }}
          />
        </div>
      </div>
      <div
        className="absolute inset-0 bg-blur"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")`,
        }}
      />
    </div>
  );
}
