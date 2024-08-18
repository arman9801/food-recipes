import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            We're dedicated to bringing you the most mouthwatering and unique
            recipes from up-and-coming talent. Our platform features a diverse
            range of dishes, from traditional comfort food to international
            fusion cuisine..
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/askhan1497"
              target="_blank"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="mailto:akay41024@gmail.com"
              target="_blank"
              className="hover:text-white transition-colors duration-300"
            >
              Email
            </a>
            <a
              href="https://www.instagram.com/askhan1497/"
              target="_blank"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi 110062</p>
          <p>Email: info@recipeshub.com</p>
          <p>Phone: (+91) 837-689-8292</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Recipes Store. All rights reserved.
      </p>
    </footer>
  );
}
