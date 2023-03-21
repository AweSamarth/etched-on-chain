import Head from "next/head";
import React from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import {
  faSearch,
  faFeather,
  faBookOpenReader,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>read a confession</title>
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
          </div>
        </div>

        <div className="   flex flex-col  justify-between px-20 ">
          <div className="flex  justify-center         border-blue-600 py-2">
            <div className=" text-5xl font-cardo tracking-wide text-[#ffffff]  h-min ">
              etched on chain
            </div>
          </div>

          <div className="        border-green-500 flex-col  px-4 pt-8 pb-1 mt-10">
            <div className="px-52 pb-4">
              <div className="font-cardo pb-2 tracking-wide  underline text-[#C3B091] text-3xl max-w-[39rem] text-justify ">
                {" "}
                Confession #1
              </div>

              <div className="mt-4">
                <div className="flex w-full  min-h-[7.7rem] flex-col justify-center  mt-2  py-8 px-5 resize-none font-sans rounded-xl bg-[#4e4e4e] text-[#e7e7e7] text-[1.4rem] outline-none">
                  <div className=" h-min text-center italic">
                  "sample confession that i will definitely remove tomorrow and make the app work and i am currently finding a way to make the text longer yeah i guess this much is fine"
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="       border-green-500 flex flex-col justify-center pb-4 mt-6">
            <div className=" py-4    text-[1.25rem]   font-imfell text-justify flex justify-center">
              <div className="bg-[#EEEEEE] px-8 py-3 rounded-md  cursor-pointer hover:bg-[#d2d2d2] transition-all duration-200 active:bg-[#c5c5c5] select-none flex gap-3      border-red-500">
                <span className="     border-red-500 rounded-md">
                  <FontAwesomeIcon icon={faBookOpen as IconProp} />
                </span>
                <span className="font-imfell">read another random confession</span>
              </div>
            </div>
            <div className="  text-[#] py-4    text-[1.25rem]   font-imfell text-justify flex justify-center">
              <div className="bg-[#ffcf80] px-8 py-3 rounded-md  flex gap-3 cursor-pointer  hover:bg-[#deb470] transition-all duration-100 active:bg-[#d2aa69]     border-red-500">
                <span className="     border-red-500 rounded-md">
                <FontAwesomeIcon icon={faFeather as IconProp}  />
                </span>
                <span className="font-imfell">write a confession</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
