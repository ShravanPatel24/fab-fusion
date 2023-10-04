import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Image from "next/image";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <Link href="/">
              <h2 className="text-xl font-semibold mb-4">Fab Fusion</h2>
            </Link>
            <p className="text-sm">Be More Stylish 😉</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul className="text-sm">
              <li className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-gray-400 mr-2" size={20} />
                123 Main Street, Swaroopganj, Sirohi, Rajasthan, 307023, Bharat
              </li>
              <li className="flex items-center mb-2">
                <FaEnvelope className="text-gray-400 mr-2" size={16} />

                <a href="mailto:info@fabfusion.com" className="text-white">
                  info@fabfusion.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-gray-400 mr-2" size={16} />
                +91 7742026070
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <ul className="flex space-x-2">
              <li>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/_meshravanpatel"
                >
                  <Image src="/fb.png" width={24} height={24} alt="facebook" />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/_meshravanpatel"
                >
                  <Image
                    src="/instagram.png"
                    width={24}
                    height={24}
                    alt="instagram"
                  />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/patel-shravan/"
                >
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
