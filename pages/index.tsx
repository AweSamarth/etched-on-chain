import Head from "next/head";
import React from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css'


import { IconProp } from "@fortawesome/fontawesome-svg-core";
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
        <title>etched on chain</title>
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

        <div className="        border-red-800  flex flex-col  justify-between px-20 ">


          <div className="flex  justify-center        border-blue-600 py-2">
            <div className=" text-5xl font-cardo tracking-wide text-[#ffffff]  h-min ">
              etched on chain
            </div>
          </div>

          <div className="        border-green-500 flex justify-center ">
            <div className=" mt-4 font-sans italic text-[#C3B091]  tracking-wide text-2xl max-w-[39rem]  text-justify">
              {" "}
              
              “<span className="">Words carved in stone remain long after the voice that uttered
              them is gone.</span>" -<span className="underline">Isabel Allende</span>
            </div>
          </div>



          

          <div className=" flex        border-red-400  justify-center mt-10">

            <div className="font-sans max-w-4xl  pl-2 pr-2 text-[#CDCDCD] text-2xl text-justify ">
              Get things off your chest and record them on the blockchain. It's
              not as permanent as stone but it definitely comes a close second.{" "}
            </div>
          </div>


          <div className="  border-green-500 flex  justify-center  my-8  ">
            {" "}
            <div className="flex w-[70%]  gap-7   border-blue-500 justify-evenly">

            <Link href="write-confession">
              <div className=" h-44 w-[21rem] bg-[#FFCF80] flex justify-center items-center rounded-lg cursor-pointer hover:bg-[#deb470] transition-all duration-100 active:bg-[#d2aa69]">
                <div className=" h-22 flex-col justify-center        border-red-500">
                  <div className="flex  justify-center mb-2">
                    <div>
                      <FontAwesomeIcon icon={faFeather as IconProp} size="3x" />
                    </div>
                  </div>
                  <div className="flex  text-center   border-blue-500 font-imfell text-[1.6rem] select-none ">
                    write a confession
                  </div>
                </div>
              </div>
              </Link>
              <Link href="read-confession"><div className=" h-44 w-[21rem] bg-[#EEEEEE] flex justify-center items-center rounded-lg cursor-pointer hover:bg-[#d2d2d2] transition-all duration-200 active:bg-[#c5c5c5]">
                <div className=" h-22 flex-col justify-center        border-red-500">
                  <div className="flex  justify-center mb-2">
                    <div>
                      <FontAwesomeIcon
                        icon={faBookOpen as IconProp}
                        size="3x"
                      />
                    </div>
                  </div>
                  <div className="flex         border-blue-500 font-imfell text-[1.6rem] select-none">
                    read a confession
                  </div>
                </div>
              </div>
              </Link>

            </div>
          </div>

          <div className=" flex    border-red-400 justify-center ">
            <div className="font-sans max-w-4xl pb-12 pl-2 pr-2 text-[#CDCDCD] text-2xl text-justify ">
              Your wallet address gets linked to your confession. Kindly refrain
              from posting anything extremely outta pocket, for it might end up
              getting the poor dev in trouble too.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
