import Head from "next/head";
import React, { useEffect } from "react";
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
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  useEffect(()=>{
    console.log("\nLooking under the hood eh? I assume you're a developer/designer. Here is the link to the GitHub repo of this project ;)\nhttps://github.com/awesamarth/etched-on-chain")

  },[])

  return (
    <>
      <Head>
        <title>etched on chain</title>
        <meta name="description" content="confessions on the blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <div  id="main_div" className=" border-orange-400 min-h-screen flex flex-col justify-between px-2">

        <div id="averageheadenjoyer" className=" max-[520px]:h-10           border-white w-full h-14 ml-auto pt-4 pr-8 ">
          <div>
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

        <div className="    min-h-[calc(100vh-7.5rem)]           border-red-800 flex flex-col  justify-between px-20 max-[850px]:px-5 max-[520px]:px-3 ">


          <div className="flex  justify-center        border-blue-600 py-2 mx-10 max-[520px]:mx-0   ">
            
            <div className="  text-5xl font-cardo tracking-wide text-[#ffffff]  h-min l max-[520px]:text-[2.5rem]  max-[360px]:text-[2rem]    ">
            <Link href="/">etched on chain </Link>
            </div>
           
          </div>

          <div className="               border-green-500 flex justify-center mx-12 max-[520px]:mx-2  ">

            <div className=" mt-4 font-sans italic text-[#C3B091]  tracking-wide text-2xl max-w-[39rem]  text-justify max-[520px]:text-[1.25rem]">
              {" "}
              
              “<span className="">Words carved in stone remain long after the voice that uttered
              them is gone.</span>" -<span className="underline">Isabel Allende</span>
            </div>
          </div>


          <div className=" flex     border-red-400  justify-center mt-8">

            <div className="font-sans max-w-4xl  pl-2 pr-2 text-[#CDCDCD] text-2xl text-justify max-[520px]:text-[1.27rem] ">
              Get things off your chest and record them on the blockchain. It's
              not as permanent as stone but it definitely comes a close second.{" "}
            </div>
          </div>


          <div className="  max-[520px]:flex-col         border-red-500 flex  justify-center  my-8    ">
            
            <div className="flex gap-7         border-blue-500 justify-evenly  max-[730px]:justify-center max-[730px]:gap-8 max-[520px]:flex-col">
            <Link href="write-confession" className=" flex justify-center">
              <div className=" h-44 w-[21rem]  min-w-0  
                border-green-500  max-[730px]:self-center max-[520px]:h-16 max-[730px]:h-32 max-[730px]:w-[17rem]  max-[520px]:w-[18rem]  
              bg-[#FFCF80] flex justify-center items-center rounded-lg cursor-pointer hover:bg-[#deb470] max-[630px]:w-[13rem] 
              transition-all duration-100 active:bg-[#d2aa69]">
                <div className="flex justify-center min-[520px]:flex-col gap-3     2    border-red-500 items-center">
                  <div className="">
                  <div className=" text-5xl max-[730px]:text-3xl ">
                      <FontAwesomeIcon icon={faFeather as IconProp} size="1x" />
                    </div>
                  </div>
                  <div className="flex  text-center  h-min       border-blue-500 font-imfell text-[1.7rem] select-none max-[520px]:text-[1.3rem] max-[730px]:text-[1.4rem]">
                    write a confession
                  </div>
                </div>
              </div>
              </Link>
         
              <Link href="read-confession" className=" flex justify-center">
              <div className=" h-44 w-[21rem] min-w-0  
                border-green-500  max-[730px]:self-center max-[520px]:h-16 max-[730px]:h-32 max-[520px]:w-[18rem] max-[630px]:w-[13rem]   max-[730px]:w-[17rem]
              bg-[#EEEEEE] flex justify-center items-center rounded-lg cursor-pointer hover:bg-[#d2d2d2] 
              transition-all duration-100 active:bg-[#c5c5c5]">
                <div className="flex justify-center min-[520px]:flex-col gap-3     border-red-500 items-center">
                  <div className="">
                    <div className=" text-5xl max-[730px]:text-3xl">
                    <FontAwesomeIcon
                        icon={faBookOpen as IconProp}
                        size="1x"
                      />                    </div>
                  </div>
                  <div className="flex  text-center  h-min max-[730px]:text-[1.4rem]      border-blue-500 font-imfell text-[1.7rem] select-none max-[520px]:text-[1.3rem] ">
                    read a confession
                  </div>
                </div>
              </div>
              </Link>

            </div>
          </div>

          <div className=" flex max-[850px]:mx-2                border-red-400 justify-center ">
            <div className="font-sans max-w-4xl  pb-2 pl-2 pr-2 text-[#CDCDCD] text-2xl text-justify max-[520px]:text-[1.27rem] max-[520px]:pb-1 ">
              Your wallet address gets linked to your confession. Kindly refrain
              from posting anything extremely outta pocket, for it might end up
              getting the poor dev in trouble too.
            </div>
          </div>


          
        </div>
        
          <div id="averagefeetenjoyer" className="         border-green-500  text-3xl px-12 flex gap-5 pt-4 h-16 max-[850px]:pt-5 max-[850px]:px-4 ">
          <Link href="https://github.com/awesamarth/" target="_blank"><span className=" text-[#695d4b] hover:cursor-pointer  hover:text-[#f0f6fc] transition-all"><FontAwesomeIcon icon={faGithub} /> </span></Link>
          <Link href="https://twitter.com/awesamarth_/" target="_blank"><span className= "text-[#695d4b] hover:cursor-pointer hover:text-[#1c9aef] transition-all"><FontAwesomeIcon icon={faTwitter} /></span></Link>
          </div>

           

      </div>
    </>
  );
}
