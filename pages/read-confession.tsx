import Head from "next/head";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import { useContractRead } from "wagmi";
import { ADDRESS, ABI } from "@/constants/constants";

import {
  faSearch,
  faFeather,
  faBookOpenReader,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";





const GET_CONFESSIONS = gql`
{
  confesseds {
    id
    confession
  }
}
`

export default function Home() {

  
const {data:contractData, isError, isLoading} = useContractRead({
  address: ADDRESS,
  abi:ABI,
  functionName:"getCounter"
})


  // console.log((contractData as any .toString())
  const {loading, error, data} = useQuery(GET_CONFESSIONS)

  console.log(data)


  const [randomIndex, setRandomIndex] = useState<number>()
  const [theConfessionObject, setTheConfessionObject] = useState<any>()

  

  useEffect(()=>{
    if(data){
      newConfession()
      
    }
  },[randomIndex])

  function newConfession(){
    if(data){
     const index= Math.floor(Math.random()*data.confesseds.length)
     const theConfession = data.confesseds[index].confession
     setTheConfessionObject({index:index, theConfession:theConfession})
    }
  }



  

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
        <div className="    flex flex-col  justify-between px-3 ">

          
          <div className="flex  justify-center mx-16         border-blue-600 py-2">
          
            <div className=" text-5xl font-cardo tracking-wide text-[#ffffff]  h-min ">
            <Link href="/">  etched on chain </Link>
            </div>
           
          </div>
      

          <div className="    mx-16     border-green-500 flex-col  px-4 pt-8 pb-1 mt-10">
            <div className="px-52 pb-4">
              <div className="font-cardo pb-2 tracking-wide  underline text-[#C3B091] text-3xl max-w-[39rem] text-justify ">
                {" "}

                {theConfessionObject?`Confession #${theConfessionObject.index+1}`:"Confession #"}
              </div>

              <div className="mt-4">
                <div className="flex w-full  min-h-[7.7rem] flex-col justify-center  mt-2  py-8 px-5 resize-none font-sans rounded-xl bg-[#646464] text-[#f2f2f2] text-[1.4rem] outline-none">
                  {theConfessionObject?(<div className=" h-min text-center italic">
                  {`"${theConfessionObject.theConfession}"`}
                  </div>):""}    

                           

                </div>
              </div>
            </div>
          </div>

          <div className="   mx-16     border-green-500 flex flex-col justify-center pb-4 mt-6">
            <div className=" py-4    text-[1.25rem]   font-imfell text-justify flex justify-center">
              <div className="bg-[#EEEEEE] px-8 py-3 rounded-md  cursor-pointer hover:bg-[#d2d2d2] transition-all duration-200 active:bg-[#c5c5c5] select-none flex gap-3       border-red-500">
                <span className="      border-red-500 rounded-md">
                  <FontAwesomeIcon icon={faBookOpen as IconProp} />
                </span>
                <span className="font-imfell" onClick={newConfession}>read another random confession</span>
              </div>
            </div>
            <div className="  text-[#] py-4    text-[1.25rem]   font-imfell text-justify flex justify-center">
              <div className="bg-[#ffcf80] px-8 py-3 rounded-md  flex gap-3 cursor-pointer  hover:bg-[#deb470] transition-all duration-100 active:bg-[#d2aa69]      border-red-500">
                <span className="      border-red-500 rounded-md">
                <FontAwesomeIcon icon={faFeather as IconProp}  />
                </span>
                <span className="font-imfell">write a confession</span>
              </div>
            </div>
          </div>
        <div className="text-white  mx-7 mt-[0.71rem]   text-3xl  flex gap-5  pb-2 relative bottom-0  ">
          <span className=""><FontAwesomeIcon icon={faGithub} /> </span>
          <span><FontAwesomeIcon icon={faTwitter} /></span>
          </div>


  
        </div>


      </div>
    </>
  );
}
