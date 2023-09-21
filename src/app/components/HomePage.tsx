import React from "react";
import Carousel from "../components/Carousel";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="text-black text-center py-20">
          <h1 className="text-3xl font-semibold mb-12">
            Welcome to Fab Fusion
          </h1>
          <Carousel />
          <Link href="/auth/sign-in">
            <button className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white font-bold py-2 px-6 rounded-full transition-transform transform hover:scale-105 hover:shadow-lg">
              Login to Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
