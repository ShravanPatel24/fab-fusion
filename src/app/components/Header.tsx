import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white text-black py-4 relative ">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className=" text-xl font-bold">
          Fab Fusion
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="#sign-up">Sign Up</Link>
          </li>
          <li>
            <Link href="#wishlist">
              <Image src="/Wishlist.png" width={32} height={32} alt="cart" />
            </Link>
          </li>
          <li>
            <Link href="#cart">
              <Image src="/Cart.png" width={32} height={32} alt="cart" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="w-full h-px bg-black mt-4" />
    </header>
  );
};

export default Header;
