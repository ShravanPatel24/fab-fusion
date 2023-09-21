"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const Header = () => {
  const { isLoaded, isSignedIn } = useUser();
  return (
    <header className="bg-gray-900 text-white py-4 relative ">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className=" text-xl font-bold">
          Fab Fusion
        </Link>
        <ul className="flex space-x-4">
          {isLoaded && isSignedIn ? (
            <li className=" border-red-500 border-2 rounded-full">
              <UserButton />
            </li>
          ) : (
            <li>
              <Link href="/sign-up">Sign In</Link>{" "}
            </li>
          )}
          {isLoaded && isSignedIn ? (
            <li>
              <Link href="#wishlist">
                <Image
                  src="/Wishlist.png"
                  width={32}
                  height={32}
                  alt="cart"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </Link>
            </li>
          ) : null}
          {isLoaded && isSignedIn ? (
            <li>
              <Link href="/cart">
                <Image
                  src="/Cart.png"
                  width={32}
                  height={32}
                  alt="cart"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </Link>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
