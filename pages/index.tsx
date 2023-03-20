import Head from "next/head";
import React from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <title>Create Next App</title>
        <meta name="description" content="confessions on the blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" min-h-screen">
        <div id="navbar" className="w-max h-12 ml-auto pt-4 pr-8">
          {/* <div className="  w-40 bg-[#9e8d75]"> */}
          <div className="">
            <ConnectButton
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
            />
          </div>
        </div>

        <div className="  border-red-800  mt-3 flex flex-col h-[calc(100vh-3.75rem)] justify-evenly px-20 ">
          <div className="flex   justify-center  border-blue-600">
            <div className=" text-5xl font-cardo tracking-wide text-[#ffffff]  h-min ">
              etched on chain
            </div>
          </div>

          <div className="  border-green-500 flex justify-center">
            <div className=" mt-3 font-sans italic text-[#C3B091]  tracking-wide text-2xl max-w-[39rem] underline">
              {" "}
              “Words carved in stone remain long after the voice that uttered
              them is gone." - Isabel Allende
            </div>
          </div>

          <div className=" flex  border-red-400  justify-center mt-10">
            <div className="font-sans max-w-4xl  pl-2 pr-2 text-[#CDCDCD] text-2xl text-justify ">
              Get things off your chest and record them on the blockchain. It's
              not as permanent as stone but it definitely comes a close second.{" "}
            </div>
          </div>

          <div className="  border-green-500 flex justify-center  my-8  ">
            {" "}
            <div className="flex w-[60%]   border-red-500 justify-evenly">
              <div className=" h-44 w-[21rem] bg-[#FFCF80] flex justify-center items-center rounded-lg cursor-pointer hover:bg-[#deb470] transition-all duration-100 active:bg-[#d2aa69]">
                <div className=" h-22 flex-col justify-center  border-red-500">
                  <div className="flex  justify-center mb-2">
                    <div className="w-10">
                      <FontAwesomeIcon icon={faFeather as IconProp} size="1x" />
                    </div>
                  </div>

                  <div className="flex   border-blue-500 font-imfell text-2xl">
                    write a confession
                  </div>
                </div>
              </div>

              <div className=" h-44 w-[21rem] bg-[#EEEEEE] flex justify-center items-center rounded-lg cursor-pointer hover:bg-[#d2d2d2] transition-all duration-200 active:bg-[#c5c5c5]">
                <div className=" h-22 flex-col justify-center  border-red-500">
                  <div className="flex  justify-center mb-2">
                    <div className="w-10">
                      <FontAwesomeIcon
                        icon={faBookOpen as IconProp}
                        size="1x"
                      />
                    </div>
                  </div>

                  <div className="flex   border-blue-500 font-imfell text-2xl">
                    read a confession
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex   border-red-400 justify-center ">
            <div className="font-sans max-w-4xl pb-10 pl-2 pr-2 text-[#CDCDCD] text-2xl text-justify ">
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
