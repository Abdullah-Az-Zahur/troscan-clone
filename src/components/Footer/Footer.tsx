import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-foreground text-background">
      <div className="p-2 md:p-5 lg:p-10 mt-20 text-center">
        <div className="my-20">
          <h1 className="text-xl font-bold mb-10">Troscán</h1>
          <div className="grid md:grid-cols-3 max-w-3xl mx-auto">
            <div>
              <h2 className="text-sm text-gray-300 my-5">Sitemap</h2>
              <div className="flex flex-col">
                <Link href={"#"} className="text-xl md:text-2xl">
                  About
                </Link>
                <Link href={"#"} className="text-xl md:text-2xl">
                  Projects
                </Link>
                <Link href={"#"} className="text-xl md:text-2xl">
                  News
                </Link>
                <Link href={"#"} className="text-xl md:text-2xl">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-sm text-gray-300 my-5">Socials</h2>
              <div className="flex flex-col">
                <Link href={"#"} className="text-xl md:text-2xl">
                  Facebook
                </Link>
                <Link href={"#"} className="text-xl md:text-2xl">
                  Instagram
                </Link>
                <Link href={"#"} className="text-xl md:text-2xl">
                  LinkedIn
                </Link>
                <Link href={"#"} className="text-xl md:text-2xl">
                  Twitter
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-sm text-gray-300 my-5">More</h2>
              <div className="flex flex-col">
                <Link href={"#"} className="text-xl md:text-2xl">
                  License
                </Link>
                <Link href={"#"} className="text-xl md:text-2xl">
                  Grainient
                </Link>
                <Link href={"#"} className="text-xl md:text-2xl">
                  Inspirux
                </Link>
                <Link href={"#"} className="text-xl md:text-2xl">
                  Store
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <p className="my-5 text-sm text-gray-300">
          © 2025, All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
