import Head from "next/head";
import React from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import { useContext } from "react";
import { txHash } from "./write-confession";
import { useRouter } from "next/router";

console.log(txHash);

import {
  faSearch,
  faFeather,
  faBookOpenReader,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>success</title>
        <meta name="description" content="confessions on the blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        id="main_div"
        className="     border-2 border-orange-400 min-h-screen flex flex-col justify-between px-2"
      >
        <div
          id="averageheadenjoyer"
          className="  border-2 border-white w-full h-14 ml-auto pt-4 pr-8 "
        >
          <div className=""></div>
        </div>

        <div className="    min-h-[calc(100vh-7.5rem)] border-2 border-red-800 flex flex-col  justify-between px-20 ">
          <div className="flex  justify-center       border-2 border-blue-600 py-2">
            <div className=" text-5xl font-cardo tracking-wide text-[#ffffff]  h-min ">
              <Link href="/">etched on chain</Link>
            </div>
          </div>

          <div className="    border-2 border-green-500 flex flex-col justify-center  px-4 ">
            <div className=" px-40 pb-8 flex-col flex py-4   border-2 border-red-500 gap-1  ">
              <div className="font-imfell px-2 py-4  text-[#C3B091] underline text-[2.4rem]  tracking-wide    text-center">
                {" "}
                thou hast testified
              </div>

              <div className=" pt-5 pb-4  text-[#d9d9d9] text-[1.5rem] italic font-sans text-justify flex justify-center">
                <div className="flex w-[95%]    border-2 border-red-500">
                  Your confession has successfully been recorded on the
                  blockchain. Fret not, as it shall stand the test of time for
                  future generations to witness. Unless there's an apocalypse in
                  which all humans and machines get wiped out lol
                </div>
              </div>

              <div className="   pt-5 pb-4  text-[1.2rem] font-sans text-justify flex justify-center">
                <div className="border-2 border-blue-500 flex w-[80%] gap-4 justify-center pt-2">
                  <Link
                    href={
                      "https://mumbai.polygonscan.com/tx/" + router.query.txHash
                    }
                    target="_blank"
                  >
                    <div className=" text-[#FDFDFD] flex border-2 h-12 border-red-500 bg-[#7E45DC] cursor-pointer hover:bg-[#743fcb] transition-all duration-200 active:bg-[#6a3ab8] select-none px-8 py-2 rounded-md">
                      <span className=" mr-2">
                        {" "}
                        <Image
                          alt="polygon logo"
                          height={40}
                          width={35}
                          src="polygon.svg"
                        />
                      </span>
                      <span className=" self-center">view testimony</span>
                    </div>
                  </Link>

                  <Link href={"write-confession"}>
                    <div className="text-[1.25rem]  h-12 bg-[#ffcf80] px-8 py-[0.6rem] rounded-md  flex gap-3 cursor-pointer  hover:bg-[#deb470] transition-all duration-100 active:bg-[#d2aa69] border-red-500">
                      {" "}
                      <span className=" border-red-500 rounded-md">
                        <FontAwesomeIcon icon={faFeather as IconProp} />
                      </span>
                      <span className="font-imfell">write a confession</span>
                    </div>
                  </Link>
                </div>
              </div>

              <Link href="read-confession">
                <div className="  text-[#] py-2    text-[1.25rem]   font-imfell text-justify flex justify-center">
                  <div className="bg-[#EEEEEE] cursor-pointer hover:bg-[#d2d2d2] transition-all duration-200 active:bg-[#c5c5c5] px-8 py-3 rounded-md  flex gap-3 select-none     border-2 border-red-500">
                    <span className="    border-2 border-red-500 rounded-md">
                      <FontAwesomeIcon icon={faBookOpen as IconProp} />
                    </span>
                    <span className="font-imfell">
                      read a random confession
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          id="averagefeetenjoyer"
          className="     border-2 border-green-500  text-3xl px-12 flex gap-5 pt-4 h-16"
        >
          <Link href="https://github.com/awesamarth/" target="_blank">
            <span className=" text-[#695d4b] hover:cursor-pointer  hover:text-[#f0f6fc] transition-all">
              <FontAwesomeIcon icon={faGithub} />{" "}
            </span>
          </Link>
          <Link href="https://twitter.com/awesamarth_/" target="_blank">
            <span className="text-[#695d4b] hover:cursor-pointer hover:text-[#1c9aef] transition-all">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
