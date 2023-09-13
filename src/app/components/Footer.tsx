import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-4">Fab Fusion</h2>
            <p className="text-sm">
              Crate Your Own Design On Your Fav Ones.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm">
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">123 Main Street</p>
            <p className="text-sm">Dist. Sirohi</p>
            <p className="text-sm">City: Swaroopganj</p>
            <p className="text-sm">Pin. 307023, Bharat</p>
            <p className="text-sm">Email: info@fabfusion.com</p>
            <p className="text-sm">Phone: +91 7742026070</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <ul className="flex space-x-2">
              <li>
                <Link href="#">
                  <Image src="/fb.png" width={24} height={24} alt="facebook" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src="/instagram.png"
                    width={24}
                    height={24}
                    alt="instagram"
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src="/linkedin.png"
                    width={24}
                    height={24}
                    alt="linkedin"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Fab Fusion. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
