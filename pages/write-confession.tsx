import Head from "next/head";
import React from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import '@fortawesome/fontawesome-svg-core/styles.css'

import {
  faSearch,
  faFeather,
  faBookOpenReader,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>write a confession</title>
        <meta name="description" content="confessions on the blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" min-h-screen">
        <div id="navbar" className="w-max h-14 ml-auto pt-4 pr-8">
          <div className="">
            {/* <ConnectButton
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
            /> */}
            <Link href="read-confession">
            <div className="bg-[#EEEEEE] select-none px-6 py-2 rounded md cursor-pointer hover:bg-[#d2d2d2] transition-all duration-200 active:bg-[#c5c5c5]">
              <span className=" h-12  border-red-500">
                <FontAwesomeIcon icon={faBookOpen as IconProp}   />
              </span>
              <span className="font-imfell text-lg ml-2">read a confession</span>
            </div>
            </Link>
          </div>
        </div>

        <div className="  border-red-800  flex flex-col h-[calc(100vh-5rem)] justify-between px-20 ">

          <div className="flex  justify-center     border-blue-600 py-2">
            <div className=" text-5xl font-cardo tracking-wide text-[#ffffff]  h-min ">
              etched on chain
            </div>
          </div>

          <div className="    border-green-500 flex-col  px-4 pt-8 pb-1 mt-4">
            <div className=" px-52">
              <div className="font-imfell italic text-[#C3B091]    text-2xl max-w-[39rem]  text-justify">
                {" "}
                write your confession here:
              </div>
              <div className="mt-2">
                <textarea
                  className=" placeholder:opacity-70 w-full h-64 mt-2 -mb-1 py-4 px-5 resize-none font-sans rounded-2xl bg-[#4B4B4B] text-[#FFFFFF] text-lg outline-none"
                  placeholder="don't you dare write anything about your healthy relationships with your friends/partner/parents, there is only so much cheesiness that I can handle"
                  spellCheck="false"
                />
              </div>
            </div>
          </div>

          <div className="   border-green-500 flex justify-center mb-14 mt-3">
            <div className=" h-28 font-imfell  text-[#181818]  tracking-wide text-[1.35rem] rounded-md max-w-[39rem]  text-justify flex ">
              {" "}
              <button className="cursor-pointer  hover:bg-[#deb470] transition-all duration-100 active:bg-[#d2aa69] self-start py-3 px-16 bg-[#FFCF80] rounded-md">
                confess
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
